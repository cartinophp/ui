<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  useVueTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  FlexRender
} from '@tanstack/vue-table'
import dataTableTheme from '@/themes/data-table'
import Input from './Input.vue'
import Icon from './Icon.vue'
import Pagination from './Pagination.vue'

export interface DataTableProps {
  columns: any[]
  dataSource?: any[]
  enableSorting?: boolean
  enableFiltering?: boolean
  enablePagination?: boolean
  enableRowSelection?: boolean
  pageSize?: number
  pageSizeOptions?: number[]
  searchPlaceholder?: string
  searchable?: boolean
  striped?: boolean
  bordered?: boolean
  compact?: boolean
  hoverable?: boolean
  sticky?: boolean
  loading?: boolean
  empty?: string
  modelValue?: Record<string, any>
  class?: string | string[] | Record<string, boolean>
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<DataTableProps>(), {
  dataSource: () => [],
  enableSorting: true,
  enableFiltering: true,
  enablePagination: true,
  enableRowSelection: false,
  pageSize: 10,
  pageSizeOptions: () => [10, 20, 50, 100],
  searchPlaceholder: 'Search...',
  searchable: true,
  striped: false,
  bordered: false,
  compact: false,
  hoverable: true,
  sticky: false,
  loading: false,
  empty: 'No data available',
  modelValue: () => ({})
})

const emit = defineEmits<{
  'update:modelValue': [value: Record<string, any>]
  'row:click': [row: any]
  'row:select': [selection: Record<string, boolean>]
}>()

const slots = defineSlots()

// Local state
const globalFilter = ref('')
const sorting = ref<any[]>([])
const columnFilters = ref<any[]>([])
const rowSelection = ref({})
const pagination = ref({
  pageIndex: 0,
  pageSize: props.pageSize
})

// TanStack Table instance
const table = useVueTable({
  get data() {
    return props.dataSource
  },
  get columns() {
    return props.columns
  },
  state: {
    get globalFilter() {
      return globalFilter.value
    },
    get sorting() {
      return sorting.value
    },
    get columnFilters() {
      return columnFilters.value
    },
    get rowSelection() {
      return rowSelection.value
    },
    get pagination() {
      return pagination.value
    }
  },
  enableRowSelection: props.enableRowSelection,
  onGlobalFilterChange: (updater) => {
    globalFilter.value = typeof updater === 'function' ? updater(globalFilter.value) : updater
  },
  onSortingChange: (updater) => {
    sorting.value = typeof updater === 'function' ? updater(sorting.value) : updater
  },
  onColumnFiltersChange: (updater) => {
    columnFilters.value = typeof updater === 'function' ? updater(columnFilters.value) : updater
  },
  onRowSelectionChange: (updater) => {
    rowSelection.value = typeof updater === 'function' ? updater(rowSelection.value) : updater
    emit('row:select', rowSelection.value)
  },
  onPaginationChange: (updater) => {
    pagination.value = typeof updater === 'function' ? updater(pagination.value) : updater
  },
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: props.enableFiltering ? getFilteredRowModel() : undefined,
  getSortedRowModel: props.enableSorting ? getSortedRowModel() : undefined,
  getPaginationRowModel: props.enablePagination ? getPaginationRowModel() : undefined
})

const ui = computed(() => dataTableTheme({
  striped: props.striped,
  bordered: props.bordered,
  compact: props.compact,
  hoverable: props.hoverable,
  sticky: props.sticky,
  loading: props.loading
}))

const totalRows = computed(() => table.getFilteredRowModel().rows.length)
const currentPage = computed(() => pagination.value.pageIndex + 1)

const paginationText = computed(() => {
  const start = pagination.value.pageIndex * pagination.value.pageSize + 1
  const end = Math.min((pagination.value.pageIndex + 1) * pagination.value.pageSize, totalRows.value)
  return `Showing ${start} to ${end} of ${totalRows.value} entries`
})

const handleRowClick = (row) => {
  emit('row:click', row.original)
}

const handlePageChange = (page) => {
  table.setPageIndex(page - 1)
}
</script>

