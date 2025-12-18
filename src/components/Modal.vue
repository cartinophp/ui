<template>
  <DialogRoot :open="open" @update:open="emit('update:open', $event)">
    <DialogPortal>
      <!-- Scrollable overlay mode: content is rendered inside the overlay so it scrolls within -->
      <template v-if="props.scrollable">
        <DialogOverlay :class="modalTheme.overlay({ class: ui?.overlay })">
          <DialogContent :class="modalTheme.content({ class: ui?.content })">
            <!-- Header -->
            <div
              v-if="title || description || $slots.header || closable"
              :class="modalTheme.header({ class: ui?.header })"
            >
              <slot name="header">
                <div :class="modalTheme.wrapper({ class: ui?.wrapper })">
                  <DialogTitle
                    v-if="title"
                    :class="modalTheme.title({ class: ui?.title })"
                  >
                    {{ title }}
                  </DialogTitle>
                  <DialogDescription
                    v-if="description"
                    :class="modalTheme.description({ class: ui?.description })"
                  >
                    {{ description }}
                  </DialogDescription>
                </div>

                <!-- Close button as Button component with icon -->
                <DialogClose v-if="closable" as-child>
                  <Button
                    :leading-icon="closeIcon"
                    size="sm"
                    variant="plain"
                    aria-label="Close modal"
                    :class="modalTheme.closeButton({ class: ui?.closeButton })"
                  />
                </DialogClose>
              </slot>
            </div>

            <!-- Body -->
            <div :class="modalTheme.body({ class: ui?.body })">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              :class="modalTheme.footer({ class: ui?.footer })"
            >
              <slot name="footer" />
            </div>
          </DialogContent>
        </DialogOverlay>
      </template>

      <!-- Default mode: overlay and content are separate -->
      <template v-else>
        <DialogOverlay
          v-if="props.overlay"
          :class="modalTheme.overlay({ class: ui?.overlay })"
        />

        <DialogContent :class="modalTheme.content({ class: ui?.content })">
          <!-- Header -->
          <div
            v-if="title || description || $slots.header || closable"
            :class="modalTheme.header({ class: ui?.header })"
          >
            <slot name="header">
              <div :class="modalTheme.wrapper({ class: ui?.wrapper })">
                <DialogTitle
                  v-if="title"
                  :class="modalTheme.title({ class: ui?.title })"
                >
                  {{ title }}
                </DialogTitle>
                <DialogDescription
                  v-if="description"
                  :class="modalTheme.description({ class: ui?.description })"
                >
                  {{ description }}
                </DialogDescription>
              </div>

              <!-- Close button as Button component with icon -->
              <DialogClose v-if="closable" as-child>
                <Button
                  :leading-icon="closeIcon"
                  size="sm"
                  variant="plain"
                  aria-label="Close modal"
                  :class="modalTheme.closeButton({ class: ui?.closeButton })"
                />
              </DialogClose>
            </slot>
          </div>

          <!-- Body -->
          <div :class="modalTheme.body({ class: ui?.body })">
            <slot />
          </div>

          <!-- Footer -->
          <div
            v-if="$slots.footer"
            :class="modalTheme.footer({ class: ui?.footer })"
          >
            <slot name="footer" />
          </div>
        </DialogContent>
      </template>
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

export interface ModalProps {
  open?: boolean
  title?: string
  description?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
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
  dismissible: true
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const modalTheme = computed(() =>
  theme({
    size: props.size,
    fullscreen: props.fullscreen
  })
)
</script>
