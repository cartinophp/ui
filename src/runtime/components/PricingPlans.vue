<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { omit } from '../utils'
import { tv } from '../utils/tv'
import UPricingPlan from './PricingPlan.vue'

const props = defineProps({
  orientation: 'horizontal',
  compact: false,
  scale: false
})
const slots = defineSlots()

const getProxySlots = () => omit(slots, ['default'])

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pricingPlans || {}) }))

const count = computed(() => props.plans?.length || slots.default?.()?.flatMap(mapSlot).filter(Boolean)?.length || 3)

function mapSlot(slot) {
  if (typeof slot.type === 'symbol') {
    if (slot.children && Array.isArray(slot.children)) {
      return slot.children.map(mapSlot)
    }

    return
  }

  return slot
}
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" :class="ui({ class: props.class, compact, scale, orientation })" :style="{ '--count': count }">
    <slot>
      <UPricingPlan
        v-for="(plan, index) in plans"
        :key="index"
        :orientation="orientation === 'vertical' ? 'horizontal' : 'vertical'"
        v-bind="plan"
      >
        <template v-for="(_, name) in getProxySlots()" #[name]="slotData">
          <slot :name="name" v-bind="slotData" :plan="plan" />
        </template>
      </UPricingPlan>
    </slot>
  </Primitive>
</template>
