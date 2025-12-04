import type { Meta, StoryObj } from '@storybook/vue3'
import UiCheckbox from '../../../../src/runtime/components/Checkbox.vue'

const meta = {
  title: 'Components/Forms/Checkbox',
  component: UiCheckbox,
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
} satisfies Meta<typeof UiCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions'
  }
}

export const Checked: Story = {
  args: {
    label: 'I agree',
    modelValue: true
  }
}

export const Unchecked: Story = {
  args: {
    label: 'I agree',
    modelValue: false
  }
}

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
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
    label: 'Enable notifications',
    description: 'Get notified when someone comments on your post'
  }
}

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    label: 'Large checkbox',
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
