<template>
  <div class="w-full" v-bind="$attrs">
    <!-- Tab list -->
    <div 
      :class="tabListClasses"
      role="tablist"
      :aria-orientation="orientation"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.value || index"
        :class="getTabClasses(tab, index)"
        :aria-selected="isActive(tab, index)"
        :aria-controls="`panel-${tab.value || index}`"
        :disabled="tab.disabled"
        role="tab"
        @click="selectTab(tab, index)"
      >
        <Icon v-if="tab.icon" :name="tab.icon" class="shrink-0 size-4" />
        <span v-if="tab.label">{{ tab.label }}</span>
        <span 
          v-if="tab.badge" 
          :class="badgeClasses"
        >
          {{ tab.badge }}
        </span>
      </button>
      
      <!-- Active indicator -->
      <div 
        v-if="indicator"
        ref="indicatorRef"
        :class="indicatorClasses"
        :style="indicatorStyle"
      />
    </div>

    <!-- Tab panels -->
    <div v-if="!content" class="mt-4">
      <div
        v-for="(tab, index) in tabs"
        :key="`panel-${tab.value || index}`"
        v-show="isActive(tab, index)"
        :id="`panel-${tab.value || index}`"
        role="tabpanel"
        :aria-labelledby="`tab-${tab.value || index}`"
      >
        <slot 
          :name="tab.slot || 'default'"
          :tab="tab"
          :index="index"
          :active="isActive(tab, index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, onMounted, watch } from 'vue'

export interface TabItem {
  label?: string
  value?: string | number
  icon?: string
  badge?: string | number
  disabled?: boolean
  slot?: string
}

export interface TabsProps {
  modelValue?: string | number
  defaultValue?: string | number
  items?: TabItem[]
  orientation?: 'horizontal' | 'vertical'
  variant?: 'line' | 'pill' | 'card'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  indicator?: boolean
  content?: boolean
}

const props = withDefaults(defineProps<TabsProps>(), {
  orientation: 'horizontal',
  variant: 'line',
  size: 'md',
  color: 'primary',
  indicator: true,
  content: true,
  items: () => []
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  'change': [tab: TabItem, index: number]
}>()

const indicatorRef = ref<HTMLElement>()
const indicatorStyle = ref({})

const tabs = computed(() => props.items || [])

const activeValue = computed({
  get: () => props.modelValue ?? props.defaultValue ?? tabs.value[0]?.value ?? 0,
  set: (value: string | number) => emit('update:modelValue', value)
})

const tabListClasses = computed(() => {
  const orientationClasses = {
    horizontal: 'flex',
    vertical: 'flex flex-col'
  }

  const variantClasses = {
    line: props.orientation === 'horizontal' 
      ? 'border-b border-default' 
      : 'border-r border-default',
    pill: 'bg-elevated p-1 rounded-lg',
    card: 'border border-default rounded-lg overflow-hidden'
  }

  return [
    'relative',
    orientationClasses[props.orientation],
    variantClasses[props.variant]
  ].filter(Boolean).join(' ')
})

const getTabClasses = (tab: TabItem, index: number) => {
  const active = isActive(tab, index)
  
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const baseClasses = [
    'relative flex items-center gap-2 font-medium transition-colors focus:outline-none',
    'disabled:cursor-not-allowed disabled:opacity-50',
    sizeClasses[props.size]
  ]

  const variantClasses = {
    line: [
      active ? 'text-primary border-primary' : 'text-muted hover:text-foreground',
      props.orientation === 'horizontal' 
        ? 'border-b-2 border-transparent' 
        : 'border-r-2 border-transparent'
    ],
    pill: [
      active 
        ? 'bg-default text-foreground shadow-sm' 
        : 'text-muted hover:text-foreground hover:bg-default/50',
      'rounded-md'
    ],
    card: [
      active 
        ? 'bg-default text-foreground' 
        : 'text-muted hover:text-foreground hover:bg-elevated',
      props.orientation === 'horizontal' && index > 0 ? 'border-l border-default' : '',
      props.orientation === 'vertical' && index > 0 ? 'border-t border-default' : ''
    ]
  }

  return [
    ...baseClasses,
    ...variantClasses[props.variant]
  ].filter(Boolean).join(' ')
}

const badgeClasses = computed(() => [
  'inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-xs font-medium rounded-full',
  'bg-primary text-primary-foreground'
].join(' '))

const indicatorClasses = computed(() => {
  if (props.variant !== 'line') return ''
  
  return [
    'absolute bg-primary transition-all duration-200 ease-out',
    props.orientation === 'horizontal' ? 'bottom-0 h-0.5' : 'right-0 w-0.5'
  ].join(' ')
})

const isActive = (tab: TabItem, index: number): boolean => {
  const value = tab.value ?? index
  return value === activeValue.value
}

const selectTab = (tab: TabItem, index: number) => {
  if (tab.disabled) return
  
  const value = tab.value ?? index
  activeValue.value = value
  emit('change', tab, index)
  
  nextTick(() => {
    updateIndicator()
  })
}

const updateIndicator = () => {
  if (!props.indicator || props.variant !== 'line' || !indicatorRef.value) return

  const activeTab = document.querySelector('[aria-selected="true"]') as HTMLElement
  if (!activeTab) return

  const tabList = activeTab.parentElement
  if (!tabList) return

  if (props.orientation === 'horizontal') {
    const left = activeTab.offsetLeft
    const width = activeTab.offsetWidth
    indicatorStyle.value = {
      left: `${left}px`,
      width: `${width}px`
    }
  } else {
    const top = activeTab.offsetTop  
    const height = activeTab.offsetHeight
    indicatorStyle.value = {
      top: `${top}px`,
      height: `${height}px`
    }
  }
}

onMounted(() => {
  updateIndicator()
})

watch(activeValue, () => {
  nextTick(() => {
    updateIndicator()
  })
})

defineExpose({
  updateIndicator
})
</script>