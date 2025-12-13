<script setup lang="ts">
import { computed } from 'vue'
import Button from './Button.vue'
import { ui } from '../utils/ui'

export interface AlertProps {
  title?: string
  description?: string
  icon?: string
  variant?: 'default' | 'destructive' | 'success' | 'warning'
  style?: 'default' | 'filled' | 'outlined'
  closable?: boolean
  actions?: Array<{
    label: string
    variant?: 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
    onClick?: () => void
  }>
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'default',
  style: 'default',
  closable: false
})

const emit = defineEmits<{
  close: []
}>()

const alertTheme = ui.alert({
  variant: props.variant,
  style: props.style
})

const displayIcon = computed(() => {
  if (props.icon) return props.icon

  const defaultIcons = {
    default: '💡',
    success: '✅',
    warning: '⚠️',
    destructive: '❌'
  }

  return defaultIcons[props.variant]
})

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <div :class="alertTheme.root()">
    <!-- Icon -->
    <div v-if="displayIcon || $slots.icon" :class="alertTheme.icon()">
      <slot name="icon">
        {{ displayIcon }}
      </slot>
    </div>

    <!-- Content -->
    <div :class="alertTheme.content()">
      <div v-if="title || $slots.title" :class="alertTheme.title()">
        <slot name="title">
          {{ title }}
        </slot>
      </div>

      <div v-if="description || $slots.description" :class="alertTheme.description()">
        <slot name="description">
          {{ description }}
        </slot>
      </div>

      <!-- Actions -->
      <div v-if="actions?.length || $slots.actions" :class="alertTheme.actions()">
        <slot name="actions">
          <Button
            v-for="(action, index) in actions"
            :key="index"
            size="sm"
            :variant="action.variant || 'outline'"
            @click="action.onClick"
          >
            {{ action.label }}
          </Button>
        </slot>
      </div>
    </div>

    <!-- Close Button -->
    <button
      v-if="closable"
      :class="alertTheme.close()"
      @click="handleClose"
      aria-label="Close alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  </div>
</template>
