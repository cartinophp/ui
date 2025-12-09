
<script setup>
import { computed, ref, inject, provide, useId, watch } from 'vue'
import { Primitive, Label } from 'reka-ui'
import { formFieldInjectionKey, inputIdInjectionKey, formErrorsInjectionKey, formInputsInjectionKey } from '../composables/useFormField'
import { tv } from '../utils/tv'

const props = defineProps()
const slots = defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.formField || {}) })({
  size: props.size,
  required: props.required
}))

const formErrors = inject(formErrorsInjectionKey, null)

const error = computed(() => props.error || formErrors?.value?.find(error => error.name === props.name || (props.errorPattern && error.name?.match(props.errorPattern)))?.message)

const id = ref(useId())
// Copies id's initial value to bind aria-attributes such as aria-describedby.
// This is required for the RadioGroup component which unsets the id value.
const ariaId = id.value

const formInputs = inject(formInputsInjectionKey, undefined)
watch(id, () => {
  if (formInputs && props.name) {
    formInputs.value[props.name] = { id: id.value, pattern: props.errorPattern }
  }
}, { immediate: true })

provide(inputIdInjectionKey, id)

provide(formFieldInjectionKey, computed(() => ({
  error: error.value,
  name: props.name,
  size: props.size,
  eagerValidation: props.eagerValidation,
  validateOnInputDelay: props.validateOnInputDelay,
  errorPattern: props.errorPattern,
  hint: props.hint,
  description: props.description,
  help: props.help,
  ariaId
}) as FormFieldInjectedOptions))
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div data-slot="wrapper" :class="ui.wrapper({ class: props.ui?.wrapper })">
      <div v-if="label || !!slots.label" data-slot="labelWrapper" :class="ui.labelWrapper({ class: props.ui?.labelWrapper })">
        <Label :for="id" data-slot="label" :class="ui.label({ class: props.ui?.label })">
          <slot name="label" :label="label">
            {{ label }}
          </slot>
        </Label>
        <span v-if="hint || !!slots.hint" :id="`${ariaId}-hint`" data-slot="hint" :class="ui.hint({ class: props.ui?.hint })">
          <slot name="hint" :hint="hint">
            {{ hint }}
          </slot>
        </span>
      </div>

      <p v-if="description || !!slots.description" :id="`${ariaId}-description`" data-slot="description" :class="ui.description({ class: props.ui?.description })">
        <slot name="description" :description="description">
          {{ description }}
        </slot>
      </p>
    </div>

    <div :class="[(label || !!slots.label || description || !!slots.description) && ui.container({ class: props.ui?.container })]">
      <slot :error="error" />

      <div v-if="(typeof error === 'string' && error) || !!slots.error" :id="`${ariaId}-error`" data-slot="error" :class="ui.error({ class: props.ui?.error })">
        <slot name="error" :error="error">
          {{ error }}
        </slot>
      </div>
      <div v-else-if="help || !!slots.help" :id="`${ariaId}-help`" data-slot="help" :class="ui.help({ class: props.ui?.help })">
        <slot name="help" :help="help">
          {{ help }}
        </slot>
      </div>
    </div>
  </Primitive>
</template>
