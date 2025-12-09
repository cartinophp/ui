
<script setup>
import { computed } from 'vue'
import { PaginationRoot, PaginationList, PaginationListItem, PaginationFirst, PaginationPrev, PaginationEllipsis, PaginationNext, PaginationLast, useForwardPropsEmits } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { tv } from '../utils/tv'
import UButton from './Button.vue'

const props = defineProps({
  color: 'neutral',
  variant: 'outline',
  activeColor: 'primary',
  activeVariant: 'solid',
  showControls: true,
  showEdges: false,
  itemsPerPage: 10,
  siblingCount: 2,
  total: 0
})
const emits = defineEmits()
const slots = defineSlots()

const { dir } = useLocale()
const appConfig = {}

const rootProps = useForwardPropsEmits(reactivePick(props, 'as', 'defaultPage', 'disabled', 'itemsPerPage', 'page', 'showEdges', 'siblingCount', 'total'), emits)

const firstIcon = computed(() => props.firstIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft))
const prevIcon = computed(() => props.prevIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft))
const nextIcon = computed(() => props.nextIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight))
const lastIcon = computed(() => props.lastIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight))

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pagination || {}) })())
</script>

<template>
  <PaginationRoot v-slot="{ page, pageCount }" v-bind="rootProps" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <PaginationList v-slot="{ items }" data-slot="list" :class="ui.list({ class: props.ui?.list })">
      <PaginationFirst v-if="showControls || !!slots.first" as-child data-slot="first" :class="ui.first({ class: props.ui?.first })">
        <slot name="first">
          <UButton :color="color" :variant="variant" :size="size" :icon="firstIcon" :to="to?.(1)" />
        </slot>
      </PaginationFirst>
      <PaginationPrev v-if="showControls || !!slots.prev" as-child data-slot="prev" :class="ui.prev({ class: props.ui?.prev })">
        <slot name="prev">
          <UButton :color="color" :variant="variant" :size="size" :icon="prevIcon" :to="page > 1 ? to?.(page - 1) : undefined" />
        </slot>
      </PaginationPrev>

      <template v-for="(item, index) in items" :key="index">
        <PaginationListItem v-if="item.type === 'page'" as-child :value="item.value" data-slot="item" :class="ui.item({ class: props.ui?.item })">
          <slot name="item" v-bind="{ item, index, page, pageCount }">
            <UButton
              :color="page === item.value ? activeColor : color"
              :variant="page === item.value ? activeVariant : variant"
              :size="size"
              :label="String(item.value)"
              :ui="{ label: ui.label() }"
              :to="to?.(item.value)"
              square
            />
          </slot>
        </PaginationListItem>

        <PaginationEllipsis v-else as-child data-slot="ellipsis" :class="ui.ellipsis({ class: props.ui?.ellipsis })">
          <slot name="ellipsis" :ui="ui">
            <UButton as="div" :color="color" :variant="variant" :size="size" :icon="ellipsisIcon || appConfig.ui.icons.ellipsis" />
          </slot>
        </PaginationEllipsis>
      </template>

      <PaginationNext v-if="showControls || !!slots.next" as-child data-slot="next" :class="ui.next({ class: props.ui?.next })">
        <slot name="next">
          <UButton :color="color" :variant="variant" :size="size" :icon="nextIcon" :to="page < pageCount ? to?.(page + 1) : undefined" />
        </slot>
      </PaginationNext>
      <PaginationLast v-if="showControls || !!slots.last" as-child data-slot="last" :class="ui.last({ class: props.ui?.last })">
        <slot name="last">
          <UButton :color="color" :variant="variant" :size="size" :icon="lastIcon" :to="to?.(pageCount)" />
        </slot>
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
