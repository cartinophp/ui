import type { Meta, StoryObj } from '@storybook/vue3'
import URadioGroup from '../../../../src/runtime/components/RadioGroup.vue'

const meta = {
  title: 'Components/Forms/RadioGroup',
  component: URadioGroup,
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
} satisfies Meta<typeof URadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

const optionsWithDescription = [
  { value: 'startup', label: 'Startup', description: 'Perfect for small teams' },
  { value: 'business', label: 'Business', description: 'For growing companies' },
  { value: 'enterprise', label: 'Enterprise', description: 'For large organizations' }
]

export const Default: Story = {
  args: {
    options,
    legend: 'Select an option'
  }
}

export const WithValue: Story = {
  args: {
    options,
    modelValue: 'option2',
    legend: 'Choose your preference'
  }
}

export const WithDescription: Story = {
  args: {
    options: optionsWithDescription,
    legend: 'Select a plan'
  }
}

export const Disabled: Story = {
  args: {
    options,
    legend: 'Disabled radio group',
    disabled: true
  }
}

export const Required: Story = {
  args: {
    options,
    legend: 'Required field',
    required: true
  }
}

export const Small: Story = {
  args: {
    options,
    legend: 'Small radio group',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    options,
    legend: 'Large radio group',
    size: 'lg'
  }
}

export const Horizontal: Story = {
  args: {
    options,
    legend: 'Horizontal layout',
    orientation: 'horizontal'
  }
}

export const Success: Story = {
  args: {
    options,
    legend: 'Success color',
    color: 'success',
    modelValue: 'option1'
  }
}

export const Warning: Story = {
  args: {
    options,
    legend: 'Warning color',
    color: 'warning',
    modelValue: 'option1'
  }
}
