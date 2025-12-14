import type { Meta, StoryObj } from '@storybook/vue3'
import NavigationMenu from '../../components/NavigationMenu.vue'
import type { NavigationMenuItem } from '../../components/NavigationMenu.vue'

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

const menuItems: NavigationMenuItem[] = [
  {
    label: 'Getting Started',
    to: '/getting-started',
    children: [
      {
        label: 'Introduction',
        description: 'Learn about the library',
        to: '/intro',
        icon: '📖'
      },
      {
        label: 'Installation',
        description: 'How to install',
        to: '/install',
        icon: '💿'
      },
      {
        label: 'Quick Start',
        description: 'Get up and running',
        to: '/quickstart',
        icon: '⚡'
      }
    ]
  },
  {
    label: 'Components',
    to: '/components',
    children: [
      {
        label: 'Button',
        description: 'Clickable buttons',
        to: '/button',
        icon: '🔘'
      },
      { label: 'Input', description: 'Text inputs', to: '/input', icon: '✏️' },
      { label: 'Table', description: 'Data tables', to: '/table', icon: '📊' }
    ]
  },
  { label: 'Docs', to: '/docs' },
  { label: 'API', to: '/api' }
]

export const Horizontal: Story = {
  args: {
    items: menuItems,
    orientation: 'horizontal'
  }
}

export const Vertical: Story = {
  args: {
    items: menuItems,
    orientation: 'vertical'
  }
}
