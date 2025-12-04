import type { Meta, StoryObj } from '@storybook/vue3'
import UiTable from '../../../../src/runtime/components/Table.vue'

const meta = {
  title: 'Components/DataDisplay/Table',
  component: UiTable,
  tags: ['autodocs']
} satisfies Meta<typeof UiTable>

export default meta
type Story = StoryObj<typeof meta>

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' }
]

const rows = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User' }
]

export const Default: Story = {
  args: {
    columns,
    rows
  }
}

export const Striped: Story = {
  args: {
    columns,
    rows,
    striped: true
  }
}

export const Hoverable: Story = {
  args: {
    columns,
    rows,
    hoverable: true
  }
}

export const WithBorders: Story = {
  args: {
    columns,
    rows,
    bordered: true
  }
}

export const Compact: Story = {
  args: {
    columns,
    rows,
    compact: true
  }
}

export const Sortable: Story = {
  args: {
    columns: columns.map(col => ({ ...col, sortable: true })),
    rows
  }
}

export const Selectable: Story = {
  args: {
    columns,
    rows,
    selectable: true
  }
}

export const WithActions: Story = {
  args: {
    columns: [
      ...columns,
      { key: 'actions', label: 'Actions' }
    ],
    rows: rows.map(row => ({
      ...row,
      actions: 'Edit | Delete'
    }))
  }
}

export const Empty: Story = {
  args: {
    columns,
    rows: []
  }
}

export const Loading: Story = {
  args: {
    columns,
    rows,
    loading: true
  }
}

export const WithCustomCell: Story = {
  render: () => ({
    components: { UiTable },
    setup() {
      return { columns, rows }
    },
    template: `
      <ui-table :columns="columns" :rows="rows">
        <template #role-data="{ row }">
          <span
            :class="[
              'px-2 py-1 text-xs rounded-full',
              row.role === 'Admin' ? 'bg-red-100 text-red-700' :
              row.role === 'Manager' ? 'bg-blue-100 text-blue-700' :
              'bg-gray-100 text-gray-700'
            ]"
          >
            {{ row.role }}
          </span>
        </template>
      </ui-table>
    `
  })
}

export const Pagination: Story = {
  args: {
    columns,
    rows: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: \`User \${i + 1}\`,
      email: \`user\${i + 1}@example.com\`,
      role: ['Admin', 'User', 'Manager'][i % 3]
    })),
    pagination: {
      pageSize: 10
    }
  }
}
