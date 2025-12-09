import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UCheckboxGroup from '../../../../src/runtime/components/CheckboxGroup.vue'

const meta = {
  title: 'Components/Forms/CheckboxGroup',
  component: UCheckboxGroup,
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
} satisfies Meta<typeof UCheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

const optionsWithDescription = [
  {
    value: 'email',
    label: 'Email notifications',
    description: 'Receive notifications via email'
  },
  {
    value: 'sms',
    label: 'SMS notifications',
    description: 'Receive notifications via SMS'
  },
  {
    value: 'push',
    label: 'Push notifications',
    description: 'Receive push notifications on your device'
  }
]

export const Default: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      return { selected, options }
    },
    template: `
      <div>
        <ui-checkbox-group v-model="selected" :options="options" legend="Select options" />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selected.join(', ') || 'None' }}</p>
      </div>
    `
  })
}

export const WithValue: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref(['option1', 'option3'])
      return { selected, options }
    },
    template: `
      <div>
        <ui-checkbox-group v-model="selected" :options="options" legend="Pre-selected options" />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selected.join(', ') }}</p>
      </div>
    `
  })
}

export const WithDescription: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      return { selected, optionsWithDescription }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="optionsWithDescription"
        legend="Notification preferences"
      />
    `
  })
}

export const Horizontal: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      return { selected, options }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="options"
        legend="Horizontal layout"
        orientation="horizontal"
      />
    `
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref(['option1'])
      return { selected, options }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="options"
        legend="Disabled group"
        disabled
      />
    `
  })
}

export const DisabledOptions: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      const optionsWithDisabled = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2 (disabled)', disabled: true },
        { value: 'option3', label: 'Option 3' }
      ]
      return { selected, optionsWithDisabled }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="optionsWithDisabled"
        legend="Some options disabled"
      />
    `
  })
}

export const Required: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      return { selected, options }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="options"
        legend="Required field"
        required
      />
    `
  })
}

export const Small: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      return { selected, options }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="options"
        legend="Small size"
        size="sm"
      />
    `
  })
}

export const Large: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      return { selected, options }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="options"
        legend="Large size"
        size="lg"
      />
    `
  })
}

export const WithIcons: Story = {
  render: () => ({
    components: { UCheckboxGroup },
    setup() {
      const selected = ref([])
      const optionsWithIcons = [
        { value: 'dark', label: 'Dark mode', icon: 'i-heroicons-moon' },
        { value: 'notifications', label: 'Notifications', icon: 'i-heroicons-bell' },
        { value: 'newsletter', label: 'Newsletter', icon: 'i-heroicons-envelope' }
      ]
      return { selected, optionsWithIcons }
    },
    template: `
      <ui-checkbox-group
        v-model="selected"
        :options="optionsWithIcons"
        legend="Preferences"
      />
    `
  })
}
