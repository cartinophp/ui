<script setup lang="ts">
import { computed } from 'vue'
import theme from '@/themes/button'
import Icon from '@/components/Icon.vue'

export interface ButtonProps {
  label?: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  square?: boolean
  block?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  leadingIcon?: string
  trailingIcon?: string
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  variant: 'solid',
  size: 'md',
  square: false,
  block: false,
  loading: false,
  disabled: false,
  type: 'button'
})

const slots = defineSlots<{
  default?: () => any
  leading?: () => any
  trailing?: () => any
}>()

const buttonTheme = computed(() =>
  theme({
    variant: props.variant,
    color: props.color,
    size: props.size,
    square: props.square,
    block: props.block,
    loading: props.loading,
    disabled: props.disabled
  })
)

const hasLeading = computed(() => !!(props.leadingIcon || slots.leading))
const hasTrailing = computed(
  () => !!(props.trailingIcon || slots.trailing || props.loading)
)
</script>

<template>
  <button
    :class="buttonTheme.base({ class: props.ui?.base })"
    :disabled="disabled || loading"
    :type="type"
  >
    <span
      v-if="hasLeading"
      :class="buttonTheme.leadingIcon({ class: props.ui?.leadingIcon })"
    >
      <slot name="leading">
        <Icon v-if="leadingIcon" :name="leadingIcon" />
      </slot>
    </span>

    <span
      v-if="label || slots.default"
      :class="buttonTheme.label({ class: props.ui?.label })"
    >
      <slot>{{ label }}</slot>
    </span>

    <span
      v-if="hasTrailing"
      :class="buttonTheme.trailingIcon({ class: props.ui?.trailingIcon })"
    >
      <slot name="trailing">
        <Icon
          v-if="loading"
          name="i-heroicons-arrow-path"
          class="animate-spin"
        />
        <Icon v-else-if="trailingIcon" :name="trailingIcon" />
      </slot>
    </span>
  </button>
</template>
