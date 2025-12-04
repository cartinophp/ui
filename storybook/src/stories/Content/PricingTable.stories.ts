import type { Meta, StoryObj } from '@storybook/vue3'
import UiPricingTable from '../../../../src/runtime/components/PricingTable.vue'

const meta = {
  title: 'Components/Content/PricingTable',
  component: UiPricingTable,
  tags: ['autodocs']
} satisfies Meta<typeof UiPricingTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    plans: [
      {
        name: 'Free',
        price: '$0',
        period: 'forever',
        features: ['1 Project', '1 GB Storage', 'Community Support']
      },
      {
        name: 'Pro',
        price: '$29',
        period: 'per month',
        features: ['Unlimited Projects', '100 GB Storage', 'Priority Support'],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$99',
        period: 'per month',
        features: ['Unlimited Everything', '1 TB Storage', '24/7 Support', 'Custom Integration']
      }
    ]
  }
}

export const Annual: Story = {
  args: {
    plans: [
      {
        name: 'Basic',
        price: '$90',
        period: 'per year',
        description: 'Save $18/year',
        features: ['5 Projects', '10 GB Storage', 'Email Support']
      },
      {
        name: 'Professional',
        price: '$290',
        period: 'per year',
        description: 'Save $58/year',
        features: ['50 Projects', '100 GB Storage', 'Priority Support', 'Analytics'],
        popular: true
      },
      {
        name: 'Business',
        price: '$990',
        period: 'per year',
        description: 'Save $198/year',
        features: ['Unlimited Projects', '1 TB Storage', '24/7 Support', 'Custom Features', 'SLA']
      }
    ]
  }
}
