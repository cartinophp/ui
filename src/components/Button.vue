<script setup lang="ts">
  import { computed, toRefs } from 'vue'
  import theme from '@/themes/button'
  import Icon from '@/components/Icon.vue'
  
  export interface ButtonProps {
    label?: string
    /** Polaris variant: primary, secondary, tertiary, plain, monochromePlain */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'plain' | 'monochromePlain'
    /** Polaris tone: default, success, critical */
    tone?: 'default' | 'success' | 'critical'
    /** Button sizes: sm (small), md (medium), lg (large) */
    size?: 'sm' | 'md' | 'lg'
    square?: boolean
    block?: boolean
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
    leadingIcon?: string
    trailingIcon?: string
    ui?: Record<string, any>
  }
  
  // Default props
  const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    tone: 'default',
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
  
  // Destructure only the props needed for theme or computations
  const { variant, tone, size, square, block, loading, disabled, leadingIcon, trailingIcon } =
    toRefs(props)
  
  // Computed theme, depends only on relevant props
  const buttonTheme = computed(() =>
    theme({
      variant: variant.value,
      tone: tone.value,
      size: size.value,
      square: square.value,
      block: block.value,
      loading: loading.value,
      disabled: disabled.value
    })
  )
  
  // Computed booleans for leading/trailing icons
  const hasLeading = computed(() => !!(leadingIcon.value || slots.leading))
  const hasTrailing = computed(
    () => !!(trailingIcon.value || slots.trailing || loading.value)
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
