import type { Meta, StoryObj } from '@storybook/vue3'
import Table from '@/components/Table.vue'

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    headers: ['ID', 'Name', 'Email'],
    rows: [
      [1, 'Alice', 'alice@example.com'],
      [2, 'Bob', 'bob@example.com'],
      [3, 'Carol', 'carol@example.com']
    ],
    striped: true
  }
}

export default meta
export type Story = StoryObj<typeof Table>

export const Basic: Story = {}
