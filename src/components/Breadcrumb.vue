<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import breadcrumbTheme from '@/themes/breadcrumb'
import Link from './Link.vue'
import Icon from '@/components/Icon.vue'
import UAvatar from './Avatar.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  as: {
    type: [String, Object],
    default: 'nav'
  },
  items: {
    type: Array,
    default: () => []
  },
  separatorIcon: {
    type: String,
    default: 'i-heroicons-chevron-right'
  },
  labelKey: {
    type: [String, Number],
    default: 'label'
  },
  class: {
    type: [String, Object, Array],
    default: undefined
  },
  ui: {
    type: Object,
    default: () => ({})
  }
})

const slots = defineSlots()

const getItemLabel = (item) => {
  if (typeof props.labelKey === 'string') {
    return item[props.labelKey]
  }
  return item[props.labelKey] || item.label
}

const getItemUi = (item, index) => {
  const isActive = index === props.items.length - 1
  return breadcrumbTheme({
    active: isActive,
    disabled: item.disabled,
    to: !!item.to
  })
}
</script>

<template>
  <Primitive
    :as="props.as"
    aria-label="Breadcrumb"
    data-slot="root"
    :class="breadcrumbTheme().root({ class: [props.ui?.root, props.class] })"
    v-bind="$attrs"
  >
    <ol
      data-slot="list"
      :class="breadcrumbTheme().list({ class: props.ui?.list })"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        data-slot="item"
        :class="breadcrumbTheme().item({ class: props.ui?.item })"
      >
        <slot
          name="item"
          :item="item"
          :index="index"
          :ui="getItemUi(item, index)"
        >
          <Link
            v-if="item.to && !item.disabled"
            v-bind="item"
            :aria-current="index === items.length - 1 ? 'page' : undefined"
            data-slot="link"
            :class="
              getItemUi(item, index).link({
                class: [props.ui?.link, item.class]
              })
            "
          >
            <slot name="item-leading" :item="item" :index="index">
              <UAvatar
                v-if="item.avatar"
                v-bind="item.avatar"
                size="3xs"
                data-slot="link-leading-avatar"
                :class="
                  getItemUi(item, index).linkLeadingAvatar({
                    class: props.ui?.linkLeadingAvatar
                  })
                "
              />
              <Icon
                v-else-if="item.icon"
                :name="item.icon"
                data-slot="link-leading-icon"
                :class="
                  getItemUi(item, index).linkLeadingIcon({
                    class: props.ui?.linkLeadingIcon
                  })
                "
              />
            </slot>

            <slot name="item-label" :item="item" :index="index">
              <span
                data-slot="link-label"
                :class="
                  getItemUi(item, index).linkLabel({
                    class: props.ui?.linkLabel
                  })
                "
              >
                {{ getItemLabel(item) }}
              </span>
            </slot>

            <slot name="item-trailing" :item="item" :index="index">
              <Icon
                v-if="item.trailingIcon"
                :name="item.trailingIcon"
                data-slot="link-trailing-icon"
                :class="
                  getItemUi(item, index).linkTrailingIcon({
                    class: props.ui?.linkTrailingIcon
                  })
                "
              />
            </slot>
          </Link>

          <span
            v-else
            data-slot="link"
            :class="
              getItemUi(item, index).link({
                class: [props.ui?.link, item.class]
              })
            "
          >
            <slot name="item-leading" :item="item" :index="index">
              <UAvatar
                v-if="item.avatar"
                v-bind="item.avatar"
                size="3xs"
                data-slot="link-leading-avatar"
                :class="
                  getItemUi(item, index).linkLeadingAvatar({
                    class: props.ui?.linkLeadingAvatar
                  })
                "
              />
              <Icon
                v-else-if="item.icon"
                :name="item.icon"
                data-slot="link-leading-icon"
                :class="
                  getItemUi(item, index).linkLeadingIcon({
                    class: props.ui?.linkLeadingIcon
                  })
                "
              />
            </slot>

            <slot name="item-label" :item="item" :index="index">
              <span
                data-slot="link-label"
                :class="
                  getItemUi(item, index).linkLabel({
                    class: props.ui?.linkLabel
                  })
                "
              >
                {{ getItemLabel(item) }}
              </span>
            </slot>

            <slot name="item-trailing" :item="item" :index="index">
              <Icon
                v-if="item.trailingIcon"
                :name="item.trailingIcon"
                data-slot="link-trailing-icon"
                :class="
                  getItemUi(item, index).linkTrailingIcon({
                    class: props.ui?.linkTrailingIcon
                  })
                "
              />
            </slot>
          </span>
        </slot>

        <slot v-if="index < items.length - 1" name="separator">
          <div
            data-slot="separator"
            :class="breadcrumbTheme().separator({ class: props.ui?.separator })"
          >
            <Icon
              :name="separatorIcon"
              data-slot="separator-icon"
              :class="
                breadcrumbTheme().separatorIcon({
                  class: props.ui?.separatorIcon
                })
              "
            />
          </div>
        </slot>
      </li>
    </ol>
  </Primitive>
</template>
