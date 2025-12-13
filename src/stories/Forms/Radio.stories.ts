import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Radio from '@/components/Radio.vue'

const meta = {
  title: 'Forms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the radio buttons'
    },
    color: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error'],
      description: 'Color variant'
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    },
    required: {
      control: 'boolean',
      description: 'Required field'
    }
  }
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('option1')
      const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  })
}

export const WithDescription: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('standard')
      const options = [
        {
          label: 'Standard',
          value: 'standard',
          description: 'Perfect for small teams and personal projects'
        },
        {
          label: 'Professional',
          value: 'professional',
          description: 'Advanced features for growing businesses'
        },
        {
          label: 'Enterprise',
          value: 'enterprise',
          description: 'Unlimited access and priority support'
        }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  })
}

export const Horizontal: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('small')
      const options = [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  }),
  args: {
    orientation: 'horizontal'
  }
}

export const WithDisabledOption: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('credit-card')
      const options = [
        { label: 'Credit Card', value: 'credit-card' },
        { label: 'PayPal', value: 'paypal', disabled: true },
        { label: 'Bank Transfer', value: 'bank-transfer' }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  })
}

export const AllDisabled: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('option1')
      const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  }),
  args: {
    disabled: true
  }
}

export const Small: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('xs')
      const options = [
        { label: 'Extra Small', value: 'xs' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  }),
  args: {
    size: 'sm'
  }
}

export const Large: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('large')
      const options = [
        { label: 'Large Size', value: 'large' },
        { label: 'Extra Large', value: 'xlarge' }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  }),
  args: {
    size: 'lg'
  }
}

export const Success: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref('yes')
      const options = [
        { label: 'Yes, I agree', value: 'yes' },
        { label: 'No, I disagree', value: 'no' }
      ]
      return { args, selected, options }
    },
    template: '<Radio v-model="selected" :options="options" v-bind="args" />'
  }),
  args: {
    color: 'success'
  }
}

export const AllColors: Story = {
  render: () => ({
    components: { Radio },
    setup() {
      const primary = ref('1')
      const success = ref('2')
      const warning = ref('3')
      const error = ref('4')

      const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ]

      return { primary, success, warning, error, options }
    },
    template: `
      <div class="space-y-6">
        <div>
          <h4 class="text-sm font-semibold mb-2">Primary</h4>
          <Radio v-model="primary" :options="options" color="primary" />
        </div>
        <div>
          <h4 class="text-sm font-semibold mb-2">Success</h4>
          <Radio v-model="success" :options="options" color="success" />
        </div>
        <div>
          <h4 class="text-sm font-semibold mb-2">Warning</h4>
          <Radio v-model="warning" :options="options" color="warning" />
        </div>
        <div>
          <h4 class="text-sm font-semibold mb-2">Error</h4>
          <Radio v-model="error" :options="options" color="error" />
        </div>
      </div>
    `
  })
}

export const PaymentMethod: Story = {
  render: () => ({
    components: { Radio },
    setup() {
      const selected = ref('card')
      const options = [
        {
          label: 'Credit Card',
          value: 'card',
          description: 'Pay with Visa, Mastercard, or American Express'
        },
        {
          label: 'PayPal',
          value: 'paypal',
          description: 'Secure payment through your PayPal account'
        },
        {
          label: 'Bank Transfer',
          value: 'bank',
          description: 'Direct transfer from your bank account'
        }
      ]
      return { selected, options }
    },
    template: `
      <div class="max-w-md p-6 bg-white rounded-lg border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
        <Radio v-model="selected" :options="options" />
        <div class="mt-6 pt-4 border-t border-gray-200">
          <p class="text-sm text-gray-600">
            Selected: <strong>{{ selected }}</strong>
          </p>
        </div>
      </div>
    `
  })
}
