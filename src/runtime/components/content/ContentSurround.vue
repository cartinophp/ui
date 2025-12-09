
<script setup lang="ts" generic="T extends ContentSurroundLink">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { createReusableTemplate } from '@vueuse/core'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import ULink from '../Link.vue'
import UIcon from '../Icon.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps<ContentSurroundProps<T>>()
defineSlots<ContentSurroundSlots<T>>()

const appConfig = useAppConfig() as ContentSurround['AppConfig']

const [DefineLinkTemplate, ReuseLinkTemplate] = createReusableTemplate<{ link?['name'], direction: 'left' | 'right' }>({
  props: {
    link
    icon
    direction'left' | 'right'>
  }
})

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.contentSurround || {}) })() as unknown as ContentSurround['ui'])
</script>

<template>
  <DefineLinkTemplate v-slot="{ link, icon, direction }">
    <ULink v-if="link" :to="link.path" raw data-slot="link" :class="ui.link({ class: [props.ui?.link, link.ui?.link, link.class], direction })">
      <slot name="link" :link="(link as T)" :ui="ui">
        <div data-slot="linkLeading" :class="ui.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading] })">
          <slot name="link-leading" :link="(link as T)" :ui="ui">
            <UIcon :name="link.icon || icon" data-slot="linkLeadingIcon" :class="ui.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], direction })" />
          </slot>
        </div>

        <p data-slot="linkTitle" :class="ui.linkTitle({ class: [props.ui?.linkTitle, link.ui?.linkTitle] })">
          <slot name="link-title" :link="(link as T)" :ui="ui">
            {{ link.title }}
          </slot>
        </p>

        <p data-slot="linkDescription" :class="ui.linkDescription({ class: [props.ui?.linkDescription, link.ui?.linkDescription] })">
          <slot name="link-description" :link="(link as T)" :ui="ui">
            {{ link.description }}
          </slot>
        </p>
      </slot>
    </ULink>
    <span v-else class="hidden lg:block">&nbsp;</span>
  </DefineLinkTemplate>

  <Primitive v-if="surround" :as="as" v-bind="$attrs" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <ReuseLinkTemplate :link="surround[0]" :icon="prevIcon || appConfig.ui.icons.arrowLeft" direction="left" />
    <ReuseLinkTemplate :link="surround[1]" :icon="nextIcon || appConfig.ui.icons.arrowRight" direction="right" />
  </Primitive>
</template>
