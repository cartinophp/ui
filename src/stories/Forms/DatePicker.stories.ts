import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import DatePicker from '@/components/DatePicker.vue'

const meta = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    error: {
      control: 'text',
      description: 'Error message'
    }
  }
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const date = ref(new Date())
      return { args, date }
    },
    template: '<DatePicker v-model="date" v-bind="args" />'
  }),
  args: {
    label: 'Select Date'
  }
}

export const WithPlaceholder: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref(null)
      return { date }
    },
    template:
      '<DatePicker v-model="date" label="Birth Date" placeholder="Choose your birth date" />'
  })
}

export const Disabled: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref(new Date())
      return { date }
    },
    template: '<DatePicker v-model="date" label="Date" disabled />'
  })
}

export const WithError: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref(null)
      return { date }
    },
    template:
      '<DatePicker v-model="date" label="Date" error="Please select a valid date" />'
  })
}

export const WithHint: Story = {
  render: () => ({
    components: { DatePicker },
    setup() {
      const date = ref(null)
      return { date }
    },
    template:
      '<DatePicker v-model="date" label="Event Date" hint="Select the date for your event" />'
  })
}
