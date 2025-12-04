import type { Meta, StoryObj } from '@storybook/vue3'
import UiTextarea from '../../../../src/runtime/components/Textarea.vue'

const meta = {
  title: 'Components/Forms/Textarea',
  component: UiTextarea,
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
} satisfies Meta<typeof UiTextarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...'
  }
}

export const WithValue: Story = {
  args: {
    modelValue: 'This is a sample text that spans multiple lines.\nYou can edit this text.',
    placeholder: 'Enter text...'
  }
}

export const WithRows: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 8
  }
}

export const Resizable: Story = {
  args: {
    placeholder: 'Resizable textarea',
    resize: true
  }
}

export const AutoResize: Story = {
  args: {
    placeholder: 'Auto-resize textarea (type to see it grow)',
    autoresize: true
  }
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true
  }
}

export const Required: Story = {
  args: {
    placeholder: 'Required field',
    required: true
  }
}

export const Small: Story = {
  args: {
    placeholder: 'Small textarea',
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    placeholder: 'Large textarea',
    size: 'lg'
  }
}

export const Highlighted: Story = {
  args: {
    placeholder: 'Highlighted textarea',
    highlight: true
  }
}
