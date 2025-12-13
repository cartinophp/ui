import type { Meta, StoryObj } from '@storybook/vue3'
import Pagination from '../../components/Pagination.vue'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  args: {
    page: 1,
    total: 100,
    itemsPerPage: 10,
    showControls: true
  }
}

export default meta
export type Story = StoryObj<typeof Pagination>

export const Basic: Story = {}

export const WithSiblings: Story = {
  args: {
    siblingCount: 2
  }
}
