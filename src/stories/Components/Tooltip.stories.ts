import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from '../../components/Tooltip.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  args: {
    text: 'Suggerimento',
    side: 'top'
  }
}

export default meta
export type Story = StoryObj<typeof Tooltip>

export const Basic: Story = {}