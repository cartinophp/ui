<template>
  <div :class="textareaTheme.wrapper()" v-bind="$attrs">
    <textarea
      ref="textarea"
      :id="inputId"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :rows="rows"
      :cols="cols"
      :maxlength="maxlength"
      :minlength="minlength"
      :class="textareaTheme.root()"
      @input="onInput"
      @change="$emit('change', $event)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
      @keydown="$emit('keydown', $event)"
    />
    
    <!-- Resize handle -->
    <div v-if="resize && !disabled" :class="textareaTheme.resizeHandle()">
      <Icon name="i-lucide-grip-horizontal" :class="textareaTheme.resizeIcon()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, watch } from 'vue'
import { ui } from '../utils/ui'

export interface TextareaProps {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  name?: string
  id?: string
  rows?: number
  cols?: number
  maxlength?: number
  minlength?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'filled' | 'ghost'
  resize?: boolean
  autoresize?: boolean
}

const props = withDefaults(defineProps<TextareaProps>(), {
  rows: 4,
  size: 'md',
  variant: 'default',
  resize: true,
  autoresize: false
})

const textareaTheme = ui.textarea({
  size: props.size,
  variant: props.variant,
  resize: props.resize
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  input: [event: Event]
  change: [event: Event]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent] 
  keydown: [event: KeyboardEvent]
}>()

const textarea = ref<HTMLTextAreaElement>()

const inputId = computed(() => props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`)

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
  emit('input', event)
  
  if (props.autoresize) {
    nextTick(() => {
      autoResize()
    })
  }
}

const autoResize = () => {
  if (textarea.value && props.autoresize) {
    textarea.value.style.height = 'auto'
    textarea.value.style.height = `${textarea.value.scrollHeight}px`
  }
}

// Watch for external changes to resize
watch(() => props.modelValue, () => {
  if (props.autoresize) {
    nextTick(() => {
      autoResize()
    })
  }
})

defineExpose({
  textarea,
  focus: () => textarea.value?.focus(),
  blur: () => textarea.value?.blur(),
  autoResize
})
</script>