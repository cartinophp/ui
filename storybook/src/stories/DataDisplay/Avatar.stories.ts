import type { Meta, StoryObj } from '@storybook/vue3'
import UAvatar from '../../../../src/runtime/components/Avatar.vue'

const meta = {
  title: 'Components/DataDisplay/Avatar',
  component: UiAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
    }
  }
} satisfies Meta<typeof UiAvatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User Avatar'
  }
}

export const WithText: Story = {
  args: {
    text: 'JD',
    alt: 'John Doe'
  }
}

export const WithIcon: Story = {
  args: {
    icon: 'i-heroicons-user'
  }
}

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'User Avatar',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User Avatar',
    size: 'lg'
  }
}

export const ExtraLarge: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'User Avatar',
    size: '2xl'
  }
}

export const Square: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'User Avatar',
    shape: 'square'
  }
}

export const WithFallback: Story = {
  args: {
    src: 'invalid-url.jpg',
    alt: 'User Avatar',
    text: 'FB'
  }
}

export const Chip: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=6',
    alt: 'User Avatar',
    chipColor: 'success',
    chipPosition: 'top-right'
  }
}
