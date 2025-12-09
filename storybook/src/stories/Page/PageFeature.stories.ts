import type { Meta, StoryObj } from '@storybook/vue3'
import UPageFeature from '../../../../src/runtime/components/PageFeature.vue'

const meta = {
  title: 'Components/Page/PageFeature',
  component: UiPageFeature,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
} satisfies Meta<typeof UiPageFeature>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Lightning Fast',
    description: 'Our platform is built for speed, delivering exceptional performance for all your needs',
    icon: 'i-heroicons-bolt'
  }
}

export const WithImage: Story = {
  args: {
    title: 'Beautiful Design',
    description: 'Crafted with attention to detail and a focus on user experience',
    image: 'https://picsum.photos/400/300?random=9'
  }
}

export const Vertical: Story = {
  args: {
    title: 'Easy Integration',
    description: 'Get started in minutes with our simple API and comprehensive documentation',
    icon: 'i-heroicons-puzzle-piece',
    orientation: 'vertical'
  }
}
