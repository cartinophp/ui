<!-- eslint-disable vue/block-tag-newline -->

<script setup>
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { Motion, useScroll, useSpring, useTransform } from 'motion-v'
import { defu } from 'defu'
import { omit } from '../utils'
import { tv } from '../utils/tv'
import UChangelogVersion from './ChangelogVersion.vue'

const props = withDefaults(defineProps(), {
  indicator: true,
  indicatorMotion: true
})
const slots = defineSlots()

const getProxySlots = () => omit(slots, ['default', 'indicator'])

const appConfig = {}

const springOptions = computed(() => defu(typeof props.indicatorMotion === 'object' ? props.indicatorMotion : {}, { damping: 30, restDelta: 0.001 }))

const { scrollYProgress } = useScroll()
const y = useSpring(scrollYProgress, springOptions)
const height = useTransform(() => `${y.get() * 100}%`)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: tv(theme), ...(appConfig.ui?.changelogVersions || {}) })())
</script>

<template>
  <Primitive :as="as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!!props.indicator || !!slots.indicator" data-slot="indicator" :class="ui.indicator({ class: props.ui?.indicator })">
      <slot name="indicator">
        <Motion v-if="!!props.indicatorMotion" data-slot="beam" :class="ui.beam({ class: props.ui?.beam })" :style="{ height }" />
      </slot>
    </div>

    <div v-if="versions?.length || !!slots.default" data-slot="container" :class="ui.container({ class: props.ui?.container })">
      <slot>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          :indicator="!!props.indicator"
          v-bind="version"
        >
          <template v-for="(_, name) in getProxySlots()" #[name]="slotData">
            <slot :name="name" v-bind="slotData" :version="version" />
          </template>
        </UChangelogVersion>
      </slot>
    </div>
  </Primitive>
</template>
