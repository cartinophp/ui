
<script setup>
import { computed, watch, onMounted, ref, onBeforeUpdate } from 'vue'
import { TabsRoot, TabsList, TabsIndicator, TabsTrigger, TabsContent } from 'reka-ui'
import { useState, useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import UCodeIcon from './CodeIcon.vue'

const props = withDefaults(defineProps<ProseCodeGroupProps>(), {
  defaultValue: '0'
})
const slots = defineSlots<ProseCodeGroupSlots>()

const model = defineModel<string>()

const appConfig = useAppConfig() as ProseCodeGroup['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.prose?.codeGroup || {}) })() as unknown as ProseCodeGroup['ui'])

const rerenderCount = ref(1)

const items = computed<{
  index: number
  label: string
  icon: string
  component: any
}[]>(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  rerenderCount.value
  return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || []
})

function transformSlot(slot: any, index: number) {
  if (typeof slot.type === 'symbol') {
    return slot.children?.map(transformSlot)
  }

  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot
  }
}

onMounted(() => {
  if (props.sync) {
    const syncKey = `code-group-${props.sync}`
    const syncValue = useState<string>(syncKey, () => localStorage.getItem(syncKey) as string)

    watch(syncValue, () => {
      if (!syncValue.value) return

      model.value = syncValue.value
    }, { immediate: true })

    watch(model, () => {
      if (!model.value) return

      syncValue.value = model.value
      localStorage.setItem(syncKey, model.value)
    })
  }
})

onBeforeUpdate(() => rerenderCount.value++)
</script>

<template>
  <TabsRoot v-model="model" :default-value="defaultValue" :unmount-on-hide="false" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <TabsList :class="ui.list({ class: props.ui?.list })">
      <TabsIndicator :class="ui.indicator({ class: props.ui?.indicator })" />

      <TabsTrigger v-for="(item, index) of items" :key="index" :value="String(index)" :class="ui.trigger({ class: props.ui?.trigger })">
        <UCodeIcon :icon="item.icon" :filename="item.label" :class="ui.triggerIcon({ class: props.ui?.triggerIcon })" />

        <span :class="ui.triggerLabel({ class: props.ui?.triggerLabel })">{{ item.label }}</span>
      </TabsTrigger>
    </TabsList>

    <TabsContent v-for="(item, index) of items" :key="index" :value="String(index)" as-child>
      <component :is="item.component" hide-header tabindex="-1" />
    </TabsContent>
  </TabsRoot>
</template>
