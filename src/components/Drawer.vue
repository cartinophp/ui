<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" :class="ui.overlay" @click="onOverlayClick">
        <Transition
          :enter-active-class="enterActiveClass"
          :enter-from-class="enterFromClass"
          :enter-to-class="enterToClass"
          :leave-active-class="leaveActiveClass"
          :leave-from-class="leaveFromClass"
          :leave-to-class="leaveToClass"
        >
          <div
            v-if="open"
            ref="drawerRef"
            :class="ui.drawer"
            role="dialog"
            :aria-modal="true"
            :aria-labelledby="title ? 'drawer-title' : undefined"
            @click.stop
          >
            <!-- Close button -->
            <button
              v-if="closable"
              type="button"
              :class="ui.closeButton"
              @click="close"
              aria-label="Close drawer"
            >
              <Icon :name="closeIcon" class="size-4" />
            </button>

            <!-- Header -->
            <div v-if="title || description || $slots.header" :class="ui.header">
              <slot name="header">
                <h2 v-if="title" id="drawer-title" :class="ui.title">
                  {{ title }}
                </h2>
                <p v-if="description" :class="ui.description">
                  {{ description }}
                </p>
              </slot>
            </div>

            <!-- Body -->
            <div :class="ui.body">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" :class="ui.footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import theme from '@/themes/drawer'

export interface DrawerProps {
  open?: boolean
  title?: string
  description?: string
  side?: 'left' | 'right' | 'top' | 'bottom'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closable?: boolean
  closeOnOverlay?: boolean
  closeOnEscape?: boolean
  closeIcon?: string
  preventScroll?: boolean
}

const props = withDefaults(defineProps<DrawerProps>(), {
  open: false,
  side: 'right',
  size: 'md',
  closable: true,
  closeOnOverlay: true,
  closeOnEscape: true,
  closeIcon: 'i-lucide-x',
  preventScroll: true
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  'close': []
  'open': []
}>()

const drawerRef = ref<HTMLElement>()

const ui = computed(() => theme({
  side: props.side,
  size: props.size
}))

// Animation classes based on side
const enterActiveClass = computed(() => 'transition-transform duration-200 ease-out')
const leaveActiveClass = computed(() => 'transition-transform duration-200 ease-in')

const enterFromClass = computed(() => {
  const classes = {
    left: '-translate-x-full',
    right: 'translate-x-full',
    top: '-translate-y-full', 
    bottom: 'translate-y-full'
  }
  return classes[props.side]
})

const enterToClass = computed(() => 'translate-x-0 translate-y-0')

const leaveFromClass = computed(() => 'translate-x-0 translate-y-0')

const leaveToClass = computed(() => {
  const classes = {
    left: '-translate-x-full',
    right: 'translate-x-full',
    top: '-translate-y-full',
    bottom: 'translate-y-full'
  }
  return classes[props.side]
})

const close = () => {
  emit('update:open', false)
  emit('close')
}

const onOverlayClick = () => {
  if (props.closeOnOverlay) {
    close()
  }
}

const onEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEscape && props.open) {
    close()
  }
}

// Handle body scroll
const originalStyle = ref<string>('')

watch(() => props.open, (isOpen) => {
  if (props.preventScroll) {
    if (isOpen) {
      originalStyle.value = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalStyle.value
    }
  }
  
  if (isOpen) {
    emit('open')
  }
})

onMounted(() => {
  document.addEventListener('keydown', onEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onEscapeKey)
  
  if (props.preventScroll && props.open) {
    document.body.style.overflow = originalStyle.value
  }
})

defineExpose({
  close,
  drawerRef
})
</script>