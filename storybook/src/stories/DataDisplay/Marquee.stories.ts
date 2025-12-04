import type { Meta, StoryObj } from '@storybook/vue3'
import UiMarquee from '../../../../src/runtime/components/Marquee.vue'

const meta = {
  title: 'Components/DataDisplay/Marquee',
  component: UiMarquee,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['left', 'right', 'up', 'down']
    }
  }
} satisfies Meta<typeof UiMarquee>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'This is a scrolling marquee message that moves across the screen',
    direction: 'left'
  }
}

export const RightDirection: Story = {
  args: {
    text: 'This marquee scrolls to the right',
    direction: 'right'
  }
}

export const Fast: Story = {
  args: {
    text: 'This is a fast scrolling marquee',
    speed: 20
  }
}

export const Slow: Story = {
  args: {
    text: 'This is a slow scrolling marquee',
    speed: 100
  }
}
