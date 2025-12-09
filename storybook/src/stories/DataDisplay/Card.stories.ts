import type { Meta, StoryObj } from '@storybook/vue3'
import UCard from '../../../../src/runtime/components/Card.vue'

const meta = {
  title: 'Components/DataDisplay/Card',
  component: UCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'subtle']
    }
  }
} satisfies Meta<typeof UCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <ui-card>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Card Title</h3>
          <p class="text-gray-600">This is a simple card with some content.</p>
        </div>
      </ui-card>
    `
  })
}

export const WithHeader: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <ui-card>
        <template #header>
          <div class="p-4 border-b">
            <h3 class="text-lg font-semibold">Card Header</h3>
          </div>
        </template>
        <div class="p-4">
          <p class="text-gray-600">Card content goes here.</p>
        </div>
      </ui-card>
    `
  })
}

export const WithFooter: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <ui-card>
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Card Title</h3>
          <p class="text-gray-600">Card content goes here.</p>
        </div>
        <template #footer>
          <div class="p-4 border-t flex justify-end gap-2">
            <button class="px-4 py-2 text-sm">Cancel</button>
            <button class="px-4 py-2 text-sm bg-blue-600 text-white rounded">Save</button>
          </div>
        </template>
      </ui-card>
    `
  })
}

export const Complete: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <ui-card>
        <template #header>
          <div class="p-4 border-b">
            <h3 class="text-lg font-semibold">Complete Card</h3>
          </div>
        </template>
        <div class="p-4">
          <p class="text-gray-600 mb-4">This card has header, body, and footer sections.</p>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Feature one</li>
            <li>Feature two</li>
            <li>Feature three</li>
          </ul>
        </div>
        <template #footer>
          <div class="p-4 border-t flex justify-end gap-2">
            <button class="px-4 py-2 text-sm">Cancel</button>
            <button class="px-4 py-2 text-sm bg-blue-600 text-white rounded">Confirm</button>
          </div>
        </template>
      </ui-card>
    `
  })
}

export const Subtle: Story = {
  args: {
    variant: 'subtle'
  },
  render: (args) => ({
    components: { UCard },
    setup() {
      return { args }
    },
    template: `
      <ui-card v-bind="args">
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Subtle Card</h3>
          <p class="text-gray-600">This card uses the subtle variant.</p>
        </div>
      </ui-card>
    `
  })
}
