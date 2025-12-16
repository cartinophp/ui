import type { Meta, StoryObj } from '@storybook/vue3'
import Divider from '@/components/Divider.vue'

const meta = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Divider orientation'
    },
    label: {
      control: 'text',
      description: 'Optional label text'
    }
  }
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="space-y-4">
        <div class="text-gray-700">Content above the divider</div>
        <Divider />
        <div class="text-gray-700">Content below the divider</div>
      </div>
    `
  })
}

export const WithLabel: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="space-y-4">
        <div class="text-gray-700">Section 1</div>
        <Divider label="OR" />
        <div class="text-gray-700">Section 2</div>
      </div>
    `
  })
}

export const Vertical: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="flex items-center gap-4" style="height: 100px">
        <div class="text-gray-700">Left Content</div>
        <Divider orientation="vertical" />
        <div class="text-gray-700">Right Content</div>
      </div>
    `
  })
}

export const InCard: Story = {
  render: () => ({
    components: { Divider },
    template: `
      <div class="bg-white border border-gray-200 rounded-lg p-6 max-w-md">
        <h3 class="font-semibold text-lg">Card Title</h3>
        <p class="text-sm text-gray-600 mt-2">This is the card description</p>
        
        <Divider class="my-4" />
        
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Label 1:</span>
            <span class="font-medium">Value 1</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-gray-600">Label 2:</span>
            <span class="font-medium">Value 2</span>
          </div>
        </div>
      </div>
    `
  })
}
