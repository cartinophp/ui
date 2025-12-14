<script setup>
import { computed } from 'vue'
import tableTheme from '@/themes/table'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  caption: {
    type: String,
    default: undefined
  },
  loading: {
    type: Boolean,
    default: false
  },
  empty: {
    type: String,
    default: 'No data available'
  },
  striped: {
    type: Boolean,
    default: false
  },
  hoverable: {
    type: Boolean,
    default: true
  },
  bordered: {
    type: Boolean,
    default: false
  },
  compact: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  selectable: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Array,
    default: () => []
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

const emit = defineEmits(['update:modelValue', 'select', 'hover'])

const slots = defineSlots()

const ui = computed(() =>
  tableTheme({
    striped: props.striped,
    hoverable: props.hoverable,
    bordered: props.bordered,
    compact: props.compact,
    sticky: props.sticky
  })
)

const isRowSelected = (row) => {
  if (!props.selectable) return false
  return props.modelValue.some((selected) => selected === row)
}

const toggleRowSelection = (row) => {
  if (!props.selectable) return

  const newValue = [...props.modelValue]
  const index = newValue.findIndex((selected) => selected === row)

  if (index > -1) {
    newValue.splice(index, 1)
  } else {
    newValue.push(row)
  }

  emit('update:modelValue', newValue)
  emit('select', row)
}

const handleRowHover = (row) => {
  emit('hover', row)
}

const getCellValue = (row, column) => {
  if (column.accessorFn) {
    return column.accessorFn(row)
  }
  if (column.accessorKey) {
    return row[column.accessorKey]
  }
  return ''
}
</script>

<template>
  <div
    data-slot="root"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
  >
    <table data-slot="base" :class="ui.base({ class: props.ui?.base })">
      <caption
        v-if="caption || slots.caption"
        data-slot="caption"
        :class="ui.caption({ class: props.ui?.caption })"
      >
        <slot name="caption">
          {{ caption }}
        </slot>
      </caption>

      <thead
        v-if="columns.length"
        data-slot="thead"
        :class="ui.thead({ class: props.ui?.thead })"
      >
        <tr data-slot="tr" :class="ui.tr({ class: props.ui?.tr })">
          <th
            v-if="selectable"
            data-slot="th"
            :class="ui.th({ class: props.ui?.th })"
          >
            <!-- Checkbox header placeholder -->
          </th>

          <th
            v-for="(column, index) in columns"
            :key="index"
            data-slot="th"
            :class="[ui.th({ class: props.ui?.th }), column.meta?.class]"
            :style="column.meta?.style"
          >
            <slot :name="`${column.accessorKey}-header`" :column="column">
              {{ column.header || column.accessorKey }}
            </slot>
          </th>
        </tr>
      </thead>

      <slot name="body-top" />

      <tbody
        v-if="!loading && data.length"
        data-slot="tbody"
        :class="ui.tbody({ class: props.ui?.tbody })"
      >
        <tr
          v-for="(row, rowIndex) in data"
          :key="rowIndex"
          data-slot="tr"
          :class="[
            ui.tr({ class: props.ui?.tr }),
            { 'bg-primary-50': isRowSelected(row) }
          ]"
          @click="toggleRowSelection(row)"
          @mouseenter="handleRowHover(row)"
        >
          <td
            v-if="selectable"
            data-slot="td"
            :class="ui.td({ class: props.ui?.td })"
          >
            <!-- Checkbox cell placeholder -->
            <input
              type="checkbox"
              :checked="isRowSelected(row)"
              class="rounded border-border"
            />
          </td>

          <td
            v-for="(column, colIndex) in columns"
            :key="colIndex"
            data-slot="td"
            :class="[ui.td({ class: props.ui?.td }), column.meta?.class]"
            :style="column.meta?.style"
          >
            <slot
              :name="`${column.accessorKey}-cell`"
              :row="row"
              :column="column"
              :value="getCellValue(row, column)"
            >
              {{ getCellValue(row, column) }}
            </slot>
          </td>
        </tr>
      </tbody>

      <slot name="body-bottom" />

      <tfoot
        v-if="slots.footer"
        data-slot="tfoot"
        :class="ui.tfoot({ class: props.ui?.tfoot })"
      >
        <slot name="footer" />
      </tfoot>
    </table>

    <div
      v-if="loading"
      data-slot="loading"
      :class="ui.loading({ class: props.ui?.loading })"
    >
      <slot name="loading"> Loading... </slot>
    </div>

    <div
      v-else-if="!data.length"
      data-slot="empty"
      :class="ui.empty({ class: props.ui?.empty })"
    >
      <slot name="empty">
        {{ empty }}
      </slot>
    </div>
  </div>
</template>
