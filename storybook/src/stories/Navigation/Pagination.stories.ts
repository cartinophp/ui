import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UPagination from '../../../../src/runtime/components/Pagination.vue'

const meta = {
  title: 'Components/Navigation/Pagination',
  component: UiPagination,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof UiPagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <div>
        <ui-pagination v-model="page" :total="100" :page-size="10" />
        <p class="mt-4 text-sm text-gray-600">Current page: {{ page }}</p>
      </div>
    `
  })
}

export const ManyPages: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(5)
      return { page }
    },
    template: `
      <div>
        <ui-pagination v-model="page" :total="1000" :page-size="10" />
        <p class="mt-4 text-sm text-gray-600">Current page: {{ page }} of 100</p>
      </div>
    `
  })
}

export const Small: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <ui-pagination v-model="page" :total="100" :page-size="10" size="sm" />
    `
  })
}

export const Large: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <ui-pagination v-model="page" :total="100" :page-size="10" size="lg" />
    `
  })
}

export const WithPageSize: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(1)
      const pageSize = ref(10)
      return { page, pageSize }
    },
    template: `
      <div>
        <ui-pagination
          v-model="page"
          :total="100"
          :page-size="pageSize"
          :page-sizes="[10, 20, 50, 100]"
        />
        <p class="mt-4 text-sm text-gray-600">
          Page {{ page }}, showing {{ pageSize }} items per page
        </p>
      </div>
    `
  })
}

export const Simple: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <ui-pagination v-model="page" :total="50" :page-size="10" simple />
    `
  })
}

export const FirstPage: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <ui-pagination v-model="page" :total="100" :page-size="10" />
    `
  })
}

export const LastPage: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(10)
      return { page }
    },
    template: `
      <ui-pagination v-model="page" :total="100" :page-size="10" />
    `
  })
}
