<script setup lang="ts">
  import { computed, ref } from 'vue'
  import Icon from './Icon.vue'
  import theme from '@/themes/navigation-menu'
  
  export interface MenuItem {
    label: string
    icon?: string
    url?: string
    children?: MenuItem[]
    active?: boolean
    disabled?: boolean
  }
  
  export interface NavigationMenuItemProps {
    item: MenuItem
    mode: 'vertical' | 'horizontal'
    collapsed?: boolean
    isMobile?: boolean
    level?: number
    class?: string
    ui?: Record<string, any>
  }
  
  const props = withDefaults(defineProps<NavigationMenuItemProps>(), {
    collapsed: false,
    isMobile: false,
    level: 0
  })
  
  const emit = defineEmits<{
    select: [item: MenuItem]
    'close-drawer': []
    'update:collapsed': [value: boolean]
  }>()
  
  const ui = computed(() => theme({ orientation: props.mode }))
  
  const expanded = ref(false)
  
  const hasChildren = computed(() => !!props.item.children?.length)
  
  const toggle = () => {
    if (hasChildren.value) {
      expanded.value = !expanded.value
    }
  }
  
  const handleClick = () => {
    if (!props.item.children) {
      emit('select', props.item)
      // Always emit close-drawer on mobile when item is clicked
      if (props.isMobile) {
        emit('close-drawer')
      }
    } else {
      // For items with children on mobile, toggle expansion
      toggle()
    }
  }
  
  </script>
  
  <template>
    <li :class="ui.item" role="none">
      <!-- Trigger for items with children -->
      <button
        v-if="hasChildren"
        @click="toggle"
        :class="ui.trigger"
        role="menuitem"
        :aria-expanded="expanded"
        :aria-haspopup="true"
        :data-state="expanded ? 'open' : 'closed'"
        :title="collapsed && mode === 'vertical' ? item.label : ''"
        :disabled="item.disabled"
      >
        <Icon v-if="item.icon" :name="item.icon" :class="ui.triggerIcon" />
        <span v-if="!collapsed || mode === 'horizontal'">{{ item.label }}</span>
        <Icon
          v-if="mode === 'vertical'"
          name="polaris:ChevronDownMinor"
          :class="ui.triggerCaret"
        />
      </button>
  
      <!-- Link for leaf items -->
      <a
        v-else-if="item.url"
        :href="item.url"
        :class="[
          ui.link,
          item.active ? 'bg-accent text-accent-foreground' : '',
          item.disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
        role="menuitem"
        :title="collapsed && mode === 'vertical' ? item.label : ''"
        @click.prevent="handleClick"
      >
        <Icon v-if="item.icon" :name="item.icon" :class="ui.linkIcon" />
        <span v-if="!collapsed || mode === 'horizontal'">{{ item.label }}</span>
      </a>
  
      <!-- Span for leaf items without URL -->
      <span
        v-else
        :class="[
          ui.link,
          item.active ? 'bg-accent text-accent-foreground' : '',
          item.disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
        role="menuitem"
        :title="collapsed && mode === 'vertical' ? item.label : ''"
        @click="handleClick"
      >
        <Icon v-if="item.icon" :name="item.icon" :class="ui.linkIcon" />
        <span v-if="!collapsed || mode === 'horizontal'">{{ item.label }}</span>
      </span>
  
      <!-- Recursive children -->
      <Transition
        v-if="hasChildren"
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-screen"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 max-h-screen"
        leave-to-class="opacity-0 max-h-0"
      >
        <ul
          v-if="expanded"
          :class="[
            ui.list,
            mode === 'vertical' ? 'ml-4' : '',
            mode === 'horizontal' ? ui.content : ''
          ]"
          role="menu"
        >
          <NavigationMenuItem
            v-for="child in item.children"
            :key="child.label"
            :item="child"
            :mode="mode"
            :collapsed="collapsed"
            :isMobile="isMobile"
            :level="level + 1"
            :ui="ui"
            @select="$emit('select', $event)"
            @close-drawer="$emit('close-drawer')"
          />
        </ul>
      </Transition>
    </li>
  </template>