import type { Meta, StoryObj } from '@storybook/vue3'
import Sidebar from '@/components/Sidebar.vue'

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  args: {
    links: [
      { label: 'Dashboard', icon: 'i-heroicons-home', to: '/' },
      { label: 'Orders', icon: 'i-heroicons-shopping-bag', to: '/orders' },
      { label: 'Settings', icon: 'i-heroicons-cog-6-tooth', to: '/settings' }
    ],
    collapsed: false
  }
}

export default meta
export type Story = StoryObj<typeof Sidebar>

export const Basic: Story = {}

export const Collapsed: Story = {
  args: {
    collapsed: true
  }
}
