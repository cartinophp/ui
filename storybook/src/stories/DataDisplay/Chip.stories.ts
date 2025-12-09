import type { Meta, StoryObj } from '@storybook/vue3'
import UChip from '../../../../src/runtime/components/Chip.vue'

const meta = {
  title: 'Components/DataDisplay/Chip',
  component: UiChip,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left']
    }
  }
} satisfies Meta<typeof UiChip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary'
  }
}

export const Success: Story = {
  args: {
    color: 'success'
  }
}

export const Warning: Story = {
  args: {
    color: 'warning'
  }
}

export const Danger: Story = {
  args: {
    color: 'danger'
  }
}

export const Small: Story = {
  args: {
    color: 'primary',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    color: 'primary',
    size: 'lg'
  }
}

export const TopLeft: Story = {
  args: {
    color: 'primary',
    position: 'top-left'
  }
}

export const BottomRight: Story = {
  args: {
    color: 'primary',
    position: 'bottom-right'
  }
}

export const Inset: Story = {
  args: {
    color: 'primary',
    inset: true
  }
}
