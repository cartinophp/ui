import type { Meta, StoryObj } from '@storybook/vue3'
import UBadge from '../../../../src/runtime/components/Badge.vue'

const meta = {
  title: 'Components/DataDisplay/Badge',
  component: UBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof UBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Badge',
    variant: 'solid',
    color: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Badge',
    variant: 'solid',
    color: 'secondary'
  }
}

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'solid',
    color: 'success'
  }
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'solid',
    color: 'warning'
  }
}

export const Danger: Story = {
  args: {
    label: 'Danger',
    variant: 'solid',
    color: 'danger'
  }
}

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
    color: 'primary'
  }
}

export const Soft: Story = {
  args: {
    label: 'Soft',
    variant: 'soft',
    color: 'primary'
  }
}

export const Subtle: Story = {
  args: {
    label: 'Subtle',
    variant: 'subtle',
    color: 'primary'
  }
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
    color: 'primary'
  }
}

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
    color: 'primary'
  }
}

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    leadingIcon: 'i-heroicons-check',
    color: 'success'
  }
}

export const IconOnly: Story = {
  args: {
    icon: 'i-heroicons-star',
    color: 'warning'
  }
}
