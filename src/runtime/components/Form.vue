
<script setup>
import { provide, inject, nextTick, ref, onUnmounted, onMounted, computed, useId, readonly, reactive } from 'vue'
import { useEventBus } from '@vueuse/core'
import { formOptionsInjectionKey, formInputsInjectionKey, formBusInjectionKey, formLoadingInjectionKey, formErrorsInjectionKey, formStateInjectionKey } from '../composables/useFormField'
import { tv } from '../utils/tv'
import { validateSchema, getAtPath, setAtPath } from '../utils/form'
import { FormValidationException } from '../types/form'


const props = withDefaults(defineProps(), {
  validateOn() {
    return ['input', 'blur', 'change']
  },
  validateOnInputDelay: 300,
  transform: () => true,
  loadingAuto: true
})

const emits = defineEmits()
defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.form || {}) }))

const formId = props.id ?? useId()

const bus = useEventBus(`form-${formId}`)

const parentBus = props.nested === true && inject(
  formBusInjectionKey,
  undefined
)

const parentState = props.nested === true ? inject(formStateInjectionKey, undefined) : undefined
const state = computed(() => {
  if (parentState?.value) {
    return props.name ? getAtPath(parentState.value, props.name) : parentState.value
  }
  return props.state
})

provide(formBusInjectionKey, bus)
provide(formStateInjectionKey, state)

const nestedForms = ref(new Map())

onMounted(async () => {
  if (parentBus) {
    await nextTick()
    parentBus.emit({ type: 'attach', validate: _validate, formId, name: props.name, api })
  }
})

onUnmounted(() => {
  bus.reset()
  if (parentBus) {
    parentBus.emit({ type: 'detach', formId })
  }
})

onMounted(async () => {
  bus.on(async (event) => {
    if (event.type === 'attach') {
      nestedForms.value.set(event.formId, { validate: event.validate, name: event.name, api: event.api })
    } else if (event.type === 'detach') {
      nestedForms.value.delete(event.formId)
    } else if (props.validateOn?.includes(event.type) && !loading.value) {
      if (event.type !== 'input') {
        await _validate({ name: event.name, silent: true, nested: false })
      } else if (event.eager || blurredFields.has(event.name)) {
        await _validate({ name: event.name, silent: true, nested: false })
      }
    }

    if (event.type === 'blur') {
      blurredFields.add(event.name)
    }

    if (event.type === 'change' || event.type === 'input' || event.type === 'blur' || event.type === 'focus') {
      touchedFields.add(event.name)
    }

    if (event.type === 'change' || event.type === 'input') {
      dirtyFields.add(event.name)
    }
  })
})

const errors = ref()

provide(formErrorsInjectionKey, errors)

const inputs = ref({})
provide(formInputsInjectionKey, inputs)

const dirtyFields= reactive(new Set())
const touchedFields= reactive(new Set())
const blurredFields= reactive(new Set())

function resolveErrorIds(errs) {
  return errs.map(err => ({
    ...err,
    id: err?.name ? inputs.value[err.name]?.id : undefined
  }))
}

const transformedState = ref(null)

async function getErrors() {
  let errs = props.validate ? (await props.validate(state.value)) ??  : 

  if (props.schema) {
    const { errors, result } = await validateSchema(state.value, props.schema)
    if (errors) {
      errs = errs.concat(errors)
    } else {
      transformedState.value = result
    }
  }

  return resolveErrorIds(errs)
}

async function _validate(opts = { silent: false, nested: false, transform: false }) {
  const names = opts.name && !Array.isArray(opts.name) ? [opts.name] : opts.name

  // Validate nested forms if needed
  let nestedResults = 
  let nestedErrors = 

  if (!names && opts.nested) {
    const validations = Array.from(nestedForms.value.values()).map(form =>
      validateNestedForm(form, opts)
    )
    const results = await Promise.all(validations)

    nestedErrors = results
      .filter(r => r.error)
      .flatMap(r => r.error!.errors.map(e => addFormPath(e, r.name)))

    nestedResults = results.filter(r => r.output !== undefined)
  }

  // Get all errors
  const currentErrors = await getErrors()
  const allErrors = [...currentErrors, ...nestedErrors]

  // Filter by field names if specified
  if (names) {
    errors.value = filterErrorsByNames(allErrors, names)
  } else {
    errors.value = allErrors
  }

  // Handle validation failure
  if (errors.value?.length) {
    if (opts.silent) return false
    throw new FormValidationException(formId, errors.value)
  }

  // Apply transformations
  if (opts.transform) {
    nestedResults.forEach((result) => {
      if (result.name) {
        setAtPath(transformedState.value, result.name, result.output)
      } else {
        Object.assign(transformedState.value, result.output)
      }
    })
    return transformedState.value ?? state.value
  }

  return state.value
}

const loading = ref(false)
provide(formLoadingInjectionKey, readonly(loading))

