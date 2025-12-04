import type { Meta, StoryObj } from '@storybook/vue3'
import UCard from '../runtime/components/Card.vue'
import UButton from '../runtime/components/Button.vue'

const meta = {
  title: 'Components/Card',
  component: UCard,
  tags: ['autodocs'],
  argTypes: {
    to: {
      control: 'text'
    }
  }
} satisfies Meta<typeof UCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { UCard },
    setup() {
      return { args }
    },
    template: `
      <UCard v-bind="args">
        <template #header>
          <h3 style="font-size: 1.25rem; font-weight: 600;">Card Title</h3>
          <p style="color: #6b7280; margin-top: 0.25rem;">Card subtitle or description</p>
        </template>

        <p>This is the card content. You can put any content here.</p>

        <template #footer>
          <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
            <button style="padding: 0.5rem 1rem; border-radius: 0.375rem; background: #e5e7eb; border: none; cursor: pointer;">Cancel</button>
            <button style="padding: 0.5rem 1rem; border-radius: 0.375rem; background: #3b82f6; color: white; border: none; cursor: pointer;">Save</button>
          </div>
        </template>
      </UCard>
    `
  }),
  args: {}
}

export const Simple: Story = {
  render: (args) => ({
    components: { UCard },
    setup() {
      return { args }
    },
    template: `
      <UCard v-bind="args">
        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">Simple Card</h3>
        <p style="color: #6b7280;">A simple card with just content, no header or footer.</p>
      </UCard>
    `
  }),
  args: {}
}

export const WithImage: Story = {
  render: (args) => ({
    components: { UCard },
    setup() {
      return { args }
    },
    template: `
      <UCard v-bind="args" style="max-width: 400px;">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&h=400&fit=crop"
          alt="Placeholder"
          style="width: 100%; height: 200px; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;"
        />
        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">Beautiful Landscape</h3>
        <p style="color: #6b7280; margin-bottom: 1rem;">Explore the beauty of nature through this stunning image.</p>
        <button style="padding: 0.5rem 1rem; border-radius: 0.375rem; background: #3b82f6; color: white; border: none; cursor: pointer; width: 100%;">
          View More
        </button>
      </UCard>
    `
  }),
  args: {}
}

export const Clickable: Story = {
  render: (args) => ({
    components: { UCard },
    setup() {
      return { args }
    },
    template: `
      <UCard v-bind="args" style="max-width: 400px; cursor: pointer; transition: transform 0.2s;" @click="() => alert('Card clicked!')">
        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">Clickable Card</h3>
        <p style="color: #6b7280;">Click anywhere on this card to trigger an action.</p>
      </UCard>
    `
  }),
  args: {}
}

export const Grid: Story = {
  render: () => ({
    components: { UCard },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
        <UCard>
          <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Card 1</h3>
          <p style="color: #6b7280; font-size: 0.875rem;">First card in the grid</p>
        </UCard>
        <UCard>
          <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Card 2</h3>
          <p style="color: #6b7280; font-size: 0.875rem;">Second card in the grid</p>
        </UCard>
        <UCard>
          <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Card 3</h3>
          <p style="color: #6b7280; font-size: 0.875rem;">Third card in the grid</p>
        </UCard>
        <UCard>
          <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Card 4</h3>
          <p style="color: #6b7280; font-size: 0.875rem;">Fourth card in the grid</p>
        </UCard>
      </div>
    `
  })
}