<template>
  <div data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <!-- Toolbar -->
    <div v-if="searchable || slots.toolbar || slots.actions" data-slot="toolbar" :class="ui.toolbar({ class: props.ui?.toolbar })">
      <slot name="toolbar">
        <div v-if="searchable" data-slot="search" :class="ui.search({ class: props.ui?.search })">
          <Input
            v-model="globalFilter"
            :placeholder="searchPlaceholder"
            leading-icon="🔍"
            aria-label="Search table"
          />
        </div>

        <div data-slot="actions" :class="ui.actions({ class: props.ui?.actions })">
          <slot name="actions" />
        </div>
      </slot>
    </div>

    <!-- Table Wrapper -->
    <div data-slot="wrapper" :class="ui.wrapper({ class: props.ui?.wrapper })">
      <table data-slot="table" :class="ui.table({ class: props.ui?.table })">
        <!-- Header -->
        <thead data-slot="thead" :class="ui.thead({ class: props.ui?.thead })">
          <tr
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
            data-slot="tr"
            :class="ui.tr({ class: props.ui?.tr })"
          >
            <th
              v-for="header in headerGroup.headers"
              :key="header.id"
              data-slot="th"
              :class="ui.th({ class: props.ui?.th })"
              :style="{ width: header.getSize() !== 150 ? `${header.getSize()}px` : undefined }"
            >
              <div
                v-if="!header.isPlaceholder"
                data-slot="th-content"
                :class="ui.thContent({ class: props.ui?.thContent })"
              >
                <slot
                  :name="`header:${header.column.id}`"
                  :header="header"
                  :column="header.column"
                >
                  <button
                    v-if="header.column.getCanSort() && enableSorting"
                    :class="ui.sortButton({ class: props.ui?.sortButton })"
                    :aria-label="`Sort by ${header.column.columnDef.header}`"
                    :aria-sort="header.column.getIsSorted() === 'asc' ? 'ascending' : header.column.getIsSorted() === 'desc' ? 'descending' : 'none'"
                    @click="header.column.getToggleSortingHandler()?.($event)"
                  >
                    <FlexRender
                      :render="header.column.columnDef.header"
                      :props="header.getContext()"
                    />
                    <Icon
                      v-if="header.column.getIsSorted() === 'asc'"
                      name="i-heroicons-arrow-up"
                      :class="ui.sortIcon({ class: props.ui?.sortIcon })"
                    />
                    <Icon
                      v-else-if="header.column.getIsSorted() === 'desc'"
                      name="i-heroicons-arrow-down"
                      :class="ui.sortIcon({ class: props.ui?.sortIcon })"
                    />
                  </button>
                  <FlexRender
                    v-else
                    :render="header.column.columnDef.header"
                    :props="header.getContext()"
                  />
                </slot>
              </div>
            </th>
          </tr>
        </thead>

        <!-- Body -->
        <tbody
          v-if="!loading && table.getRowModel().rows.length"
          data-slot="tbody"
          :class="ui.tbody({ class: props.ui?.tbody })"
        >
          <tr
            v-for="row in table.getRowModel().rows"
            :key="row.id"
            data-slot="tr"
            :class="ui.tr({ class: props.ui?.tr })"
            :role="enableRowSelection ? 'button' : undefined"
            :tabindex="enableRowSelection ? 0 : undefined"
            :aria-selected="enableRowSelection ? !!rowSelection[row.id] : undefined"
            @click="handleRowClick(row)"
            @keydown.enter="handleRowClick(row)"
            @keydown.space.prevent="handleRowClick(row)"
          >
            <td
              v-for="cell in row.getVisibleCells()"
              :key="cell.id"
              data-slot="td"
              :class="ui.td({ class: props.ui?.td })"
            >
              <slot
                :name="`cell:${cell.column.id}`"
                :cell="cell"
                :row="row.original"
                :value="cell.getValue()"
              >
                <FlexRender
                  :render="cell.column.columnDef.cell"
                  :props="cell.getContext()"
                />
              </slot>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Loading State -->
      <div v-if="loading" data-slot="loading" :class="ui.loading({ class: props.ui?.loading })" role="status" aria-live="polite">
        <slot name="loading">
          <Icon name="i-heroicons-arrow-path" :class="ui.loadingSpinner({ class: props.ui?.loadingSpinner })" />
          <span class="sr-only">Loading...</span>
        </slot>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="!table.getRowModel().rows.length"
        data-slot="empty"
        :class="ui.empty({ class: props.ui?.empty })"
        role="status"
      >
        <slot name="empty">
          <Icon name="i-heroicons-inbox" :class="ui.emptyIcon({ class: props.ui?.emptyIcon })" />
          <div :class="ui.emptyTitle({ class: props.ui?.emptyTitle })">
            No results found
          </div>
          <div :class="ui.emptyDescription({ class: props.ui?.emptyDescription })">
            {{ empty }}
          </div>
        </slot>
      </div>
    </div>

    <!-- Footer with Pagination -->
    <div
      v-if="enablePagination && table.getPageCount() > 0"
      data-slot="footer"
      :class="ui.footer({ class: props.ui?.footer })"
    >
      <div data-slot="footer-text" :class="ui.footerText({ class: props.ui?.footerText })">
        {{ paginationText }}
      </div>

      <div data-slot="footer-actions" :class="ui.footerActions({ class: props.ui?.footerActions })">
        <slot name="pagination" :table="table">
          <Pagination
            :page="currentPage"
            :total="totalRows"
            :items-per-page="pagination.pageSize"
            :sibling-count="1"
            show-controls
            @update:page="handlePageChange"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
