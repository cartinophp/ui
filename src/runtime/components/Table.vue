<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { ref, computed, useTemplateRef, watch, toRef } from 'vue'
import { Primitive, useForwardProps } from 'reka-ui'
import { upperFirst } from 'scule'
import { defu } from 'defu'
import { FlexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, getExpandedRowModel, useVueTable } from '@tanstack/vue-table'
import { useVirtualizer } from '@tanstack/vue-virtual'
import { reactivePick, createReusableTemplate } from '@vueuse/core'
import { useLocale } from '../composables/useLocale'
import { tv } from '../utils/tv'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps(), {
  watchOptions: () => ({
    deep: true
  }),
  virtualize: false
})
const slots = defineSlots()

const { t } = useLocale()
const appConfig = {}

const data = ref(props.data ?? ) as Ref
const meta = computed(() => props.meta ?? {})
const columns = computed(() => processColumns(props.columns ?? Object.keys(data.value[0] ?? {}).map((accessorKey) => ({ accessorKey, header: upperFirst(accessorKey) }))))

function processColumns(columns) {
  return columns.map((column) => {
    const col = { ...column } as TableColumn

    if ('columns' in col && col.columns) {
      col.columns = processColumnscol.columns
    }

    if (!col.cell) {
      col.cell = ({ getValue }) => {
        const value = getValue()
        if (value === '' || value === null || value === undefined) {
          return '\u00A0'
        }
        return String(value)
      }
    }

    return col
  })
}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.table || {}) })({
  sticky: props.virtualize ? false : props.sticky,
  loading: props.loading,
  loadingColor: props.loadingColor,
  loadingAnimation: props.loadingAnimation,
  virtualize: !!props.virtualize
}))

const [DefineTableTemplate, ReuseTableTemplate] = createReusableTemplate()
const [DefineRowTemplate, ReuseRowTemplate] = createReusableTemplate<{ row?}>({
  props: {
    row: {
      type
      required: true
    },
    style: {
      type
      required: false
    }
  }
})

const hasFooter = computed(() => {
  function hasFooterRecursive(columns) {
    for (const column of columns) {
      if ('footer' in column) {
        return true
      }
      if ('columns' in column && hasFooterRecursivecolumn.columns) {
        return true
      }
    }
    return false
  }

  return hasFooterRecursive(columns.value)
})

const globalFilterState = defineModel<string>('globalFilter')
const columnFiltersState = defineModel('columnFilters')
const columnOrderState = defineModel('columnOrder')
const columnVisibilityState = defineModel('columnVisibility')
const columnPinningState = defineModel('columnPinning')
const columnSizingState = defineModel('columnSizing')
const columnSizingInfoState = defineModel('columnSizingInfo')
const rowSelectionState = defineModel('rowSelection')
const rowPinningState = defineModel('rowPinning')
const sortingState = defineModel('sorting')
const groupingState = defineModel('grouping')
const expandedState = defineModel('expanded')
const paginationState = defineModel('pagination')

const rootRef = useTemplateRef('rootRef')
const tableRef = useTemplateRef('tableRef')

const tableProps = useForwardProps(reactivePick(props, '_features', 'autoResetAll', 'debugAll', 'debugCells', 'debugColumns', 'debugHeaders', 'debugRows', 'debugTable', 'defaultColumn', 'getRowId', 'getSubRows', 'initialState', 'mergeOptions', 'renderFallbackValue'))

