<script setup>
import { computed } from 'vue'
import { useOverlay } from '../composables/useOverlay'

const { overlays, unmount, close } = useOverlay()

const mountedOverlays = computed(() => overlays.filter((overlay) => overlay.isMounted))

const onAfterLeave = (id: symbol) => {
  close(id)
  unmount(id)
}

const onClose = (id: symbol, value) => {
  close(id, value)
}
</script>

<template>
  <component
    :is="overlay.component"
    v-for="overlay in mountedOverlays"
    :key="overlay.id"
    v-bind="overlay.props"
    v-model:open="overlay.isOpen"
    @close="(value:any) => onClose(overlay.id, value)"
    @after:leave="onAfterLeave(overlay.id)"
  />
</template>
