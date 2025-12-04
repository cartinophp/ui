import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiCollapsible from '../../../../src/runtime/components/Collapsible.vue'
import UiButton from '../../../../src/runtime/components/Button.vue'

const meta = {
  title: 'Components/Layout/Collapsible',
  component: UiCollapsible,
  tags: ['autodocs']
} satisfies Meta<typeof UiCollapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiCollapsible, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = !isOpen" :label="isOpen ? 'Hide' : 'Show'" />
        <ui-collapsible v-model="isOpen">
          <div class="mt-4 p-4 bg-gray-100 rounded">
            <p class="text-gray-600">
              This content can be toggled open and closed.
            </p>
          </div>
        </ui-collapsible>
      </div>
    `
  })
}

export const OpenByDefault: Story = {
  render: () => ({
    components: { UiCollapsible, UiButton },
    setup() {
      const isOpen = ref(true)
      return { isOpen }
    },
    template: `
      <div>
        <ui-button @click="isOpen = !isOpen" :label="isOpen ? 'Collapse' : 'Expand'" />
        <ui-collapsible v-model="isOpen">
          <div class="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
            <h3 class="font-semibold mb-2">Expanded Content</h3>
            <p class="text-sm text-gray-600">
              This collapsible starts in the open state.
            </p>
          </div>
        </ui-collapsible>
      </div>
    `
  })
}

export const WithRichContent: Story = {
  render: () => ({
    components: { UiCollapsible, UiButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <div class="flex items-center justify-between p-4 bg-white border rounded-lg">
          <div>
            <h3 class="font-semibold">Advanced Settings</h3>
            <p class="text-sm text-gray-600">Configure advanced options</p>
          </div>
          <ui-button
            @click="isOpen = !isOpen"
            :icon="isOpen ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'"
            variant="ghost"
          />
        </div>
        <ui-collapsible v-model="isOpen">
          <div class="mt-2 p-4 bg-gray-50 border border-t-0 rounded-b-lg space-y-4">
            <div>
              <label class="block text-sm font-medium mb-1">Option 1</label>
              <input type="text" class="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Option 2</label>
              <input type="text" class="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label class="flex items-center gap-2">
                <input type="checkbox" />
                <span class="text-sm">Enable advanced mode</span>
              </label>
            </div>
          </div>
        </ui-collapsible>
      </div>
    `
  })
}

export const Multiple: Story = {
  render: () => ({
    components: { UiCollapsible, UiButton },
    setup() {
      const section1 = ref(false)
      const section2 = ref(false)
      const section3 = ref(false)
      return { section1, section2, section3 }
    },
    template: `
      <div class="space-y-4">
        <div>
          <ui-button @click="section1 = !section1" label="Section 1" block />
          <ui-collapsible v-model="section1">
            <div class="mt-2 p-4 bg-red-50 rounded">
              Content for section 1
            </div>
          </ui-collapsible>
        </div>

        <div>
          <ui-button @click="section2 = !section2" label="Section 2" block />
          <ui-collapsible v-model="section2">
            <div class="mt-2 p-4 bg-green-50 rounded">
              Content for section 2
            </div>
          </ui-collapsible>
        </div>

        <div>
          <ui-button @click="section3 = !section3" label="Section 3" block />
          <ui-collapsible v-model="section3">
            <div class="mt-2 p-4 bg-blue-50 rounded">
              Content for section 3
            </div>
          </ui-collapsible>
        </div>
      </div>
    `
  })
}

export const FAQ: Story = {
  render: () => ({
    components: { UiCollapsible, UiButton },
    setup() {
      const faq1 = ref(false)
      const faq2 = ref(false)
      const faq3 = ref(false)
      return { faq1, faq2, faq3 }
    },
    template: `
      <div class="max-w-2xl space-y-2">
        <div class="border rounded-lg overflow-hidden">
          <button
            @click="faq1 = !faq1"
            class="w-full text-left p-4 hover:bg-gray-50 flex justify-between items-center"
          >
            <span class="font-medium">What is your refund policy?</span>
            <span class="text-gray-400">{{ faq1 ? '−' : '+' }}</span>
          </button>
          <ui-collapsible v-model="faq1">
            <div class="px-4 pb-4 text-sm text-gray-600 border-t">
              <p class="pt-4">We offer a 30-day money-back guarantee on all purchases.</p>
            </div>
          </ui-collapsible>
        </div>

        <div class="border rounded-lg overflow-hidden">
          <button
            @click="faq2 = !faq2"
            class="w-full text-left p-4 hover:bg-gray-50 flex justify-between items-center"
          >
            <span class="font-medium">Do you offer technical support?</span>
            <span class="text-gray-400">{{ faq2 ? '−' : '+' }}</span>
          </button>
          <ui-collapsible v-model="faq2">
            <div class="px-4 pb-4 text-sm text-gray-600 border-t">
              <p class="pt-4">Yes, we provide 24/7 technical support via email and live chat.</p>
            </div>
          </ui-collapsible>
        </div>

        <div class="border rounded-lg overflow-hidden">
          <button
            @click="faq3 = !faq3"
            class="w-full text-left p-4 hover:bg-gray-50 flex justify-between items-center"
          >
            <span class="font-medium">Can I upgrade my plan later?</span>
            <span class="text-gray-400">{{ faq3 ? '−' : '+' }}</span>
          </button>
          <ui-collapsible v-model="faq3">
            <div class="px-4 pb-4 text-sm text-gray-600 border-t">
              <p class="pt-4">Absolutely! You can upgrade or downgrade at any time.</p>
            </div>
          </ui-collapsible>
        </div>
      </div>
    `
  })
}
