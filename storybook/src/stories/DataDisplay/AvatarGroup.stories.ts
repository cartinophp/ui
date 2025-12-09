import type { Meta, StoryObj } from '@storybook/vue3'
import UAvatarGroup from '../../../../src/runtime/components/AvatarGroup.vue'

const meta = {
  title: 'Components/DataDisplay/AvatarGroup',
  component: UiAvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof UiAvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
  { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
  { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' }
]

const manyItems = [
  { src: 'https://i.pravatar.cc/150?img=1', alt: 'User 1' },
  { src: 'https://i.pravatar.cc/150?img=2', alt: 'User 2' },
  { src: 'https://i.pravatar.cc/150?img=3', alt: 'User 3' },
  { src: 'https://i.pravatar.cc/150?img=4', alt: 'User 4' },
  { src: 'https://i.pravatar.cc/150?img=5', alt: 'User 5' },
  { src: 'https://i.pravatar.cc/150?img=6', alt: 'User 6' }
]

export const Default: Story = {
  args: {
    items
  }
}

export const WithMax: Story = {
  args: {
    items: manyItems,
    max: 3
  }
}

export const Small: Story = {
  args: {
    items,
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    items,
    size: 'lg'
  }
}

export const WithTooltip: Story = {
  args: {
    items,
    tooltip: true
  }
}
