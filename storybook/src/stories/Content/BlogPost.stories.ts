import type { Meta, StoryObj } from '@storybook/vue3'
import UBlogPost from '../../../../src/runtime/components/BlogPost.vue'

const meta = {
  title: 'Components/Content/BlogPost',
  component: UBlogPost,
  tags: ['autodocs']
} satisfies Meta<typeof UBlogPost>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Getting Started with Vue 3',
    description: 'Learn how to build modern web applications with Vue 3 and the Composition API',
    date: '2024-01-15',
    author: {
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    image: 'https://picsum.photos/800/400?random=7',
    tags: ['Vue', 'JavaScript', 'Tutorial']
  }
}

export const WithoutImage: Story = {
  args: {
    title: 'Understanding Reactive State',
    description: 'Deep dive into Vue\'s reactivity system and how it works under the hood',
    date: '2024-02-20',
    author: {
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    tags: ['Vue', 'Advanced']
  }
}

export const Featured: Story = {
  args: {
    title: 'Building Scalable Applications',
    description: 'Best practices for building large-scale Vue applications that can grow with your team',
    date: '2024-03-10',
    author: {
      name: 'Bob Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    image: 'https://picsum.photos/800/400?random=8',
    tags: ['Vue', 'Architecture', 'Best Practices'],
    featured: true
  }
}
