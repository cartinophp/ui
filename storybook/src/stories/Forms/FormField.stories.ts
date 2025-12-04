import type { Meta, StoryObj } from '@storybook/vue3'
import UiFormField from '../../../../src/runtime/components/FormField.vue'
import UiInput from '../../../../src/runtime/components/Input.vue'

const meta = {
  title: 'Components/Forms/FormField',
  component: UiFormField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof UiFormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Email',
    name: 'email'
  },
  render: (args) => ({
    components: { UiFormField, UiInput },
    setup() {
      return { args }
    },
    template: `
      <ui-form-field v-bind="args">
        <ui-input placeholder="Enter your email" />
      </ui-form-field>
    `
  })
}

export const WithDescription: Story = {
  args: {
    label: 'Username',
    description: 'This will be your public display name',
    name: 'username'
  },
  render: (args) => ({
    components: { UiFormField, UiInput },
    setup() {
      return { args }
    },
    template: `
      <ui-form-field v-bind="args">
        <ui-input placeholder="Enter username" />
      </ui-form-field>
    `
  })
}

export const WithHint: Story = {
  args: {
    label: 'Password',
    hint: 'Must be at least 8 characters',
    name: 'password'
  },
  render: (args) => ({
    components: { UiFormField, UiInput },
    setup() {
      return { args }
    },
    template: `
      <ui-form-field v-bind="args">
        <ui-input type="password" placeholder="Enter password" />
      </ui-form-field>
    `
  })
}

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'This field is required',
    name: 'email'
  },
  render: (args) => ({
    components: { UiFormField, UiInput },
    setup() {
      return { args }
    },
    template: `
      <ui-form-field v-bind="args">
        <ui-input placeholder="Enter your email" />
      </ui-form-field>
    `
  })
}

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    name: 'email'
  },
  render: (args) => ({
    components: { UiFormField, UiInput },
    setup() {
      return { args }
    },
    template: `
      <ui-form-field v-bind="args">
        <ui-input placeholder="Enter your email" required />
      </ui-form-field>
    `
  })
}

export const Small: Story = {
  args: {
    label: 'Email',
    size: 'sm',
    name: 'email'
  },
  render: (args) => ({
    components: { UiFormField, UiInput },
    setup() {
      return { args }
    },
    template: `
      <ui-form-field v-bind="args">
        <ui-input placeholder="Enter your email" size="sm" />
      </ui-form-field>
    `
  })
}

export const Large: Story = {
  args: {
    label: 'Email',
    size: 'lg',
    name: 'email'
  },
  render: (args) => ({
    components: { UiFormField, UiInput },
    setup() {
      return { args }
    },
    template: `
      <ui-form-field v-bind="args">
        <ui-input placeholder="Enter your email" size="lg" />
      </ui-form-field>
    `
  })
}
