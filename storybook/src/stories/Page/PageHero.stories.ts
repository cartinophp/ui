import type { Meta, StoryObj } from '@storybook/vue3'
import UiPageHero from '../../../../src/runtime/components/PageHero.vue'

const meta = {
  title: 'Components/Page/PageHero',
  component: UiPageHero,
  tags: ['autodocs']
} satisfies Meta<typeof UiPageHero>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Build Your Next Project',
    description: 'Create amazing web applications with our modern UI library built on Vue 3 and Tailwind CSS',
    links: [
      { label: 'Get Started', to: '/docs', color: 'primary', size: 'lg' },
      { label: 'View Demo', to: '/demo', color: 'neutral', variant: 'outline', size: 'lg' }
    ]
  }
}

export const WithImage: Story = {
  args: {
    title: 'Welcome to CartinoPHP',
    description: 'A comprehensive UI library designed for modern web development',
    image: {
      src: 'https://picsum.photos/1200/600?random=10',
      alt: 'Hero Image'
    },
    links: [
      { label: 'Learn More', to: '/about', color: 'primary', size: 'xl' }
    ]
  }
}

export const Centered: Story = {
  args: {
    title: 'Transform Your Ideas',
    description: 'From concept to deployment, we provide the tools you need to succeed',
    align: 'center',
    links: [
      { label: 'Start Free Trial', to: '/signup', color: 'success', size: 'lg' },
      { label: 'Watch Video', to: '/video', variant: 'ghost', size: 'lg' }
    ]
  }
}
