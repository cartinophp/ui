import type { Meta, StoryObj } from '@storybook/vue3'
import UUser from '../../../../src/runtime/components/User.vue'

const meta = {
  title: 'Components/DataDisplay/User',
  component: UUser,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
    }
  }
} satisfies Meta<typeof UUser>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'John Doe',
    description: 'Software Engineer',
    avatar: {
      src: 'https://i.pravatar.cc/150?img=1'
    }
  }
}

export const WithEmail: Story = {
  args: {
    name: 'Jane Smith',
    description: 'Product Manager',
    email: 'jane.smith@example.com',
    avatar: {
      src: 'https://i.pravatar.cc/150?img=2'
    }
  }
}

export const Small: Story = {
  args: {
    name: 'Bob Johnson',
    description: 'Designer',
    size: 'sm',
    avatar: {
      src: 'https://i.pravatar.cc/150?img=3'
    }
  }
}

export const Large: Story = {
  args: {
    name: 'Alice Williams',
    description: 'CEO',
    size: 'lg',
    avatar: {
      src: 'https://i.pravatar.cc/150?img=4'
    }
  }
}

export const WithoutAvatar: Story = {
  args: {
    name: 'Charlie Brown',
    description: 'Developer'
  }
}
