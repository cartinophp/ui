import type { Meta, StoryObj } from '@storybook/vue3'
import UPageSection from '../../../../src/runtime/components/PageSection.vue'

const meta = {
  title: 'Components/Page/PageSection',
  component: UiPageSection,
  tags: ['autodocs']
} satisfies Meta<typeof UiPageSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Our Features',
    description: 'Everything you need to build amazing applications'
  }
}

export const WithCTA: Story = {
  args: {
    title: 'Ready to Get Started?',
    description: 'Join thousands of developers building with our platform',
    align: 'center',
    links: [
      { label: 'Start Now', to: '/signup', color: 'primary', size: 'lg' },
      { label: 'Learn More', to: '/docs', variant: 'outline', size: 'lg' }
    ]
  }
}

export const Highlighted: Story = {
  args: {
    title: 'Premium Features',
    description: 'Unlock advanced capabilities with our premium plan',
    highlight: true
  }
}
