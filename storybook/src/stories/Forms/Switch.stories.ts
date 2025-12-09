import type { Meta, StoryObj } from '@storybook/vue3'
import USwitch from '../../../../src/runtime/components/Switch.vue'

const meta = {
  title: 'Components/Forms/Switch',
  component: UiSwitch,
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
} satisfies Meta<typeof UiSwitch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Enable notifications'
  }
}

export const Checked: Story = {
  args: {
    label: 'Enabled',
    modelValue: true
  }
}

export const Unchecked: Story = {
  args: {
    label: 'Disabled',
    modelValue: false
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true
  }
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    disabled: true,
    modelValue: true
  }
}

export const Required: Story = {
  args: {
    label: 'Required field',
    required: true
  }
}

export const WithDescription: Story = {
  args: {
    label: 'Dark mode',
    description: 'Enable dark theme across the application'
  }
}

export const Small: Story = {
  args: {
    label: 'Small switch',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    label: 'Large switch',
    size: 'lg'
  }
}

export const Success: Story = {
  args: {
    label: 'Success',
    color: 'success',
    modelValue: true
  }
}

export const Warning: Story = {
  args: {
    label: 'Warning',
    color: 'warning',
    modelValue: true
  }
}

export const Danger: Story = {
  args: {
    label: 'Danger',
    color: 'danger',
    modelValue: true
  }
}

export const Loading: Story = {
  args: {
    label: 'Loading switch',
    loading: true
  }
}
