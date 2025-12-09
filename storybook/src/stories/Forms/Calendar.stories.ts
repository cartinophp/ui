import type { Meta, StoryObj } from '@storybook/vue3'
import UCalendar from '../../../../src/runtime/components/Calendar.vue'

const meta = {
  title: 'Components/Forms/Calendar',
  component: UCalendar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    variant: {
      control: 'select',
      options: ['outline', 'soft']
    }
  }
} satisfies Meta<typeof UCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'primary'
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary'
  }
}

export const Soft: Story = {
  args: {
    variant: 'soft',
    color: 'primary'
  }
}
