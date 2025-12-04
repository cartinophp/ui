import type { Meta, StoryObj } from '@storybook/vue3'
import UiEmpty from '../../../../src/runtime/components/Empty.vue'

const meta = {
  title: 'Components/Feedback/Empty',
  component: UiEmpty,
  tags: ['autodocs']
} satisfies Meta<typeof UiEmpty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filter to find what you are looking for.'
  }
}

export const WithIcon: Story = {
  args: {
    title: 'No items',
    description: 'Get started by creating a new item.',
    icon: 'i-heroicons-folder-open'
  }
}

export const NoData: Story = {
  args: {
    title: 'No data available',
    description: 'There is no data to display at this time.',
    icon: 'i-heroicons-inbox'
  }
}

export const SearchResults: Story = {
  args: {
    title: 'No search results',
    description: 'We could not find any results matching your search.',
    icon: 'i-heroicons-magnifying-glass'
  }
}

export const WithAction: Story = {
  args: {
    title: 'No projects yet',
    description: 'Get started by creating your first project.',
    icon: 'i-heroicons-folder',
    action: {
      label: 'Create Project',
      icon: 'i-heroicons-plus'
    }
  }
}

export const Minimal: Story = {
  args: {
    title: 'Nothing here'
  }
}
