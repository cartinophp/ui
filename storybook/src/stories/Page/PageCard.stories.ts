import type { Meta, StoryObj } from '@storybook/vue3'
import UiPageCard from '../../../../src/runtime/components/PageCard.vue'

const meta = {
  title: 'Components/Page/PageCard',
  component: UiPageCard,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UiPageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Getting Started',
    description: 'Learn the basics of our platform',
    icon: 'i-heroicons-rocket-launch',
    to: '/docs/getting-started'
  }
}

export const WithImage: Story = {
  args: {
    title: 'Advanced Features',
    description: 'Explore powerful capabilities and customization options',
    image: 'https://picsum.photos/400/200?random=11',
    to: '/docs/advanced'
  }
}

export const WithBadge: Story = {
  args: {
    title: 'New Feature',
    description: 'Check out our latest release',
    icon: 'i-heroicons-sparkles',
    badge: {
      label: 'NEW',
      color: 'success'
    },
    to: '/features/new'
  }
}

export const Primary: Story = {
  args: {
    title: 'Core Concepts',
    description: 'Understanding the fundamentals',
    icon: 'i-heroicons-light-bulb',
    color: 'primary',
    to: '/docs/concepts'
  }
}
