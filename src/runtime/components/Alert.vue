
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useLocale } from '../composables/useLocale'
import { tv } from '../utils/tv'
import UIcon from './Icon.vue'
import UAvatar from './Avatar.vue'
import UButton from './Button.vue'

const props = defineProps({
  orientation: 'vertical'
})
const emits = defineEmits()
const slots = defineSlots()

const { t } = useLocale()
const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.alert || {}) })({
  color: props.color,
  variant: props.variant,
  orientation: props.orientation,
  title: !!props.title || !!slots.title
}))
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <slot name="leading" :ui="ui">
      <UAvatar v-if="avatar" :size="((props.ui?.avatarSize || ui.avatarSize()))" v-bind="avatar" data-slot="avatar" :class="ui.avatar({ class: props.ui?.avatar })" />
      <UIcon v-else-if="icon" :name="icon" data-slot="icon" :class="ui.icon({ class: props.ui?.icon })" />
    </slot>

    <div data-slot="wrapper" :class="ui.wrapper({ class: props.ui?.wrapper })">
      <div v-if="title || !!slots.title" data-slot="title" :class="ui.title({ class: props.ui?.title })">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div v-if="description || !!slots.description" data-slot="description" :class="ui.description({ class: props.ui?.description })">
        <slot name="description">
          {{ description }}
        </slot>
      </div>

      <div v-if="orientation === 'vertical' && (actions?.length || !!slots.actions)" data-slot="actions" :class="ui.actions({ class: props.ui?.actions })">
        <slot name="actions">
          <UButton v-for="(action, index) in actions" :key="index" size="xs" v-bind="action" />
        </slot>
      </div>
    </div>

    <div v-if="(orientation === 'horizontal' && (actions?.length || !!slots.actions)) || close" data-slot="actions" :class="ui.actions({ class: props.ui?.actions, orientation: 'horizontal' })">
      <template v-if="orientation === 'horizontal' && (actions?.length || !!slots.actions)">
        <slot name="actions">
          <UButton v-for="(action, index) in actions" :key="index" size="xs" v-bind="action" />
        </slot>
      </template>

      <slot name="close" :ui="ui">
        <UButton
          v-if="close"
          :icon="closeIcon || appConfig.ui.icons.close"
          color="neutral"
          variant="link"
          :aria-label="t('alert.close')"
          v-bind="(typeof close === 'object' ? close : {})"
          data-slot="close"
          :class="ui.close({ class: props.ui?.close })"
          @click="emits('update:open', false)"
        />
      </slot>
    </div>
  </Primitive>
</template>
