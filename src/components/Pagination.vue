<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import paginationTheme from '../themes/pagination'
import UButton from './Button.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'nav'
  },
  page: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 0
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  siblingCount: {
    type: Number,
    default: 2
  },
  showEdges: {
    type: Boolean,
    default: false
  },
  showControls: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'neutral'
  },
  variant: {
    type: String,
    default: 'outline'
  },
  activeColor: {
    type: String,
    default: 'primary'
  },
  activeVariant: {
    type: String,
    default: 'solid'
  },
  size: {
    type: String,
    default: 'md'
  },
  to: {
    type: Function,
    default: undefined
  },
  firstIcon: {
    type: String,
    default: 'i-heroicons-chevron-double-left'
  },
  prevIcon: {
    type: String,
    default: 'i-heroicons-chevron-left'
  },
  nextIcon: {
    type: String,
    default: 'i-heroicons-chevron-right'
  },
  lastIcon: {
    type: String,
    default: 'i-heroicons-chevron-double-right'
  },
  ellipsisIcon: {
    type: String,
    default: 'i-heroicons-ellipsis-horizontal'
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

const emit = defineEmits(['update:page'])

const slots = defineSlots()

const ui = computed(() => paginationTheme({
  size: props.size,
  disabled: props.disabled
}))

const pageCount = computed(() => Math.ceil(props.total / props.itemsPerPage))

const isFirstPage = computed(() => props.page === 1)
const isLastPage = computed(() => props.page >= pageCount.value)

const pages = computed(() => {
  const pages = []
  const { siblingCount, showEdges } = props
  const currentPage = props.page

  if (pageCount.value <= 1) return [1]

  // Always show first page if showEdges
  if (showEdges && currentPage > siblingCount + 2) {
    pages.push(1)
    pages.push('ellipsis-start')
  }

  // Calculate range around current page
  const start = Math.max(1, currentPage - siblingCount)
  const end = Math.min(pageCount.value, currentPage + siblingCount)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  // Always show last page if showEdges
  if (showEdges && currentPage < pageCount.value - siblingCount - 1) {
    pages.push('ellipsis-end')
    pages.push(pageCount.value)
  }

  return pages
})

const goToPage = (page) => {
  if (props.disabled || page < 1 || page > pageCount.value) return
  emit('update:page', page)
}

const goToFirst = () => goToPage(1)
const goToPrev = () => goToPage(props.page - 1)
const goToNext = () => goToPage(props.page + 1)
const goToLast = () => goToPage(pageCount.value)
</script>

<template>
  <Primitive
    :as="props.as"
    aria-label="Pagination"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    v-bind="$attrs"
  >
    <ul data-slot="list" :class="ui.list({ class: props.ui?.list })">
      <!-- First button -->
      <li v-if="showControls" data-slot="first" :class="ui.first({ class: props.ui?.first })">
        <slot name="first" :disabled="isFirstPage || disabled" :onClick="goToFirst">
          <UButton
            :icon="firstIcon"
            :color="color"
            :variant="variant"
            :size="size"
            :disabled="isFirstPage || disabled"
            :to="to ? to(1) : undefined"
            @click="goToFirst"
          />
        </slot>
      </li>

      <!-- Previous button -->
      <li v-if="showControls" data-slot="prev" :class="ui.prev({ class: props.ui?.prev })">
        <slot name="prev" :disabled="isFirstPage || disabled" :onClick="goToPrev">
          <UButton
            :icon="prevIcon"
            :color="color"
            :variant="variant"
            :size="size"
            :disabled="isFirstPage || disabled"
            :to="to ? to(page - 1) : undefined"
            @click="goToPrev"
          />
        </slot>
      </li>

      <!-- Page numbers -->
      <li
        v-for="(item, index) in pages"
        :key="index"
        data-slot="item"
        :class="ui.item({ class: props.ui?.item })"
      >
        <slot
          v-if="typeof item === 'number'"
          name="item"
          :page="item"
          :pageCount="pageCount"
          :active="item === page"
          :onClick="() => goToPage(item)"
        >
          <UButton
            :color="item === page ? activeColor : color"
            :variant="item === page ? activeVariant : variant"
            :size="size"
            :disabled="disabled"
            :to="to ? to(item) : undefined"
            @click="() => goToPage(item)"
          >
            <span data-slot="label" :class="ui.label({ class: props.ui?.label })">
              {{ item }}
            </span>
          </UButton>
        </slot>

        <slot v-else name="ellipsis">
          <div data-slot="ellipsis" :class="ui.ellipsis({ class: props.ui?.ellipsis })">
            <UButton
              :icon="ellipsisIcon"
              :color="color"
              :variant="variant"
              :size="size"
              disabled
            />
          </div>
        </slot>
      </li>

      <!-- Next button -->
      <li v-if="showControls" data-slot="next" :class="ui.next({ class: props.ui?.next })">
        <slot name="next" :disabled="isLastPage || disabled" :onClick="goToNext">
          <UButton
            :icon="nextIcon"
            :color="color"
            :variant="variant"
            :size="size"
            :disabled="isLastPage || disabled"
            :to="to ? to(page + 1) : undefined"
            @click="goToNext"
          />
        </slot>
      </li>

      <!-- Last button -->
      <li v-if="showControls" data-slot="last" :class="ui.last({ class: props.ui?.last })">
        <slot name="last" :disabled="isLastPage || disabled" :onClick="goToLast">
          <UButton
            :icon="lastIcon"
            :color="color"
            :variant="variant"
            :size="size"
            :disabled="isLastPage || disabled"
            :to="to ? to(pageCount) : undefined"
            @click="goToLast"
          />
        </slot>
      </li>
    </ul>
  </Primitive>
</template>
