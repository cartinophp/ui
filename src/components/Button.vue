<script setup lang="ts">
import { computed } from 'vue'
import theme from '@/themes/button'
import Icon from '@/components/Icon.vue'

export interface ButtonProps {
  label?: string
  /** Button visual style: solid, outline, soft, ghost, link */
  variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
  /** Button semantic color */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  /** Button sizes: xs, sm, md, lg, xl */
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
  variant: 'solid',
  color: 'primary',
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
        <Icon v-if="leadingIcon" :name="leadingIcon" class="size-[inherit]!" />
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
          name="solar:refresh-linear"
          class="animate-spin size-[inherit]!"
        />
        <Icon
          v-else-if="trailingIcon"
          :name="trailingIcon"
          class="size-[inherit]!"
        />
      </slot>
    </span>
  </button>
</template>
