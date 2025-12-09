import type { Meta, StoryObj } from '@storybook/vue3'
import UTree from '../../../../src/runtime/components/Tree.vue'

const meta = {
  title: 'Components/DataDisplay/Tree',
  component: UiTree,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UiTree>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        label: 'src',
        children: [
          {
            label: 'components',
            children: [
              { label: 'Button.vue' },
              { label: 'Input.vue' },
              { label: 'Card.vue' }
            ]
          },
          {
            label: 'utils',
            children: [
              { label: 'helpers.ts' },
              { label: 'validation.ts' }
            ]
          },
          { label: 'App.vue' },
          { label: 'main.ts' }
        ]
      },
      {
        label: 'public',
        children: [
          { label: 'favicon.ico' },
          { label: 'index.html' }
        ]
      },
      { label: 'package.json' },
      { label: 'README.md' }
    ],
    color: 'primary'
  }
}

export const WithIcons: Story = {
  args: {
    items: [
      {
        label: 'Documents',
        icon: 'i-heroicons-folder',
        children: [
          { label: 'Report.pdf', icon: 'i-heroicons-document' },
          { label: 'Presentation.pptx', icon: 'i-heroicons-document' }
        ]
      },
      {
        label: 'Images',
        icon: 'i-heroicons-folder',
        children: [
          { label: 'photo1.jpg', icon: 'i-heroicons-photo' },
          { label: 'photo2.png', icon: 'i-heroicons-photo' }
        ]
      }
    ],
    color: 'primary'
  }
}
