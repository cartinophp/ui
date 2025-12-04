import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import UiButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Forms/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  },
  args: {
    onClick: fn()
  }
} satisfies Meta<typeof UiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'solid',
    color: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'solid',
    color: 'secondary'
  }
}

export const Outline: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
    color: 'primary'
  }
}

export const Soft: Story = {
  args: {
    label: 'Button',
    variant: 'soft',
    color: 'primary'
  }
}

export const Ghost: Story = {
  args: {
    label: 'Button',
    variant: 'ghost',
    color: 'primary'
  }
}

export const Link: Story = {
  args: {
    label: 'Button',
    variant: 'link',
    color: 'primary'
  }
}

export const WithLeadingIcon: Story = {
  args: {
    label: 'Button',
    leadingIcon: 'i-heroicons-plus',
    variant: 'solid',
    color: 'primary'
  }
}

export const WithTrailingIcon: Story = {
  args: {
    label: 'Button',
    trailingIcon: 'i-heroicons-arrow-right',
    variant: 'solid',
    color: 'primary'
  }
}

export const IconOnly: Story = {
  args: {
    icon: 'i-heroicons-cog-6-tooth',
    variant: 'solid',
    color: 'primary',
    square: true
  }
}

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'sm',
    variant: 'solid',
    color: 'primary'
  }
}

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'lg',
    variant: 'solid',
    color: 'primary'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
    variant: 'solid',
    color: 'primary'
  }
}

export const Loading: Story = {
  args: {
    label: 'Button',
    loading: true,
    variant: 'solid',
    color: 'primary'
  }
}

export const Block: Story = {
  args: {
    label: 'Button',
    block: true,
    variant: 'solid',
    color: 'primary'
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