const tableApi = useVueTable({
  ...tableProps.value,
  get data() {
    return data.value
  },
  get columns() {
    return columns.value
  },
  meta: meta.value,
  getCoreRowModel: getCoreRowModel(),
  ...(props.globalFilterOptions || {}),
  ...(globalFilterState.value !== undefined && { onGlobalFilterChange: (updaterOrValue) => valueUpdater(updaterOrValue, globalFilterState) }),
  ...(props.columnFiltersOptions || {}),
  getFilteredRowModel: getFilteredRowModel(),
  ...(columnFiltersState.value !== undefined && { onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFiltersState) }),
  ...(columnOrderState.value !== undefined && { onColumnOrderChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnOrderState) }),
  ...(props.visibilityOptions || {}),
  ...(columnVisibilityState.value !== undefined && { onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibilityState) }),
  ...(props.columnPinningOptions || {}),
  ...(columnPinningState.value !== undefined && { onColumnPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnPinningState) }),
  ...(props.columnSizingOptions || {}),
  ...(columnSizingState.value !== undefined && { onColumnSizingChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingState) }),
  ...(columnSizingInfoState.value !== undefined && { onColumnSizingInfoChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnSizingInfoState) }),
  ...(props.rowSelectionOptions || {}),
  ...(rowSelectionState.value !== undefined && { onRowSelectionChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowSelectionState) }),
  ...(props.rowPinningOptions || {}),
  ...(rowPinningState.value !== undefined && { onRowPinningChange: (updaterOrValue) => valueUpdater(updaterOrValue, rowPinningState) }),
  ...(props.sortingOptions || {}),
  getSortedRowModel: getSortedRowModel(),
  ...(sortingState.value !== undefined && { onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sortingState) }),
  ...(props.groupingOptions || {}),
  ...(groupingState.value !== undefined && { onGroupingChange: (updaterOrValue) => valueUpdater(updaterOrValue, groupingState) }),
  ...(props.expandedOptions || {}),
  getExpandedRowModel: getExpandedRowModel(),
  ...(expandedState.value !== undefined && { onExpandedChange: (updaterOrValue) => valueUpdater(updaterOrValue, expandedState) }),
  ...(props.paginationOptions || {}),
  ...(paginationState.value !== undefined && { onPaginationChange: (updaterOrValue) => valueUpdater(updaterOrValue, paginationState) }),
  ...(props.facetedOptions || {}),
  state: {
    get globalFilter() {
      return globalFilterState.value
    },
    get columnFilters() {
      return columnFiltersState.value
    },
    get columnOrder() {
      return columnOrderState.value
    },
    get columnVisibility() {
      return columnVisibilityState.value
    },
    get columnPinning() {
      return columnPinningState.value
    },
    get expanded() {
      return expandedState.value
    },
    get rowSelection() {
      return rowSelectionState.value
    },
    get sorting() {
      return sortingState.value
    },
    get grouping() {
      return groupingState.value
    },
    get rowPinning() {
      return rowPinningState.value
    },
    get columnSizing() {
      return columnSizingState.value
    },
    get columnSizingInfo() {
      return columnSizingInfoState.value
    },
    get pagination() {
      return paginationState.value
    }
  }
})

const rows = computed(() => tableApi.getRowModel().rows)

const virtualizerProps = toRef(() => defu(typeof props.virtualize === 'boolean' ? {} : props.virtualize, {
  estimateSize: 65,
  overscan: 12
}))

const virtualizer = !!props.virtualize && useVirtualizer({
  ...virtualizerProps.value,
  get count() {
    return rows.value.length
  },
  getScrollElement: () => rootRef.value?.$el,
  estimateSize: (index) => {
    const estimate = virtualizerProps.value.estimateSize
    return typeof estimate === 'function' ? estimate(index) : estimate
  }
})

const renderedSize = computed(() => {
  if (!virtualizer) {
    return 0
  }

  const virtualItems = virtualizer.value.getVirtualItems()
  if (!virtualItems?.length) {
    return 0
  }

  // Sum up the actual sizes of virtual items
  return virtualItems.reduce((sum, item) => sum + item.size, 0)
})

function valueUpdater(updaterOrValue) {
  ref.value = typeof updaterOrValue === 'function' ? updaterOrValue(ref.value) : updaterOrValue
}

function onRowSelect(e) {
  if (!props.onSelect) {
    return
  }
  const target = e.target as HTMLElement
  const isInteractive = target.closest('button') || target.closest('a')
  if (isInteractive) {
    return
  }

  e.preventDefault()
  e.stopPropagation()

  props.onSelect(e, row)
}

