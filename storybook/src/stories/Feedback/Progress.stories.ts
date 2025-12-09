import type { Meta, StoryObj } from '@storybook/vue3'
import UProgress from '../../../../src/runtime/components/Progress.vue'

const meta = {
  title: 'Components/Feedback/Progress',
  component: UiProgress,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof UiProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50
  }
}

export const Primary: Story = {
  args: {
    value: 65,
    color: 'primary'
  }
}

export const Success: Story = {
  args: {
    value: 100,
    color: 'success'
  }
}

export const Warning: Story = {
  args: {
    value: 75,
    color: 'warning'
  }
}

export const Danger: Story = {
  args: {
    value: 30,
    color: 'danger'
  }
}

export const Small: Story = {
  args: {
    value: 50,
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    value: 50,
    size: 'lg'
  }
}

export const WithLabel: Story = {
  args: {
    value: 50,
    showLabel: true
  }
}

export const Indeterminate: Story = {
  args: {
    indeterminate: true
  }
}

export const Striped: Story = {
  args: {
    value: 60,
    striped: true
  }
}

export const Animated: Story = {
  args: {
    value: 70,
    striped: true,
    animated: true
  }
}
