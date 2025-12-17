<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="visible"
        :class="ui.root({ class: ui?.root })"
        role="alert"
        @click="onClick"
      >
        <!-- Icon -->
        <div
          v-if="icon || typeIcon"
          :class="ui.iconContainer({ class: ui?.iconContainer })"
        >
          <Icon
            :name="icon || typeIcon"
            :class="ui.icon({ class: ui?.icon })"
          />
        </div>

        <!-- Content -->
        <div :class="ui.content({ class: ui?.content })">
          <h4 v-if="title" :class="ui.title({ class: ui?.title })">
            {{ title }}
          </h4>
          <p
            v-if="description"
            :class="ui.description({ class: ui?.description })"
          >
            {{ description }}
          </p>
          <slot />
        </div>

        <!-- Actions -->
        <div
          v-if="actions?.length || closable"
          :class="ui.actions({ class: ui?.actions })"
        >
          <button
            v-for="action in actions"
            :key="action.label"
            type="button"
            :class="getActionClasses(action)"
            @click="action.onClick"
          >
            {{ action.label }}
          </button>

          <button
            v-if="closable"
            type="button"
            :class="ui.closeButton({ class: ui?.closeButton })"
            @click="close"
            aria-label="Close toast"
          >
            <Icon :name="closeIcon" class="size-4" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import theme from '@/themes/toast'

export interface ToastAction {
  label: string
  onClick: () => void
  variant?: 'default' | 'primary' | 'ghost'
}

export interface ToastProps {
  id?: string
  title?: string
  description?: string
  type?: 'default' | 'success' | 'warning' | 'error' | 'info'
  icon?: string
  duration?: number
  closable?: boolean
  closeIcon?: string
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center'
  actions?: ToastAction[]
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<ToastProps>(), {
  type: 'default',
  duration: 5000,
  closable: true,
  closeIcon: 'solar:close-square-linear',
  position: 'top-right'
})

const emit = defineEmits<{
  close: []
  click: []
}>()

const visible = ref(true)
const timeoutId = ref<ReturnType<typeof setTimeout>>()

const typeIcon = computed(() => {
  const icons = {
    default: undefined,
    success: 'solar:check-circle-bold',
    warning: 'solar:danger-triangle-bold',
    error: 'solar:close-circle-bold',
    info: 'solar:info-circle-bold'
  }
  return icons[props.type]
})

const ui = computed(() =>
  theme({
    type: props.type,
    position: props.position,
    size: 'md', // Default size
    hasTitle: !!props.title
  })
)

const getActionClasses = (action: ToastAction) => {
  const variantClasses = {
    default:
      'px-3 py-1.5 text-sm font-medium rounded-md border border-border hover:bg-muted',
    primary:
      'px-3 py-1.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
    ghost: 'px-3 py-1.5 text-sm font-medium rounded-md hover:bg-muted'
  }

  return [
    ui.value.action({ class: props.ui?.action }),
    variantClasses[action.variant || 'default']
  ].join(' ')
}

const close = () => {
  visible.value = false
  setTimeout(() => {
    emit('close')
  }, 200) // Wait for transition
}

const onClick = () => {
  emit('click')
}

const startTimer = () => {
  if (props.duration > 0) {
    timeoutId.value = setTimeout(() => {
      close()
    }, props.duration)
  }
}

const stopTimer = () => {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value)
  }
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})

defineExpose({
  close
})
</script>
