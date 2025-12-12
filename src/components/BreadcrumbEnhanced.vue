<template>
  <nav class="flex items-center space-x-1" aria-label="Breadcrumb" v-bind="$attrs">
    <ol class="flex items-center space-x-1">
      <li v-for="(item, index) in items" :key="index" class="flex items-center">
        <component
          :is="item.to ? 'a' : 'span'"
          :href="item.to"
          :class="getLinkClasses(item, index)"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          <Icon v-if="item.icon" :name="item.icon" class="shrink-0 size-4" />
          <span>{{ item.label }}</span>
        </component>
        
        <Icon 
          v-if="index < items.length - 1"
          :name="separatorIcon"
          class="mx-2 size-4 text-muted shrink-0"
        />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface BreadcrumbItem {
  label: string
  to?: string
  icon?: string
  active?: boolean
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  separatorIcon?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  items: () => [],
  separatorIcon: 'i-lucide-chevron-right',
  size: 'md'
})

const getLinkClasses = (item: BreadcrumbItem, index: number) => {
  const isLast = index === props.items.length - 1
  const isActive = item.active || isLast
  
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base'
  }

  const baseClasses = [
    'inline-flex items-center gap-1.5 transition-colors',
    sizeClasses[props.size]
  ]

  if (item.to && !isActive) {
    baseClasses.push(
      'text-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded'
    )
  } else {
    baseClasses.push(
      isActive ? 'text-foreground font-medium' : 'text-muted'
    )
  }

  return baseClasses.join(' ')
}
</script>