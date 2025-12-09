
<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { omit } from '../utils'
import { tv } from '../utils/tv'
import UButton from './Button.vue'
import UTooltip from './Tooltip.vue'
import UAvatar from './Avatar.vue'
import UIcon from './Icon.vue'

const props = defineProps({
  as: 'article'
})
const slots = defineSlots()

const appConfig = {}

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.chatMessage || {}) })({
  variant: props.variant,
  side: props.side,
  leading: !!props.icon || !!props.avatar || !!slots.leading,
  actions: !!props.actions || !!slots.actions,
  compact: props.compact
}))
</script>

<template>
  <Primitive :as="as" :data-role="role" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div data-slot="container" :class="ui.container({ class: props.ui?.container })">
      <div v-if="icon || avatar || !!slots.leading" data-slot="leading" :class="ui.leading({ class: props.ui?.leading })">
        <slot name="leading" :avatar="avatar" :ui="ui">
          <UIcon v-if="icon" :name="icon" data-slot="leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
          <UAvatar v-else-if="avatar" :size="((props.ui?.leadingAvatarSize || ui.leadingAvatarSize()))" v-bind="avatar" data-slot="leadingAvatar" :class="ui.leadingAvatar({ class: props.ui?.leadingAvatar })" />
        </slot>
      </div>

      <div v-if="content || parts.length || !!slots.content" data-slot="content" :class="ui.content({ class: props.ui?.content })">
        <slot
          :id="id"
          name="content"
          :role="role"
          :content="content"
          :parts="parts"
        >
          <template v-if="content">
            {{ content }}
          </template>
          <template v-else>
            <template v-for="(part, index) in parts" :key="`${id}-${part.type}-${index}`">
              <template v-if="part.type === 'text'">
                {{ part.text }}
              </template>
            </template>
          </template>
        </slot>
      </div>

      <div v-if="actions || !!slots.actions" data-slot="actions" :class="ui.actions({ class: props.ui?.actions })">
        <slot name="actions" :actions="actions">
          <UTooltip v-for="(action, index) in actions" :key="index" :text="action.label">
            <UButton
              size="sm"
              color="neutral"
              variant="ghost"
              v-bind="omit(action, ['onClick'])"
              :label="undefined"
              @click="typeof action.onClick === 'function' ? action.onClick($event, props) : undefined"
            />
          </UTooltip>
        </slot>
      </div>
    </div>
  </Primitive>
</template>
