import type { Meta, StoryObj } from '@storybook/vue3'
import UPricingPlan from '../../../../src/runtime/components/PricingPlan.vue'

const meta = {
  title: 'Components/Content/PricingPlan',
  component: UPricingPlan,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UPricingPlan>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    name: 'Starter',
    price: '$9',
    period: 'per month',
    description: 'Perfect for getting started',
    features: [
      '5 Projects',
      '10 GB Storage',
      'Basic Support',
      'Community Access'
    ],
    color: 'primary'
  }
}

export const Popular: Story = {
  args: {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'Most popular plan',
    features: [
      'Unlimited Projects',
      '100 GB Storage',
      'Priority Support',
      'Advanced Analytics',
      'Custom Domains'
    ],
    popular: true,
    color: 'primary'
  }
}

export const Enterprise: Story = {
  args: {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For large organizations',
    features: [
      'Unlimited Everything',
      '1 TB Storage',
      '24/7 Support',
      'Advanced Security',
      'Custom Integration',
      'Dedicated Manager'
    ],
    color: 'primary'
  }
}

export const Free: Story = {
  args: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try it for free',
    features: [
      '1 Project',
      '1 GB Storage',
      'Community Support'
    ],
    color: 'neutral'
  }
}
