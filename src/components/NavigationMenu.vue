<script setup lang="ts">
import { computed } from 'vue'
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from 'reka-ui'
import theme from '@/themes/navigation-menu'
import Icon from '@/components/Icon.vue'

export interface NavigationMenuItem {
  label: string
  to?: string
  href?: string
  icon?: string
  description?: string
  disabled?: boolean
  children?: Array<{
    label: string
    description?: string
    to?: string
    href?: string
    icon?: string
    disabled?: boolean
  }>
}

export interface NavigationMenuProps {
  items?: NavigationMenuItem[]
  orientation?: 'horizontal' | 'vertical'
  ui?: Record<string, any>
}

const props = withDefaults(defineProps<NavigationMenuProps>(), {
  orientation: 'horizontal'
})

const emit = defineEmits<{
  select: [item: NavigationMenuItem]
}>()

const ui = computed(() => theme({
  orientation: props.orientation
}))

const handleSelect = (item: NavigationMenuItem) => {
  if (!item.disabled) {
    emit('select', item)
  }
}
</script>

<template>
  <NavigationMenuRoot :class="ui.root({ class: props.ui?.root })" :orientation="orientation">
    <NavigationMenuList :class="ui.list({ class: props.ui?.list })">
      <NavigationMenuItem
        v-for="(item, index) in items"
        :key="index"
        :class="ui.item({ class: props.ui?.item })"
      >
        <!-- Item with children (dropdown) -->
        <template v-if="item.children && item.children.length > 0">
          <NavigationMenuTrigger :class="ui.trigger({ class: props.ui?.trigger })" :disabled="item.disabled">
            <Icon v-if="item.icon" :name="item.icon" :class="ui.triggerIcon({ class: props.ui?.triggerIcon })" />
            <span>{{ item.label }}</span>
            <Icon name="i-heroicons-chevron-down" :class="ui.triggerCaret({ class: props.ui?.triggerCaret })" />
          </NavigationMenuTrigger>

          <NavigationMenuContent :class="ui.content({ class: props.ui?.content })">
            <div :class="ui.grid({ class: props.ui?.grid })">
              <component
                :is="child.to ? 'router-link' : child.href ? 'a' : 'div'"
                v-for="(child, childIndex) in item.children"
                :key="childIndex"
                :to="child.to"
                :href="child.href"
                :class="ui.gridItem({ class: props.ui?.gridItem })"
                @click="() => handleSelect(child)"
              >
                <Icon
                  v-if="child.icon"
                  :name="child.icon"
                  :class="ui.gridItemIcon({ class: props.ui?.gridItemIcon })"
                />
                <div :class="ui.gridItemContent({ class: props.ui?.gridItemContent })">
                  <div :class="ui.gridItemLabel({ class: props.ui?.gridItemLabel })">
                    {{ child.label }}
                  </div>
                  <div
                    v-if="child.description"
                    :class="ui.gridItemDescription({ class: props.ui?.gridItemDescription })"
                  >
                    {{ child.description }}
                  </div>
                </div>
              </component>
            </div>
          </NavigationMenuContent>
        </template>

        <!-- Simple link item -->
        <NavigationMenuLink
          v-else
          as-child
        >
          <component
            :is="item.to ? 'router-link' : item.href ? 'a' : 'button'"
            :to="item.to"
            :href="item.href"
            :class="ui.link({ class: props.ui?.link })"
            :disabled="item.disabled"
            @click="() => handleSelect(item)"
          >
            <Icon v-if="item.icon" :name="item.icon" :class="ui.linkIcon({ class: props.ui?.linkIcon })" />
            <span>{{ item.label }}</span>
          </component>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
