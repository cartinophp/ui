<script setup lang="ts">
import { computed, toRefs } from 'vue'
import theme from '@/themes/skeleton'

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
  width?: string
  height?: string
  animation?: 'pulse' | 'wave' | 'none'
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  variant: 'text',
  animation: 'pulse'
})

const { variant, animation, width, height } = toRefs(props) 
const ui = computed(() =>
  theme({
    variant: variant.value,
    animation: animation.value
  })
)

const style = computed(() => ({
  width: width.value,
  height: height.value
}))
</script>

<template>
  <div
    :class="ui.root({ class: props.ui?.root })"
    :style="style"
    role="status"
    aria-busy="true"
    aria-live="polite"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>