async function onSubmitWrapper(payload) {
  loading.value = props.loadingAuto && true

  const event = payload

  try {
    event.data = await _validate({ nested: true, transform: props.transform })
    await props.onSubmit?.(event)
    dirtyFields.clear()
  } catch (error) {
    if (!(error instanceof FormValidationException)) {
      throw error
    }

    const errorEvent= {
      ...event,
      errors: error.errors
    }
    emits('error', errorEvent)
  } finally {
    loading.value = false
  }
}

const disabled = computed(() => props.disabled || loading.value)

provide(formOptionsInjectionKey, computed(() => ({
  disabled: disabled.value,
  validateOnInputDelay: props.validateOnInputDelay
})))

// Simple helper functions for nested forms
async function validateNestedForm(form: { validate: typeof _validate, name? }, opts) {
  try {
    const result = await form.validate({ ...opts, silent: false })
    return { name: form.name, output: result }
  } catch (error) {
    if (!(error instanceof FormValidationException)) throw error
    return { name: form.name, error }
  }
}

function addFormPath(error?){
  if (!formPath || !error.name) return error
  return { ...error, name: formPath + '.' + error.name }
}

function stripFormPath(error){
  const prefix = formPath + '.'
  const name = error?.name?.startsWith(prefix)
    ? error.name.substring(prefix.length)
    : error.name
  return { ...error, name }
}

function filterFormErrors(errors, formPath) {
  if (!formPath) return errors

  return errors
    .filter(e => e?.name?.startsWith(formPath + '.'))
    .map(e => stripFormPath(e, formPath))
}

function getFormErrors(form) {
  return form.api.getErrors().map(e =>
    form.name ? { ...e, name: form.name + '.' + e.name } : e
  )
}

function matchesTarget(target, path?) {
  if (!target || !path) return true
  if (target instanceof RegExp) return target.test(path)
  return path === target || (typeof target === 'string' && target.startsWith(path + '.'))
}

function getNestedTarget(target, formPath) {
  if (!target || target instanceof RegExp) return target
  if (formPath === target) return undefined
  if (typeof target === 'string' && target.startsWith(formPath + '.')) {
    return target.substring(formPath.length + 1)
  }
  return target
}

function filterErrorsByNames(allErrors, names: (keyof O)) {
  const nameSet = new Set(names)
  const patterns = names
    .map(name => inputs.value?.[name]?.pattern)
    .filter(Boolean)

  const matchesNames = (error) => {
    if (!error.name) return false
    if (nameSet.has(error.name)) return true
    return patterns.some(pattern => pattern.test(error.name!))
  }

  const keepErrors = errors.value.filter(error => !matchesNames(error))
  const newErrors = allErrors.filter(matchesNames)

  return [...keepErrors, ...newErrors]
}

function filterErrorsByTarget(currentErrors, target: keyof I | string | RegExp) {
  return currentErrors.filter(err =>
    target instanceof RegExp
      ? !(err.name && target.test(err.name))
      : !err.name || err.name !== target
  )
}

function isLocalError(error) {
  return !error.name || !!inputs.value[error.name]
}

const api = {
  validate: _validate,
  errors,

  setErrors(errs, name?: keyof I | string | RegExp) {
    // Handle local errors
    const localErrors = resolveErrorIds(errs.filter(isLocalError))

    // Handle nested form errors
    const nestedErrors = 
    for (const form of nestedForms.value.values()) {
      if (matchesTarget(name, form.name)) {
        const formErrors = filterFormErrors(errs, form.name)
        form.api.setErrors(formErrors, getNestedTarget(name, form.name || ''))
        nestedErrors.push(...getFormErrorsform)
      }
    }

    if (name) {
      const keepErrors = filterErrorsByTarget(errors.value, name)
      errors.value = [...keepErrors, ...localErrors, ...nestedErrors]
    } else {
      errors.value = [...localErrors, ...nestedErrors]
    }
  },

  async submit() {
    await onSubmitWrapper(new Event('submit'))
  },

  getErrors(name?: keyof I | string | RegExp) {
    if (!name) return errors.value

    return errors.value.filter(err =>
      name instanceof RegExp
        ? err.name && name.test(err.name)
        : err.name === name
    )
  },

  clear(name?: keyof I | string | RegExp) {
    // Keep local errors not matching the target
    const localErrors = name
      ? errors.value.filter(err =>
          isLocalError(err)
          && (name instanceof RegExp
            ? !(err.name && name.test(err.name))
            : err.name !== name)
        )
      : 

    // Clear from nested forms and collect remaining errors
    const nestedErrors = 
    for (const form of nestedForms.value.values()) {
      if (matchesTarget(name, form.name)) form.api.clear()
      nestedErrors.push(...getFormErrorsform)
    }

    errors.value = [...localErrors, ...nestedErrors]
  },

  disabled,
  loading,
  dirty: computed(() => !!dirtyFields.size),
  dirtyFields: readonly(dirtyFields),
  blurredFields: readonly(blurredFields),
  touchedFields: readonly(touchedFields)
}

defineExpose(api)
</script>

<template>
  <component
    :is="parentBus ? 'div' : 'form'"
    :id="formId"
    :class="ui({ class: props.class })"
    @submit.prevent="onSubmitWrapper"
  >
    <slot :errors="errors" :loading="loading" />
  </component>
</template>
