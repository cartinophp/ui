<script setup>
import { computed, ref } from 'vue'
import { Primitive } from 'reka-ui'
import avatarTheme from '@/themes/avatar'
import Icon from '@/components/Icon.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'span'
  },
  src: {
    type: String,
    default: undefined
  },
  alt: {
    type: String,
    default: undefined
  },
  icon: {
    type: String,
    default: undefined
  },
  text: {
    type: String,
    default: undefined
  },
  size: {
    type: String,
    default: 'md'
  },
  chip: {
    type: [Boolean, Object],
    default: undefined
  },
  loading: {
    type: String,
    default: undefined
  },
  class: {
    type: [String, Object, Array],
    default: undefined
  },
  ui: {
    type: Object,
    default: () => ({})
  }
})

const slots = defineSlots()

const imageError = ref(false)

const ui = computed(() =>
  avatarTheme({
    size: props.size,
    chipPosition:
      typeof props.chip === 'object' ? props.chip.position : 'top-right'
  })
)

const fallbackText = computed(() => {
  if (props.text) return props.text
  if (props.alt) {
    return props.alt
      .split(' ')
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
  }
  return '?'
})

const showImage = computed(() => props.src && !imageError.value)

const handleImageError = () => {
  imageError.value = true
}
</script>

<template>
  <Primitive
    :as="props.as"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    v-bind="$attrs"
  >
    <slot>
      <img
        v-if="showImage"
        :src="props.src"
        :alt="props.alt"
        :loading="props.loading"
        data-slot="image"
        :class="ui.image({ class: props.ui?.image })"
        @error="handleImageError"
      />

      <Icon
        v-else-if="props.icon"
        :name="props.icon"
        data-slot="icon"
        :class="ui.icon({ class: props.ui?.icon })"
      />

      <span
        v-else
        data-slot="fallback"
        :class="ui.fallback({ class: props.ui?.fallback })"
      >
        {{ fallbackText }}
      </span>
    </slot>

    <!-- TODO: Add Chip component when available -->
    <div
      v-if="chip"
      class="absolute"
      :class="{
        'top-0 right-0': !chip.position || chip.position === 'top-right',
        'top-0 left-0': chip.position === 'top-left',
        'bottom-0 right-0': chip.position === 'bottom-right',
        'bottom-0 left-0': chip.position === 'bottom-left'
      }"
    >
      <!-- Chip placeholder -->
    </div>
  </Primitive>
</template>
