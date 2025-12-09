import type { Meta, StoryObj } from '@storybook/vue3'
import UInput from '../../../../src/runtime/components/Input.vue'

const meta = {
  title: 'Components/Forms/Input',
  component: UInput,
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
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search']
    }
  }
} satisfies Meta<typeof UInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...'
  }
}

export const WithLabel: Story = {
  args: {
    placeholder: 'Enter your name',
    name: 'name'
  }
}

export const WithValue: Story = {
  args: {
    modelValue: 'Hello World',
    placeholder: 'Enter text...'
  }
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...'
  }
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...'
  }
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...'
  }
}

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    leadingIcon: 'i-heroicons-magnifying-glass'
  }
}

export const WithLeadingIcon: Story = {
  args: {
    placeholder: 'Search...',
    leadingIcon: 'i-heroicons-magnifying-glass'
  }
}

export const WithTrailingIcon: Story = {
  args: {
    placeholder: 'Enter email...',
    trailingIcon: 'i-heroicons-envelope'
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}

export const Required: Story = {
  args: {
    placeholder: 'Required field',
    required: true
  }
}

export const Loading: Story = {
  args: {
    placeholder: 'Loading...',
    loading: true
  }
}

export const Small: Story = {
  args: {
    placeholder: 'Small input',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    placeholder: 'Large input',
    size: 'lg'
  }
}

export const Highlighted: Story = {
  args: {
    placeholder: 'Highlighted input',
    highlight: true
  }
}
