import type { Meta, StoryObj } from '@storybook/vue3'
import UButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Forms/Button',
  component: UButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'ghost', 'link']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Button'
  }
}

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    color: 'secondary'
  }
}

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline'
  }
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'lg'
  }
}

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    icon: 'i-heroicons-heart'
  }
}

export const IconOnly: Story = {
  args: {
    icon: 'i-heroicons-star',
    square: true
  }
}

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true
  }
}
