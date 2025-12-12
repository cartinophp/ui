<template>
  <div :class="dividerClasses" :role="label ? 'separator' : undefined" v-bind="$attrs">
    <span v-if="label" :class="labelClasses">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'solid' | 'dashed' | 'dotted'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'default' | 'muted' | 'primary' | 'success' | 'warning' | 'error'
  label?: string
  align?: 'start' | 'center' | 'end'
}

const props = withDefaults(defineProps<DividerProps>(), {
  orientation: 'horizontal',
  variant: 'solid',
  size: 'md',
  color: 'default',
  align: 'center'
})

const dividerClasses = computed(() => {
  const orientationClasses = {
    horizontal: 'w-full flex items-center',
    vertical: 'h-full flex flex-col items-center justify-center'
  }

  const sizeClasses = {
    horizontal: {
      xs: 'h-px',
      sm: 'h-0.5',
      md: 'h-px',
      lg: 'h-0.5'
    },
    vertical: {
      xs: 'w-px',
      sm: 'w-0.5', 
      md: 'w-px',
      lg: 'w-0.5'
    }
  }

  const variantClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted'
  }

  const colorClasses = {
    default: 'border-border',
    muted: 'border-border/50',
    primary: 'border-primary',
    success: 'border-success',
    warning: 'border-warning',
    error: 'border-error'
  }

  const borderClasses = props.orientation === 'horizontal' 
    ? `border-t ${variantClasses[props.variant]} ${colorClasses[props.color]}`
    : `border-l ${variantClasses[props.variant]} ${colorClasses[props.color]}`

  if (props.label) {
    return [
      orientationClasses[props.orientation],
      'relative'
    ].join(' ')
  }

  return [
    sizeClasses[props.orientation][props.size],
    borderClasses
  ].join(' ')
})

const labelClasses = computed(() => {
  const alignClasses = {
    horizontal: {
      start: 'mr-auto',
      center: 'mx-auto',
      end: 'ml-auto'
    },
    vertical: {
      start: 'mb-auto',
      center: 'my-auto', 
      end: 'mt-auto'
    }
  }

  const bgClasses = props.orientation === 'horizontal' 
    ? 'bg-background px-2 relative' 
    : 'bg-background py-2 relative'

  const beforeAfterClasses = props.orientation === 'horizontal'
    ? `before:absolute before:inset-0 before:flex before:items-center 
       before:border-t before:border-solid before:border-border
       after:absolute after:inset-0 after:flex after:items-center
       after:border-t after:border-solid after:border-border`
    : `before:absolute before:inset-0 before:flex before:flex-col before:justify-center
       before:border-l before:border-solid before:border-border
       after:absolute after:inset-0 after:flex after:flex-col after:justify-center
       after:border-l after:border-solid after:border-border`

  return [
    'text-sm text-muted font-medium shrink-0',
    bgClasses,
    beforeAfterClasses,
    alignClasses[props.orientation][props.align]
  ].filter(Boolean).join(' ')
})
</script>

<style scoped>
/* Divider with label styles */
.relative span.bg-background:before {
  content: '';
  flex: 1;
}

.relative span.bg-background:after {
  content: '';  
  flex: 1;
}
</style>