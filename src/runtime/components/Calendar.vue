
<script setup>
import { computed } from 'vue'
import { useForwardPropsEmits } from 'reka-ui'
import { Calendar as SingleCalendar, RangeCalendar } from 'reka-ui/namespaced'
import { reactiveOmit } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { tv } from '../utils/tv'
import UButton from './Button.vue'

const props = withDefaults(defineProps(), {
  fixedWeeks: true,
  monthControls: true,
  yearControls: true
})
const emits = defineEmits()
defineSlots()

const { dir, t } = useLocale()
const appConfig = {}

const rootProps = useForwardPropsEmits(reactiveOmit(props, 'range', 'modelValue', 'defaultValue', 'color', 'variant', 'size', 'monthControls', 'yearControls', 'class', 'ui'), emits)

const nextYearIcon = computed(() => props.nextYearIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronDoubleLeft : appConfig.ui.icons.chevronDoubleRight))
const nextMonthIcon = computed(() => props.nextMonthIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronLeft : appConfig.ui.icons.chevronRight))
const prevYearIcon = computed(() => props.prevYearIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronDoubleRight : appConfig.ui.icons.chevronDoubleLeft))
const prevMonthIcon = computed(() => props.prevMonthIcon || (dir.value === 'rtl' ? appConfig.ui.icons.chevronRight : appConfig.ui.icons.chevronLeft))

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.calendar || {}) })({
  color: props.color,
  variant: props.variant,
  size: props.size
}))

function paginateYear(date, sign) {
  if (sign === -1) {
    return date.subtract({ years: 1 })
  }

  return date.add({ years: 1 })
}

const Calendar = computed(() => props.range ? RangeCalendar : DateCalendar)
</script>

<template>
  <Calendar.Root
    v-slot="{ weekDays, grid }"
    v-bind="rootProps"
    :model-value="modelValue"
    :default-value="defaultValue"
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
  >
    <Calendar.Header data-slot="header" :class="ui.header({ class: props.ui?.header })">
      <Calendar.Prev v-if="props.yearControls" :prev-page="(date) => paginateYear(date, -1)" :aria-label="t('calendar.prevYear')" as-child>
        <UButton :icon="prevYearIcon" :size="props.size" color="neutral" variant="ghost" v-bind="props.prevYear" />
      </Calendar.Prev>
      <Calendar.Prev v-if="props.monthControls" :aria-label="t('calendar.prevMonth')" as-child>
        <UButton :icon="prevMonthIcon" :size="props.size" color="neutral" variant="ghost" v-bind="props.prevMonth" />
      </Calendar.Prev>
      <Calendar.Heading v-slot="{ headingValue }" data-slot="heading" :class="ui.heading({ class: props.ui?.heading })">
        <slot name="heading" :value="headingValue">
          {{ headingValue }}
        </slot>
      </Calendar.Heading>
      <Calendar.Next v-if="props.monthControls" :aria-label="t('calendar.nextMonth')" as-child>
        <UButton :icon="nextMonthIcon" :size="props.size" color="neutral" variant="ghost" v-bind="props.nextMonth" />
      </Calendar.Next>
      <Calendar.Next v-if="props.yearControls" :next-page="(date) => paginateYear(date, 1)" :aria-label="t('calendar.nextYear')" as-child>
        <UButton :icon="nextYearIcon" :size="props.size" color="neutral" variant="ghost" v-bind="props.nextYear" />
      </Calendar.Next>
    </Calendar.Header>
    <div data-slot="body" :class="ui.body({ class: props.ui?.body })">
      <Calendar.Grid
        v-for="month in grid"
        :key="month.value.toString()"
        data-slot="grid"
        :class="ui.grid({ class: props.ui?.grid })"
      >
        <Calendar.GridHead>
          <Calendar.GridRow data-slot="gridWeekDaysRow" :class="ui.gridWeekDaysRow({ class: props.ui?.gridWeekDaysRow })">
            <Calendar.HeadCell
              v-for="day in weekDays"
              :key="day"
              data-slot="headCell"
              :class="ui.headCell({ class: props.ui?.headCell })"
            >
              <slot name="week-day" :day="day">
                {{ day }}
              </slot>
            </Calendar.HeadCell>
          </Calendar.GridRow>
        </Calendar.GridHead>
        <Calendar.GridBody data-slot="gridBody" :class="ui.gridBody({ class: props.ui?.gridBody })">
          <Calendar.GridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            data-slot="gridRow"
            :class="ui.gridRow({ class: props.ui?.gridRow })"
          >
            <Calendar.Cell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              data-slot="cell"
              :class="ui.cell({ class: props.ui?.cell })"
            >
              <Calendar.CellTrigger
                :day="weekDate"
                :month="month.value"
                data-slot="cellTrigger"
                :class="ui.cellTrigger({ class: props.ui?.cellTrigger })"
              >
                <slot name="day" :day="weekDate">
                  {{ weekDate.day }}
                </slot>
              </Calendar.CellTrigger>
            </Calendar.Cell>
          </Calendar.GridRow>
        </Calendar.GridBody>
      </Calendar.Grid>
    </div>
  </Calendar.Root>
</template>
