<script lang="ts">
import theme from '../../theme/page-anchors.js'
import type { IconProps, LinkProps } from '../types'
import type { ComponentConfig, AppConfig } from '../types/tv'

type PageAnchors = ComponentConfig<typeof theme, AppConfig, 'pageAnchors'>

export interface PageAnchor extends Omit<LinkProps, 'custom'> {
  label: string
  /**
   * @IconifyIcon
   */
  icon?: IconProps['name']
  class?: any
  ui?: Pick<PageAnchors['slots'], 'item' | 'link' | 'linkLabel' | 'linkLabelExternalIcon' | 'linkLeading' | 'linkLeadingIcon'>
}

export interface PageAnchorsProps<T extends PageAnchor = PageAnchor> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'nav'
   */
  as?: any
  links?: T[]
  class?: any
  ui?: PageAnchors['slots']
}

type SlotProps<T> = (props: { link: T, active: boolean, ui: PageAnchors['ui'] }) => any

export interface PageAnchorsSlots<T extends PageAnchor = PageAnchor> {
  'link': SlotProps<T>
  'link-leading': SlotProps<T>
  'link-label'(props: { link: T, active: boolean }): any
  'link-trailing'(props: { link: T, active: boolean }): any
}
</script>

<script setup lang="ts" generic="T extends PageAnchor">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { pickLinkProps } from '../utils/link'
import { tv } from '../utils/tv'
import ULink from './Link.vue'
import ULinkBase from './LinkBase.vue'
import UIcon from './Icon.vue'

const props = withDefaults(defineProps<PageAnchorsProps<T>>(), {
  as: 'nav'
})
const slots = defineSlots<PageAnchorsSlots<T>>()

const appConfig = {} as AppConfig

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.pageAnchors || {}) })() as unknown as PageAnchors['ui'])
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <ul data-slot="list" :class="ui.list({ class: props.ui?.list })">
      <li v-for="(link, index) in links" :key="index" data-slot="item" :class="ui.item({ class: [props.ui?.item, link.ui?.item] })">
        <ULink v-slot="{ active, ...slotProps }" v-bind="pickLinkProps(link)" custom>
          <ULinkBase v-bind="slotProps" data-slot="link" :class="ui.link({ class: [props.ui?.link, link.ui?.link, link.class], active })">
            <slot name="link" :link="link" :active="active" :ui="ui">
              <div v-if="link.icon || !!slots['link-leading']" data-slot="linkLeading" :class="ui.linkLeading({ class: [props.ui?.linkLeading, link.ui?.linkLeading], active })">
                <slot name="link-leading" :link="link" :active="active" :ui="ui">
                  <UIcon v-if="link.icon" :name="link.icon" data-slot="linkLeadingIcon" :class="ui.linkLeadingIcon({ class: [props.ui?.linkLeadingIcon, link.ui?.linkLeadingIcon], active })" />
                </slot>
              </div>

              <span v-if="link.label || !!slots['link-label']" data-slot="linkLabel" :class="ui.linkLabel({ class: [props.ui?.linkLabel, link.ui?.linkLabel], active })">
                <slot name="link-label" :link="link" :active="active">
                  {{ link.label }}
                </slot>

                <UIcon v-if="link.target === '_blank'" :name="appConfig.ui.icons.external" data-slot="linkLabelExternalIcon" :class="ui.linkLabelExternalIcon({ class: [props.ui?.linkLabelExternalIcon, link.ui?.linkLabelExternalIcon], active })" />
              </span>

              <slot name="link-trailing" :link="link" :active="active" />
            </slot>
          </ULinkBase>
        </ULink>
      </li>
    </ul>
  </Primitive>
</template>
