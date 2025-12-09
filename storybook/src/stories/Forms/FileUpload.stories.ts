import type { Meta, StoryObj } from '@storybook/vue3'
import UFileUpload from '../../../../src/runtime/components/FileUpload.vue'

const meta = {
  title: 'Components/Forms/FileUpload',
  component: UFileUpload,
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
} satisfies Meta<typeof UFileUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Upload File',
    color: 'primary'
  }
}

export const Multiple: Story = {
  args: {
    label: 'Upload Multiple Files',
    multiple: true,
    color: 'primary'
  }
}

export const WithAccept: Story = {
  args: {
    label: 'Upload Images',
    accept: 'image/*',
    color: 'primary'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Upload Disabled',
    disabled: true,
    color: 'primary'
  }
}

export const Large: Story = {
  args: {
    label: 'Upload Large',
    size: 'lg',
    color: 'primary'
  }
}
