import type { Meta, StoryObj } from '@storybook/vue3'
import UCarousel from '../../../../src/runtime/components/Carousel.vue'

const meta = {
  title: 'Components/Layout/Carousel',
  component: UCarousel,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UCarousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Slide 1',
        description: 'First slide content',
        image: 'https://picsum.photos/800/400?random=1'
      },
      {
        title: 'Slide 2',
        description: 'Second slide content',
        image: 'https://picsum.photos/800/400?random=2'
      },
      {
        title: 'Slide 3',
        description: 'Third slide content',
        image: 'https://picsum.photos/800/400?random=3'
      }
    ],
    color: 'primary'
  }
}

export const AutoPlay: Story = {
  args: {
    items: [
      {
        title: 'Auto Slide 1',
        description: 'First auto-playing slide',
        image: 'https://picsum.photos/800/400?random=4'
      },
      {
        title: 'Auto Slide 2',
        description: 'Second auto-playing slide',
        image: 'https://picsum.photos/800/400?random=5'
      },
      {
        title: 'Auto Slide 3',
        description: 'Third auto-playing slide',
        image: 'https://picsum.photos/800/400?random=6'
      }
    ],
    autoplay: true,
    interval: 3000,
    color: 'primary'
  }
}
