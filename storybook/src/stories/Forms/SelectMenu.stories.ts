import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiSelectMenu from '../../../../src/runtime/components/SelectMenu.vue'

const meta = {
  title: 'Components/Forms/SelectMenu',
  component: UiSelectMenu,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'none']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  }
} satisfies Meta<typeof UiSelectMenu>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' }
]

const optionsWithIcons = [
  { value: 'home', label: 'Home', icon: 'i-heroicons-home' },
  { value: 'user', label: 'Profile', icon: 'i-heroicons-user' },
  { value: 'settings', label: 'Settings', icon: 'i-heroicons-cog-6-tooth' },
  { value: 'notifications', label: 'Notifications', icon: 'i-heroicons-bell' }
]

const groupedOptions = [
  {
    label: 'Fruits',
    items: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' }
    ]
  },
  {
    label: 'Vegetables',
    items: [
      { value: 'carrot', label: 'Carrot' },
      { value: 'potato', label: 'Potato' },
      { value: 'tomato', label: 'Tomato' }
    ]
  }
]

export const Default: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref(null)
      return { selected, options }
    },
    template: `
      <div>
        <ui-select-menu v-model="selected" :options="options" placeholder="Select an option" />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selected || 'None' }}</p>
      </div>
    `
  })
}

export const WithValue: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref('option2')
      return { selected, options }
    },
    template: `
      <div>
        <ui-select-menu v-model="selected" :options="options" />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selected }}</p>
      </div>
    `
  })
}

export const WithIcons: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref(null)
      return { selected, optionsWithIcons }
    },
    template: `
      <ui-select-menu v-model="selected" :options="optionsWithIcons" placeholder="Select an option" />
    `
  })
}

export const Searchable: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref(null)
      return { selected, options }
    },
    template: `
      <ui-select-menu
        v-model="selected"
        :options="options"
        placeholder="Search options..."
        searchable
      />
    `
  })
}

export const Multiple: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref([])
      return { selected, options }
    },
    template: `
      <div>
        <ui-select-menu
          v-model="selected"
          :options="options"
          placeholder="Select multiple options"
          multiple
        />
        <p class="mt-4 text-sm text-gray-600">Selected: {{ selected.join(', ') || 'None' }}</p>
      </div>
    `
  })
}

export const Grouped: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref(null)
      return { selected, groupedOptions }
    },
    template: `
      <ui-select-menu
        v-model="selected"
        :options="groupedOptions"
        placeholder="Select a food"
      />
    `
  })
}

export const WithAvatar: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref(null)
      const users = [
        { value: 'user1', label: 'John Doe', avatar: { src: 'https://i.pravatar.cc/150?img=1' } },
        { value: 'user2', label: 'Jane Smith', avatar: { src: 'https://i.pravatar.cc/150?img=2' } },
        { value: 'user3', label: 'Bob Johnson', avatar: { src: 'https://i.pravatar.cc/150?img=3' } }
      ]
      return { selected, users }
    },
    template: `
      <ui-select-menu
        v-model="selected"
        :options="users"
        placeholder="Select a user"
      />
    `
  })
}

export const Disabled: Story = {
  args: {
    options,
    placeholder: 'Disabled select',
    disabled: true
  }
}

export const Small: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref(null)
      return { selected, options }
    },
    template: `
      <ui-select-menu v-model="selected" :options="options" placeholder="Small size" size="sm" />
    `
  })
}

export const Large: Story = {
  render: () => ({
    components: { UiSelectMenu },
    setup() {
      const selected = ref(null)
      return { selected, options }
    },
    template: `
      <ui-select-menu v-model="selected" :options="options" placeholder="Large size" size="lg" />
    `
  })
}
