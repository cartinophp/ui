<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { computed, useTemplateRef } from 'vue'
import { useForwardProps } from 'reka-ui'
import { defu } from 'defu'
import { reactivePick } from '@vueuse/core'
import { useAppConfig, useColorMode, defineShortcuts } from '#imports'
import { useContentSearch } from '../../composables/useContentSearch'
import { useLocale } from '../../composables/useLocale'
import { omit, transformUI } from '../../utils'
import { tv } from '../../utils/tv'
import UModal from '../Modal.vue'
import UCommandPalette from '../CommandPalette.vue'

const props = withDefaults(defineProps(), {
  shortcut: 'meta_k',
  colorMode: true,
  close: true,
  fullscreen: false
})
const slots = defineSlots()

const searchTerm = defineModel('searchTerm', { default: '' })

const { t } = useLocale()
const { open, mapNavigationItems, postFilter } = useContentSearch()
// eslint-disable-next-line vue/no-dupe-keys
const colorMode = useColorMode()
const appConfig = useAppConfig()

const commandPaletteProps = useForwardProps(reactivePick(props, 'icon', 'placeholder', 'autofocus', 'loading', 'loadingIcon', 'close', 'closeIcon'))
const modalProps = useForwardProps(reactivePick(props, 'overlay', 'transition', 'content', 'dismissible', 'fullscreen', 'modal', 'portal'))

const getProxySlots = () => omit(slots, ['content'])

const fuse = computed(() => defu({}, props.fuse, {
  fuseOptions: {
    includeMatches: true
  }
}))

const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.contentSearch || {}) })({
  fullscreen: props.fullscreen
}))

const commandPaletteRef = useTemplateRef('commandPaletteRef')

const mappedLinksItems = computed(() => {
  if (!props.links?.length) {
    return []
  }

  return props.links.flatMap(link => [{
    ...link,
    suffix: link.description,
    description: undefined,
    icon: link.icon || appConfig.ui.icons.file,
    children: undefined
  }, ...(link.children?.map(child => ({
    ...child,
    prefix: link.label + ' >',
    suffix: child.description,
    description: undefined,
    icon: child.icon || link.icon || appConfig.ui.icons.file
  })) || [])])
})

const mappedNavigationGroups = computed(() => {
  if (!props.navigation?.length) {
    return []
  }

  if (props.navigation.some(link => !!link.children?.length)) {
    return props.navigation.map(group => ({
      id: group.path,
      label: group.title,
      items: mapNavigationItems(group.children || [], props.files || []),
      postFilter
    }))
  } else {
    return [{ id: 'docs', items: mapNavigationItems(props.navigation, props.files || []), postFilter }]
  }
})

const themeGroup = computed(() => {
  if (!props.colorMode || colorMode?.forced) {
    return null
  }

  return {
    id: 'theme',
    label: t('contentSearch.theme'),
    items: [{
      label: t('colorMode.system'),
      icon: appConfig.ui.icons.system,
      active: colorMode.preference === 'system',
      onSelect: () => {
        colorMode.preference = 'system'
      }
    }, {
      label: t('colorMode.light'),
      icon: appConfig.ui.icons.light,
      active: colorMode.preference === 'light',
      onSelect: () => {
        colorMode.preference = 'light'
      }
    }, {
      label: t('colorMode.dark'),
      icon: appConfig.ui.icons.dark,
      active: colorMode.preference === 'dark',
      onSelect: () => {
        colorMode.preference = 'dark'
      }
    }]
  }
})

const groups = computed(() => {
  const groups = []

  if (mappedLinksItems.value.length) {
    groups.push({ id: 'links', label: t('contentSearch.links'), items: mappedLinksItems.value })
  }

  groups.push(...mappedNavigationGroups.value)

  groups.push(...(props.groups || []))

  if (themeGroup.value) {
    groups.push(themeGroup.value)
  }

  return groups
})

function onSelect(item) {
  if (item.disabled) {
    return
  }

  // Close modal on select
  open.value = false
  // Reset search term on select
  searchTerm.value = ''
}

defineShortcuts({
  [props.shortcut]: {
    usingInput: true,
    handler: () => open.value = !open.value
  }
})

defineExpose({
  commandPaletteRef
})
</script>

<template>
  <UModal
    v-model:open="open"
    :title="title || t('contentSearch.title')"
    :description="description || t('contentSearch.description')"
    v-bind="modalProps"
    data-slot="modal"
    :class="ui.modal({ class: [props.ui?.modal, props.class] })"
  >
    <template #content="contentData">
      <slot name="content" v-bind="contentData">
        <UCommandPalette
          ref="commandPaletteRef"
          v-model:search-term="searchTerm"
          v-bind="commandPaletteProps"
          :groups="groups"
          :fuse="fuse"
          :ui="transformUI(omit(ui, ['modal']), props.ui)"
          @update:model-value="onSelect"
          @update:open="open = $event"
        >
          <template v-for="(_, name) in getProxySlots()" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </UCommandPalette>
      </slot>
    </template>
  </UModal>
</template>
