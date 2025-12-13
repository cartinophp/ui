<script setup lang="ts">
import { computed } from 'vue'
import theme from '@/themes/sidebar'
import Icon from './Icon.vue'

export interface SidebarLink {
  label: string
  to?: string
  href?: string
  icon?: string
  badge?: string | number
  active?: boolean
  disabled?: boolean
  children?: SidebarLink[]
  onClick?: () => void
}

export interface SidebarProps {
  links?: SidebarLink[]
  collapsible?: boolean
  collapsed?: boolean
  width?: string
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: false,
  collapsed: false,
  width: '280px'
})

const emit = defineEmits<{
  'update:collapsed': [value: boolean]
  select: [link: SidebarLink]
}>()

const slots = defineSlots<{
  header?: () => any
  default?: () => any
  footer?: () => any
}>()

const ui = computed(() => theme({
  collapsed: props.collapsed
}))

const handleLinkClick = (link: SidebarLink) => {
  if (!link.disabled) {
    link.onClick?.()
    emit('select', link)
  }
}

const toggleCollapsed = () => {
  emit('update:collapsed', !props.collapsed)
}
</script>

<template>
  <aside
    :class="ui.root({ class: props.ui?.root })"
    :style="{ width: collapsed ? '80px' : width }"
  >
    <!-- Header -->
    <div v-if="slots.header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header" :collapsed="collapsed" :toggle="toggleCollapsed" />
    </div>

    <!-- Links -->
    <nav :class="ui.nav({ class: props.ui?.nav })">
      <slot>
        <template v-for="(link, index) in links" :key="index">
          <!-- Group Label -->
          <div
            v-if="link.children && !collapsed"
            :class="ui.groupLabel({ class: props.ui?.groupLabel })"
          >
            {{ link.label }}
          </div>

          <!-- Group Links -->
          <template v-if="link.children">
            <component
              :is="child.to ? 'router-link' : child.href ? 'a' : 'button'"
              v-for="(child, childIndex) in link.children"
              :key="childIndex"
              :to="child.to"
              :href="child.href"
              :class="ui.link({
                class: props.ui?.link,
                active: child.active,
                disabled: child.disabled
              })"
              :disabled="child.disabled"
              @click="() => handleLinkClick(child)"
            >
              <Icon
                v-if="child.icon"
                :name="child.icon"
                :class="ui.linkIcon({ class: props.ui?.linkIcon })"
              />
              <span v-if="!collapsed" :class="ui.linkLabel({ class: props.ui?.linkLabel })">
                {{ child.label }}
              </span>
              <span
                v-if="child.badge && !collapsed"
                :class="ui.linkBadge({ class: props.ui?.linkBadge })"
              >
                {{ child.badge }}
              </span>
            </component>
          </template>

          <!-- Regular Link -->
          <component
            v-else
            :is="link.to ? 'router-link' : link.href ? 'a' : 'button'"
            :to="link.to"
            :href="link.href"
            :class="ui.link({
              class: props.ui?.link,
              active: link.active,
              disabled: link.disabled
            })"
            :disabled="link.disabled"
            @click="() => handleLinkClick(link)"
          >
            <Icon
              v-if="link.icon"
              :name="link.icon"
              :class="ui.linkIcon({ class: props.ui?.linkIcon })"
            />
            <span v-if="!collapsed" :class="ui.linkLabel({ class: props.ui?.linkLabel })">
              {{ link.label }}
            </span>
            <span
              v-if="link.badge && !collapsed"
              :class="ui.linkBadge({ class: props.ui?.linkBadge })"
            >
              {{ link.badge }}
            </span>
          </component>
        </template>
      </slot>
    </nav>

    <!-- Footer -->
    <div v-if="slots.footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" :collapsed="collapsed" :toggle="toggleCollapsed" />
    </div>

    <!-- Collapse Toggle -->
    <button
      v-if="collapsible"
      :class="ui.collapseButton({ class: props.ui?.collapseButton })"
      @click="toggleCollapsed"
    >
      <Icon
        :name="collapsed ? 'i-heroicons-chevron-right' : 'i-heroicons-chevron-left'"
        :class="ui.collapseIcon({ class: props.ui?.collapseIcon })"
      />
    </button>
  </aside>
</template>
