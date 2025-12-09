import type { Meta, StoryObj } from '@storybook/vue3'
import UContainer from '../../../../src/runtime/components/Container.vue'

const meta = {
  title: 'Components/Layout/Container',
  component: UiContainer,
  tags: ['autodocs']
} satisfies Meta<typeof UiContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiContainer },
    template: `
      <ui-container>
        <div class="bg-gray-100 p-8 rounded">
          <h2 class="text-xl font-bold mb-4">Container Content</h2>
          <p class="text-gray-600">
            This content is centered and has a maximum width applied by the container.
          </p>
        </div>
      </ui-container>
    `
  })
}

export const WithMaxWidth: Story = {
  render: () => ({
    components: { UiContainer },
    template: `
      <ui-container class="max-w-4xl">
        <div class="bg-blue-50 p-8 rounded border border-blue-200">
          <h2 class="text-xl font-bold mb-4">Custom Max Width</h2>
          <p class="text-gray-600">
            This container has a custom maximum width of 4xl (896px).
          </p>
        </div>
      </ui-container>
    `
  })
}

export const FullWidth: Story = {
  render: () => ({
    components: { UiContainer },
    template: `
      <ui-container class="max-w-full px-4">
        <div class="bg-green-50 p-8 rounded border border-green-200">
          <h2 class="text-xl font-bold mb-4">Full Width Container</h2>
          <p class="text-gray-600">
            This container spans the full width of its parent with padding.
          </p>
        </div>
      </ui-container>
    `
  })
}

export const Narrow: Story = {
  render: () => ({
    components: { UiContainer },
    template: `
      <ui-container class="max-w-2xl">
        <div class="bg-purple-50 p-8 rounded border border-purple-200">
          <h2 class="text-xl font-bold mb-4">Narrow Container</h2>
          <p class="text-gray-600 mb-4">
            This is a narrow container, ideal for reading-focused content like blog posts or articles.
          </p>
          <p class="text-gray-600">
            The narrower width improves readability by keeping line lengths optimal.
          </p>
        </div>
      </ui-container>
    `
  })
}

export const MultipleContainers: Story = {
  render: () => ({
    components: { UiContainer },
    template: `
      <div class="space-y-8">
        <ui-container class="max-w-2xl">
          <div class="bg-red-50 p-6 rounded border border-red-200">
            <h3 class="font-bold mb-2">Small Container</h3>
            <p class="text-sm text-gray-600">Max width: 2xl</p>
          </div>
        </ui-container>

        <ui-container class="max-w-4xl">
          <div class="bg-yellow-50 p-6 rounded border border-yellow-200">
            <h3 class="font-bold mb-2">Medium Container</h3>
            <p class="text-sm text-gray-600">Max width: 4xl</p>
          </div>
        </ui-container>

        <ui-container class="max-w-6xl">
          <div class="bg-indigo-50 p-6 rounded border border-indigo-200">
            <h3 class="font-bold mb-2">Large Container</h3>
            <p class="text-sm text-gray-600">Max width: 6xl</p>
          </div>
        </ui-container>
      </div>
    `
  })
}
