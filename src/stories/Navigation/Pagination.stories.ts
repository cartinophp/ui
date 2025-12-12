import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Pagination from '../components/Pagination.vue'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: {
      control: 'number'
    },
    itemsPerPage: {
      control: 'number'
    },
    siblingCount: {
      control: 'number'
    },
    showEdges: {
      control: 'boolean'
    },
    showControls: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'neutral']
    }
  }
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(1)
      return { args, currentPage }
    },
    template: `
      <div class="space-y-4">
        <Pagination v-bind="args" v-model:page="currentPage" />
        <p class="text-sm text-gray-600">Current page: {{ currentPage }}</p>
      </div>
    `
  }),
  args: {
    total: 100,
    itemsPerPage: 10
  }
}

export const WithEdges: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(5)
      return { args, currentPage }
    },
    template: `<Pagination v-bind="args" v-model:page="currentPage" />`
  }),
  args: {
    total: 500,
    itemsPerPage: 10,
    showEdges: true
  }
}

export const WithoutControls: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(1)
      return { args, currentPage }
    },
    template: `<Pagination v-bind="args" v-model:page="currentPage" />`
  }),
  args: {
    total: 100,
    itemsPerPage: 10,
    showControls: false
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Pagination },
    setup() {
      const page1 = ref(1)
      const page2 = ref(1)
      const page3 = ref(1)
      return { page1, page2, page3 }
    },
    template: `
      <div class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <Pagination v-model:page="page1" :total="100" :items-per-page="10" size="sm" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Medium (default)</p>
          <Pagination v-model:page="page2" :total="100" :items-per-page="10" size="md" />
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <Pagination v-model:page="page3" :total="100" :items-per-page="10" size="lg" />
        </div>
      </div>
    `
  })
}

export const ManyPages: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(25)
      return { args, currentPage }
    },
    template: `<Pagination v-bind="args" v-model:page="currentPage" />`
  }),
  args: {
    total: 1000,
    itemsPerPage: 10,
    showEdges: true,
    siblingCount: 1
  }
}