function onRowHover(e) {
  if (!props.onHover) {
    return
  }

  props.onHover(e, row)
}

function onRowContextmenu(e) {
  if (!props.onContextmenu) {
    return
  }

  if (Array.isArray(props.onContextmenu)) {
    props.onContextmenu.forEach(fn => fn(e, row))
  } else {
    props.onContextmenu(e, row)
  }
}

function resolveValue<T, A = undefined>(prop((arg) => T), arg?){
  if (typeof prop === 'function') {
    // @ts-expect-error't know if prop is a function here
    return prop(arg)
  }
  return prop
}

function getColumnStyles(column){
  const styles= {}

  const pinned = column.getIsPinned()
  if (pinned === 'left') {
    styles.left = `${column.getStart('left')}px`
  } else if (pinned === 'right') {
    styles.right = `${column.getAfter('right')}px`
  }

  return styles
}

watch(() => props.data, () => {
  data.value = props.data ? [...props.data] : 
}, props.watchOptions)

defineExpose({
  get $el() {
    return rootRef.value?.$el as HTMLElement
  },
  tableRef,
  tableApi
})
</script>

<template>
  <DefineRowTemplate v-slot="{ row, style }">
    <tr
      :data-selected="row.getIsSelected()"
      :data-selectable="!!props.onSelect || !!props.onHover || !!props.onContextmenu"
      :data-expanded="row.getIsExpanded()"
      :role="props.onSelect ? 'button' : undefined"
      :tabindex="props.onSelect ? 0 : undefined"
      data-slot="tr"
      :class="ui.tr({
        class: [
          props.ui?.tr,
          resolveValue(tableApi.options.meta?.class?.tr, row)
        ]
      })"
      :style="[resolveValue(tableApi.options.meta?.style?.tr, row), style]"
      @click="onRowSelect($event, row)"
      @pointerenter="onRowHover($event, row)"
      @pointerleave="onRowHover($event, null)"
      @contextmenu="onRowContextmenu($event, row)"
    >
      <td
        v-for="cell in row.getVisibleCells()"
        :key="cell.id"
        :data-pinned="cell.column.getIsPinned()"
        :colspan="resolveValue(cell.column.columnDef.meta?.colspan?.td, cell)"
        :rowspan="resolveValue(cell.column.columnDef.meta?.rowspan?.td, cell)"
        data-slot="td"
        :class="ui.td({
          class: [
            props.ui?.td,
            resolveValue(cell.column.columnDef.meta?.class?.td, cell)
          ],
          pinned: !!cell.column.getIsPinned()
        })"
        :style="[
          getColumnStyles(cell.column),
          resolveValue(cell.column.columnDef.meta?.style?.td, cell)
        ]"
      >
        <slot :name="`${cell.column.id}-cell`" v-bind="cell.getContext()">
          <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
        </slot>
      </td>
    </tr>

    <tr v-if="row.getIsExpanded()" data-slot="tr" :class="ui.tr({ class: [props.ui?.tr] })">
      <td :colspan="row.getAllCells().length" data-slot="td" :class="ui.td({ class: [props.ui?.td] })">
        <slot name="expanded" :row="row" />
      </td>
    </tr>
  </DefineRowTemplate>

  
    <table ref="tableRef" data-slot="base" :class="ui.base({ class: [props.ui?.base] })">
      <caption v-if="caption || !!slots.caption" data-slot="caption" :class="ui.caption({ class: [props.ui?.caption] })">
        <slot name="caption">
          {{ caption }}
        </slot>
      </caption>

      <thead data-slot="thead" :class="ui.thead({ class: [props.ui?.thead] })">
        <tr v-for="headerGroup in tableApi.getHeaderGroups()" :key="headerGroup.id" data-slot="tr" :class="ui.tr({ class: [props.ui?.tr] })">
          <th
            v-for="header in headerGroup.headers"
            :key="header.id"
            :data-pinned="header.column.getIsPinned()"
            :scope="header.colSpan > 1 ? 'colgroup' : 'col'"
            :colspan="header.colSpan > 1 ? header.colSpan : undefined"
            :rowspan="header.rowSpan > 1 ? header.rowSpan : undefined"
            data-slot="th"
            :class="ui.th({
              class: [
                props.ui?.th,
                resolveValue(header.column.columnDef.meta?.class?.th, header)
              ],
              pinned: !!header.column.getIsPinned()
            })"
            :style="[
              getColumnStyles(header.column),
              resolveValue(header.column.columnDef.meta?.style?.th, header)
            ]"
          >
            <slot :name="`${header.id}-header`" v-bind="header.getContext()">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
            </slot>
          </th>
        </tr>

        <tr data-slot="separator" :class="ui.separator({ class: [props.ui?.separator] })" />
      </thead>

      <tbody data-slot="tbody" :class="ui.tbody({ class: [props.ui?.tbody] })">
        <slot name="body-top" />

        <template v-if="rows.length">
          <template v-if="virtualizer">
            <template v-for="(virtualRow, index) in virtualizer.getVirtualItems()" :key="rows[virtualRow.index]?.id">
              <ReuseRowTemplate
                :row="rows[virtualRow.index]!"
                :style="{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`
                }"
              />
            </template>
          </template>

          <template v-else>
            <ReuseRowTemplate v-for="row in rows" :key="row.id" :row="row" />
          </template>
        </template>

        <tr v-else-if="loading && !!slots['loading']">
          <td :colspan="tableApi.getAllLeafColumns().length" data-slot="loading" :class="ui.loading({ class: props.ui?.loading })">
            <slot name="loading" />
          </td>
        </tr>

        <tr v-else>
          <td :colspan="tableApi.getAllLeafColumns().length" data-slot="empty" :class="ui.empty({ class: props.ui?.empty })">
            <slot name="empty">
              {{ empty || t('table.noData') }}
            </slot>
          </td>
        </tr>

        <slot name="body-bottom" />
      </tbody>

      <tfoot
        v-if="hasFooter"
        data-slot="tfoot"
        :class="ui.tfoot({ class: [props.ui?.tfoot] })"
        :style="virtualizer ? {
          transform: `translateY(${virtualizer.getTotalSize() - renderedSize}px)`
        } : undefined"
      >
        <tr data-slot="separator" :class="ui.separator({ class: [props.ui?.separator] })" />

        <tr v-for="footerGroup in tableApi.getFooterGroups()" :key="footerGroup.id" data-slot="tr" :class="ui.tr({ class: [props.ui?.tr] })">
          <th
            v-for="header in footerGroup.headers"
            :key="header.id"
            :data-pinned="header.column.getIsPinned()"
            :colspan="header.colSpan > 1 ? header.colSpan : undefined"
            :rowspan="header.rowSpan > 1 ? header.rowSpan : undefined"
            data-slot="th"
            :class="ui.th({
              class: [
                props.ui?.th,
                resolveValue(header.column.columnDef.meta?.class?.th, header)
              ],
              pinned: !!header.column.getIsPinned()
            })"
            :style="[
              getColumnStyles(header.column),
              resolveValue(header.column.columnDef.meta?.style?.th, header)
            ]"
          >
            <slot :name="`${header.id}-footer`" v-bind="header.getContext()">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.footer" :props="header.getContext()" />
            </slot>
          </th>
        </tr>
      </tfoot>
    </table>
  </DefineTableTemplate>

  <Primitive ref="rootRef" :as="as" v-bind="$attrs" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div
      v-if="virtualizer"
      :style="{
        height: `${virtualizer.getTotalSize()}px`
      }"
    >
      <ReuseTableTemplate />
    </div>
    <ReuseTableTemplate v-else />
  </Primitive>
</template>
