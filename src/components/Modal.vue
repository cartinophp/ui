<template>
  <DialogRoot
    :open="open"
    @update:open="emit('update:open', $event)"
    trap-focus
    @escape-key-down="handleEscape"
  >
    <DialogPortal>
      <DialogOverlay
        v-if="props.overlay"
        :class="[
          modalTheme.overlay({ class: props.ui?.overlay }),
          props.scrollable ? 'overflow-auto' : '',
          'fixed inset-0 z-50 bg-black/50'
        ]"
      >
        <DialogContent :class="modalTheme.content({ class: props.ui?.content })">
          <!-- Header -->
          <div
            v-if="title || description || $slots.header || closable || iconName"
            :class="modalTheme.header({ class: props.ui?.header })"
          >
            <slot name="header">
              <div :class="modalTheme.wrapper({ class: props.ui?.wrapper })">
                <!-- Icon slot -->
                <slot name="icon">
                  <Icon
                    v-if="iconName"
                    :name="iconName"
                    :class="modalTheme.icon({ tone: props.tone, class: props.ui?.icon })"
                  />
                </slot>

                <DialogTitle
                  v-if="title"
                  :class="modalTheme.title({ class: props.ui?.title })"
                >
                  {{ title }}
                </DialogTitle>
                <DialogDescription
                  v-if="description"
                  :class="modalTheme.description({ class: props.ui?.description })"
                >
                  {{ description }}
                </DialogDescription>
              </div>

              <!-- Close button -->
              <DialogClose v-if="closable" as-child>
                <Button
                  :leading-icon="closeIcon"
                  size="sm"
                  variant="ghost"
                  color="neutral"
                  aria-label="Close modal"
                  :class="modalTheme.closeButton({ class: props.ui?.closeButton })"
                />
              </DialogClose>
            </slot>
          </div>

          <!-- Body -->
          <div :class="modalTheme.body({ class: props.ui?.body })">
            <slot />
          </div>

          <!-- Footer -->
          <div :class="modalTheme.footer({ class: props.ui?.footer })">
            <slot name="actions">
              <ButtonGroup align="end">
                <Button variant="outline" color="neutral" @click="emit('update:open', false)">
                  Cancel
                </Button>
                <Button variant="solid" @click="handleConfirm">
                  Confirm
                </Button>
              </ButtonGroup>
            </slot>
          </div>
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose
} from 'reka-ui'
import theme from '@/themes/modal'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'
import Icon from './Icon.vue'

export interface ModalProps {
  open?: boolean
  title?: string
  description?: string
  icon?: string
  tone?: 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg' | 'full'
  closable?: boolean
  closeIcon?: string
  fullscreen?: boolean
  overlay?: boolean
  scrollable?: boolean
  transition?: boolean
  portal?: boolean | string | HTMLElement
  dismissible?: boolean
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<ModalProps>(), {
  open: false,
  size: 'md',
  closable: true,
  closeIcon: 'solar:close-circle-linear',
  fullscreen: false,
  overlay: true,
  scrollable: false,
  transition: true,
  portal: true,
  dismissible: true,
  tone: 'info',
  icon: undefined
})

const emit = defineEmits<{
  'update:open': [value: boolean]
  confirm: []
}>()

const handleConfirm = () => {
  emit('confirm')
  emit('update:open', false)
}

const handleEscape = () => {
  emit('update:open', false)
}

const modalTheme = computed(() =>
  theme({
    size: props.size,
    fullscreen: props.fullscreen
  })
)

const iconName = computed(() => props.icon || undefined)
</script>