import type { Meta, StoryObj } from '@storybook/vue3'
import UAccordion from '../../../../src/runtime/components/Accordion.vue'

const meta = {
  title: 'Components/Layout/Accordion',
  component: UiAccordion,
  tags: ['autodocs']
} satisfies Meta<typeof UiAccordion>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  {
    label: 'What is your refund policy?',
    content: 'If you are not satisfied with your purchase, we offer a full refund within 30 days of purchase. No questions asked.'
  },
  {
    label: 'Do you offer technical support?',
    content: 'Yes, we offer 24/7 technical support via email and chat. Premium customers also get phone support.'
  },
  {
    label: 'Can I upgrade my plan later?',
    content: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
  }
]

export const Default: Story = {
  args: {
    items
  }
}

export const Single: Story = {
  args: {
    items,
    type: 'single'
  }
}

export const Multiple: Story = {
  args: {
    items,
    type: 'multiple'
  }
}

export const WithDefaultOpen: Story = {
  args: {
    items,
    defaultValue: [0]
  }
}

export const WithIcons: Story = {
  args: {
    items: [
      {
        label: 'Getting Started',
        icon: 'i-heroicons-rocket-launch',
        content: 'Learn the basics of getting started with our platform.'
      },
      {
        label: 'Advanced Features',
        icon: 'i-heroicons-sparkles',
        content: 'Explore advanced features and capabilities.'
      },
      {
        label: 'API Reference',
        icon: 'i-heroicons-code-bracket',
        content: 'Complete API documentation and examples.'
      }
    ]
  }
}

export const Nested: Story = {
  render: () => ({
    components: { UiAccordion },
    setup() {
      const parentItems = [
        {
          label: 'Section 1',
          content: 'This section contains nested accordion items.'
        },
        {
          label: 'Section 2',
          content: 'Another section with content.'
        }
      ]
      return { parentItems }
    },
    template: `
      <ui-accordion :items="parentItems">
        <template #item-0-content>
          <div class="p-4">
            <p class="mb-4">This section has nested items:</p>
            <ui-accordion :items="[
              { label: 'Subsection 1.1', content: 'Content for subsection 1.1' },
              { label: 'Subsection 1.2', content: 'Content for subsection 1.2' }
            ]" />
          </div>
        </template>
      </ui-accordion>
    `
  })
}

export const LongContent: Story = {
  args: {
    items: [
      {
        label: 'Terms of Service',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      },
      {
        label: 'Privacy Policy',
        content: 'Your privacy is important to us. We collect and process your data in accordance with GDPR and other applicable regulations.'
      }
    ]
  }
}

export const Disabled: Story = {
  args: {
    items: [
      { label: 'Available Section', content: 'This section is available.' },
      { label: 'Disabled Section', content: 'This content is not accessible.', disabled: true },
      { label: 'Another Available Section', content: 'This section is also available.' }
    ]
  }
}
