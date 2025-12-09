<script setup>
import { computed } from 'vue'
import { defu } from 'defu'
import { useForwardProps } from 'reka-ui'
import { reactiveOmit } from '@vueuse/core'
import { usePage } from '@inertiajs/vue3'
import { hasProtocol } from 'ufo'
import { useAppConfig } from '#imports'
import { tv } from '../../utils/tv'
import { mergeClasses } from '../../utils'
import ULinkBase from '../../components/LinkBase.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps(), {
  as: 'button',
  type: 'button',
  ariaCurrentValue: 'page',
  active: undefined
})
defineSlots()

const page = usePage()

const appConfig = useAppConfig()

const routerLinkProps = useForwardProps(reactiveOmit(props, 'as', 'type', 'disabled', 'active', 'exact', 'activeClass', 'inactiveClass', 'to', 'href', 'raw', 'custom', 'class', 'noRel'))

const ui = computed(() => tv({
  extend: tv(theme),
  ...defu({
    variants: {
      active: {
        true: mergeClasses(appConfig.ui?.link?.variants?.active?.true, props.activeClass),
        false: mergeClasses(appConfig.ui?.link?.variants?.active?.false, props.inactiveClass)
      }
    }
  }, appConfig.ui?.link || {})
}))

const href = computed(() => props.to ?? props.href)

const isExternal = computed(() => {
  if (props.target === '_blank') {
    return true
  }

  if (props.external) {
    return true
  }

  if (!href.value) {
    return false
  }

  return typeof href.value === 'string' && hasProtocol(href.value, { acceptRelative: true })
})

const hasTarget = computed(() => !!props.target && props.target !== '_self')

const rel = computed(() => {
  // If noRel is explicitly set, return null
  if (props.noRel) {
    return null
  }

  // If rel is explicitly set, use it
  if (props.rel !== undefined) {
    return props.rel || null
  }

  // Default to "noopener noreferrer" for external links or links with target
  if (isExternal.value || hasTarget.value) {
    return 'noopener noreferrer'
  }

  return null
})

const isLinkActive = computed(() => {
  if (props.active !== undefined) {
    return props.active
  }

  if (!href.value) {
    return false
  }

  if (props.exact && page.url === href.value) {
    return true
  }

  if (!props.exact && page.url.startsWith(href.value)) {
    return true
  }

  return false
})

const linkClass = computed(() => {
  const active = isLinkActive.value

  if (props.raw) {
    return [props.class, active ? props.activeClass : props.inactiveClass]
  }

  return ui.value({ class: props.class, active, disabled: props.disabled })
})
</script>

<template>
  <template v-if="custom">
    <slot
      v-bind="{
        ...$attrs,
        ...routerLinkProps,
        as,
        type,
        disabled,
        href,
        rel,
        target,
        active: isLinkActive,
        isExternal
      }"
    />
  </template>
  <ULinkBase
    v-else
    v-bind="{
      ...$attrs,
      ...routerLinkProps,
      as,
      type,
      disabled,
      href,
      rel,
      target,
      isExternal
    }"
    :class="linkClass"
  >
    <slot :active="isLinkActive" />
  </ULinkBase>
</template>
