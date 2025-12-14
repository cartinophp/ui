<template>
  <div :class="selectTheme.wrapper({ class: ui?.wrapper })" v-bind="$attrs">
    <select
      ref="select"
      :id="inputId"
      :name="name"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      :multiple="multiple"
      :class="selectTheme.root({ class: ui?.root })"
      @change="onChange"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="option in normalizedOptions"
        :key="String(getOptionValue(option))"
        :value="getOptionValue(option)"
        :disabled="option.disabled"
        :class="selectTheme.option({ class: ui?.option })"
      >
        {{ getOptionLabel(option) }}
      </option>
    </select>

    <!-- Icon -->
    <div
      v-if="trailingIcon"
      :class="selectTheme.iconWrapper({ class: ui?.iconWrapper })"
    >
      <Icon
        :name="trailingIcon"
        :class="selectTheme.icon({ class: ui?.icon })"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import theme from '@/themes/select'
import Icon from './Icon.vue'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: string | number | string[] | number[]
  options?: (SelectOption | string | number)[]
  placeholder?: string
  disabled?: boolean
  required?: boolean
  multiple?: boolean
  name?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'filled' | 'ghost' | 'outline' | 'none'
  id?: string
  color?: 'primary' | 'error' | 'success' | 'warning' | 'info'
  trailingIcon?: string
  valueKey?: string
  labelKey?: string
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<SelectProps>(), {
  size: 'md',
  variant: 'outline',
  color: 'primary',
  trailingIcon: 'i-lucide-chevron-down',
  valueKey: 'value',
  labelKey: 'label'
})

const emit = defineEmits<{
  'update:modelValue': [
    value: string | number | string[] | number[] | undefined
  ]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  change: [event: Event]
}>()

const select = ref<HTMLSelectElement>()

const inputId = computed(
  () => props.id || `select-${Math.random().toString(36).substr(2, 9)}`
)

const selectTheme = computed(() =>
  theme({
    size: props.size,
    variant: props.variant,
    color: props.color,
    disabled: props.disabled
  })
)

const normalizedOptions = computed(() => {
  return (
    props.options?.map((option) => {
      if (typeof option === 'string' || typeof option === 'number') {
        return { label: String(option), value: option }
      }
      return option
    }) || []
  )
})

const getOptionValue = (option: SelectOption) => {
  return option[props.valueKey as keyof SelectOption] || option.value
}

const getOptionLabel = (option: SelectOption) => {
  return option[props.labelKey as keyof SelectOption] || option.label
}

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  let value: string | number | string[] | number[] | undefined

  if (props.multiple) {
    value = Array.from(target.selectedOptions).map((option) => option.value)
  } else {
    value = target.value || undefined
  }

  emit('update:modelValue', value)
  emit('change', event)
}

defineExpose({
  select,
  focus: () => select.value?.focus(),
  blur: () => select.value?.blur()
})
</script>
