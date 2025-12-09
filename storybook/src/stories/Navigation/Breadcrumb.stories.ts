import type { Meta, StoryObj } from '@storybook/vue3'
import UBreadcrumb from '../../../../src/runtime/components/Breadcrumb.vue'

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: UiBreadcrumb,
  tags: ['autodocs']
} satisfies Meta<typeof UiBreadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Electronics', to: '/products/electronics' },
      { label: 'Laptops' }
    ]
  }
}

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', to: '/', icon: 'i-heroicons-home' },
      { label: 'Documents', to: '/documents', icon: 'i-heroicons-folder' },
      { label: 'Projects', to: '/documents/projects', icon: 'i-heroicons-briefcase' },
      { label: 'Current Project', icon: 'i-heroicons-document' }
    ]
  }
}

export const Short: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Current Page' }
    ]
  }
}

export const Long: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Category', to: '/category' },
      { label: 'Subcategory', to: '/category/subcategory' },
      { label: 'Item Type', to: '/category/subcategory/type' },
      { label: 'Specific Item', to: '/category/subcategory/type/item' },
      { label: 'Details' }
    ]
  }
}

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Products', to: '/products' },
      { label: 'Current' }
    ],
    separator: '>'
  }
}

export const IconOnly: Story = {
  args: {
    items: [
      { icon: 'i-heroicons-home', to: '/' },
      { icon: 'i-heroicons-folder', to: '/folder' },
      { icon: 'i-heroicons-document' }
    ]
  }
}
