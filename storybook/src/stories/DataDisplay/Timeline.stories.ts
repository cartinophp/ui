import type { Meta, StoryObj } from '@storybook/vue3'
import UTimeline from '../../../../src/runtime/components/Timeline.vue'

const meta = {
  title: 'Components/DataDisplay/Timeline',
  component: UTimeline,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    }
  }
} satisfies Meta<typeof UTimeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Project Started',
        description: 'Initial project setup and configuration',
        date: '2024-01-01',
        icon: 'i-heroicons-play'
      },
      {
        label: 'Development Phase',
        description: 'Building core features and functionality',
        date: '2024-02-15',
        icon: 'i-heroicons-code-bracket'
      },
      {
        label: 'Testing',
        description: 'Quality assurance and bug fixes',
        date: '2024-03-20',
        icon: 'i-heroicons-beaker'
      },
      {
        label: 'Launch',
        description: 'Product released to production',
        date: '2024-04-01',
        icon: 'i-heroicons-rocket-launch'
      }
    ],
    color: 'primary'
  }
}

export const Success: Story = {
  args: {
    items: [
      {
        label: 'Task Completed',
        description: 'Successfully finished the task',
        date: '2024-01-15',
        icon: 'i-heroicons-check-circle'
      },
      {
        label: 'Milestone Reached',
        description: 'Achieved project milestone',
        date: '2024-02-01',
        icon: 'i-heroicons-trophy'
      }
    ],
    color: 'success'
  }
}
