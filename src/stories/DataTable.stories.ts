import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DataTable from '../components/DataTable.vue'
import Chip from '../components/Chip.vue'

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    enableSorting: {
      control: 'boolean'
    },
    enableFiltering: {
      control: 'boolean'
    },
    enablePagination: {
      control: 'boolean'
    },
    searchable: {
      control: 'boolean'
    },
    striped: {
      control: 'boolean'
    },
    bordered: {
      control: 'boolean'
    },
    compact: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof DataTable>

const sampleData = [
  { id: 1, name: 'Mario Rossi', email: 'mario@example.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Luigi Verdi', email: 'luigi@example.com', role: 'Editor', status: 'active' },
  { id: 3, name: 'Anna Bianchi', email: 'anna@example.com', role: 'Viewer', status: 'inactive' },
  { id: 4, name: 'Carlo Neri', email: 'carlo@example.com', role: 'Editor', status: 'active' },
  { id: 5, name: 'Laura Gialli', email: 'laura@example.com', role: 'Admin', status: 'active' }
]

const baseColumns = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'role',
    header: 'Role'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  }
]

export const Default: Story = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, columns: baseColumns, data: sampleData }
    },
    template: `<DataTable v-bind="args" :columns="columns" :data-source="data" />`
  }),
  args: {
    searchable: true,
    enableSorting: true,
    enablePagination: true
  }
}

export const WithCustomCells: Story = {
  render: () => ({
    components: { DataTable, Chip },
    setup() {
      const columns = [
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'role', header: 'Role' },
        { accessorKey: 'status', header: 'Status' }
      ]
      return { columns, data: sampleData }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        searchable
        enable-sorting
      >
        <template #cell:status="{ value }">
          <Chip
            :text="value"
            :color="value === 'active' ? 'success' : 'neutral'"
            size="sm"
            standalone
          />
        </template>

        <template #cell:role="{ value }">
          <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
                :class="{
                  'bg-purple-100 text-purple-800': value === 'Admin',
                  'bg-blue-100 text-blue-800': value === 'Editor',
                  'bg-gray-100 text-gray-800': value === 'Viewer'
                }">
            {{ value }}
          </span>
        </template>
      </DataTable>
    `
  })
}

export const Striped: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      return { columns: baseColumns, data: sampleData }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        striped
        searchable
      />
    `
  })
}

export const Bordered: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      return { columns: baseColumns, data: sampleData }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        bordered
        searchable
      />
    `
  })
}

export const Compact: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      return { columns: baseColumns, data: sampleData }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        compact
        searchable
      />
    `
  })
}

export const Loading: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      return { columns: baseColumns, data: [] }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        loading
      />
    `
  })
}

export const Empty: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      return { columns: baseColumns, data: [] }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        empty="No users found. Try adjusting your search."
      />
    `
  })
}

export const WithActions: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      const columns = [
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'role', header: 'Role' },
        { id: 'actions', header: 'Actions', cell: () => '' }
      ]

      const handleEdit = (user) => {
        alert(`Edit ${user.name}`)
      }

      const handleDelete = (user) => {
        alert(`Delete ${user.name}`)
      }

      return { columns, data: sampleData, handleEdit, handleDelete }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        searchable
      >
        <template #cell:actions="{ row }">
          <div class="flex gap-2">
            <button
              @click="handleEdit(row)"
              class="text-sm text-blue-600 hover:text-blue-800"
            >
              Edit
            </button>
            <button
              @click="handleDelete(row)"
              class="text-sm text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </div>
        </template>
      </DataTable>
    `
  })
}

export const LargeDataset: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      const largeData = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: ['Admin', 'Editor', 'Viewer'][i % 3],
        status: i % 3 === 0 ? 'inactive' : 'active'
      }))

      return { columns: baseColumns, data: largeData }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        :page-size="10"
        searchable
        enable-sorting
        enable-pagination
        striped
      />
    `
  })
}

export const WithToolbar: Story = {
  render: () => ({
    components: { DataTable },
    setup() {
      const selectedRows = ref({})

      const handleExport = () => {
        alert('Exporting selected rows...')
      }

      return { columns: baseColumns, data: sampleData, selectedRows, handleExport }
    },
    template: `
      <DataTable
        :columns="columns"
        :data-source="data"
        v-model="selectedRows"
        enable-row-selection
        searchable
      >
        <template #actions>
          <button
            @click="handleExport"
            :disabled="Object.keys(selectedRows).length === 0"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export Selected
          </button>
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Add User
          </button>
        </template>
      </DataTable>
    `
  })
}
