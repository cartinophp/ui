import type { Meta, StoryObj } from '@storybook/vue3'
import UiSkeleton from '../../../../src/runtime/components/Skeleton.vue'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: UiSkeleton,
  tags: ['autodocs']
} satisfies Meta<typeof UiSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiSkeleton },
    template: `
      <div class="space-y-4">
        <ui-skeleton class="h-4 w-full" />
        <ui-skeleton class="h-4 w-3/4" />
        <ui-skeleton class="h-4 w-1/2" />
      </div>
    `
  })
}

export const Circle: Story = {
  render: () => ({
    components: { UiSkeleton },
    template: `
      <ui-skeleton class="h-12 w-12 rounded-full" />
    `
  })
}

export const Avatar: Story = {
  render: () => ({
    components: { UiSkeleton },
    template: `
      <div class="flex items-center gap-4">
        <ui-skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2 flex-1">
          <ui-skeleton class="h-4 w-1/4" />
          <ui-skeleton class="h-3 w-1/2" />
        </div>
      </div>
    `
  })
}

export const Card: Story = {
  render: () => ({
    components: { UiSkeleton },
    template: `
      <div class="border rounded-lg p-4 space-y-4">
        <ui-skeleton class="h-48 w-full" />
        <div class="space-y-2">
          <ui-skeleton class="h-4 w-3/4" />
          <ui-skeleton class="h-4 w-full" />
          <ui-skeleton class="h-4 w-2/3" />
        </div>
      </div>
    `
  })
}

export const List: Story = {
  render: () => ({
    components: { UiSkeleton },
    template: `
      <div class="space-y-3">
        <div v-for="i in 5" :key="i" class="flex items-center gap-3">
          <ui-skeleton class="h-10 w-10 rounded" />
          <div class="space-y-2 flex-1">
            <ui-skeleton class="h-4 w-1/3" />
            <ui-skeleton class="h-3 w-1/2" />
          </div>
        </div>
      </div>
    `
  })
}

export const Table: Story = {
  render: () => ({
    components: { UiSkeleton },
    template: `
      <div class="space-y-3">
        <div class="grid grid-cols-4 gap-4">
          <ui-skeleton class="h-8 w-full" />
          <ui-skeleton class="h-8 w-full" />
          <ui-skeleton class="h-8 w-full" />
          <ui-skeleton class="h-8 w-full" />
        </div>
        <div v-for="i in 5" :key="i" class="grid grid-cols-4 gap-4">
          <ui-skeleton class="h-6 w-full" />
          <ui-skeleton class="h-6 w-full" />
          <ui-skeleton class="h-6 w-full" />
          <ui-skeleton class="h-6 w-full" />
        </div>
      </div>
    `
  })
}
