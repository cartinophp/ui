<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" :class="ui.overlay" @click="onOverlayClick">
        <!-- Modal dialog -->
        <Transition
          enter-active-class="transition-all duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="open"
            ref="dialogRef"
            :class="ui.dialog"
            role="dialog"
            :aria-modal="true"
            :aria-labelledby="title ? 'modal-title' : undefined"
            :aria-describedby="description ? 'modal-description' : undefined"
            @click.stop
          >
            <!-- Close button -->
            <button
              v-if="closable"
              type="button"
              :class="ui.closeButton"
              @click="close"
              aria-label="Close modal"
            >
              <Icon :name="closeIcon" class="size-4" />
            </button>

            <!-- Header -->
            <div v-if="title || description || $slots.header" :class="ui.header">
              <slot name="header">
                <h2 v-if="title" id="modal-title" :class="ui.title">
                  {{ title }}
                </h2>
                <p v-if="description" id="modal-description" :class="ui.description">
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
import theme from '../themes/modal'

export interface ModalProps {
  open?: boolean
  title?: string
  description?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
  closable?: boolean
  closeOnOverlay?: boolean
  closeOnEscape?: boolean
  closeIcon?: string
  preventScroll?: boolean
}

const props = withDefaults(defineProps<ModalProps>(), {
  open: false,
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

const dialogRef = ref<HTMLElement>()

const ui = computed(() => theme({
  size: props.size
}))

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
  dialogRef
})
</script>