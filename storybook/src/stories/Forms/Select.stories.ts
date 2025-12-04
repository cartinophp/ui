import type { Meta, StoryObj } from '@storybook/vue3'
import UiSelect from '../../../../src/runtime/components/Select.vue'

const meta = {
  title: 'Components/Forms/Select',
  component: UiSelect,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'none']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof UiSelect>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select an option'
  }
}

export const WithValue: Story = {
  args: {
    options,
    modelValue: 'option2',
    placeholder: 'Select an option'
  }
}

export const WithIcon: Story = {
  args: {
    options,
    placeholder: 'Select an option',
    leadingIcon: 'i-heroicons-user'
  }
}

export const Disabled: Story = {
  args: {
    options,
    placeholder: 'Disabled select',
    disabled: true
  }
}

export const Required: Story = {
  args: {
    options,
    placeholder: 'Required field',
    required: true
  }
}

export const Small: Story = {
  args: {
    options,
    placeholder: 'Small select',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    options,
    placeholder: 'Large select',
    size: 'lg'
  }
}

export const Multiple: Story = {
  args: {
    options,
    placeholder: 'Select multiple options',
    multiple: true
  }
}

export const Searchable: Story = {
  args: {
    options,
    placeholder: 'Searchable select',
    searchable: true
  }
}
