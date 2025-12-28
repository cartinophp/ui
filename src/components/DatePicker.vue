<script setup lang="ts">
  import { computed, ref, watch, onMounted, onUnmounted, toRefs } from 'vue'
  import theme from '@/themes/date-picker'
  import Icon from './Icon.vue'
  
  const props = withDefaults(defineProps<{
    modelValue?: Date | string | { start: Date | string | null; end: Date | string | null } | null
    defaultValue?: Date | string | { start: Date | string | null; end: Date | string | null } | null
    size?: 'sm' | 'md' | 'lg'
    variant?: 'outline' | 'filled' | 'ghost' | 'soft' | 'none'
    color?: 'primary' | 'error' | 'success' | 'warning' | 'info'
    leadingIcon?: string
    trailingIcon?: string
    separatorIcon?: string
    leading?: boolean
    trailing?: boolean
    loading?: boolean
    autofocus?: boolean
    autofocusDelay?: number
    range?: boolean
    disabled?: boolean
    minValue?: Date | string
    maxValue?: Date | string
    placeholder?: string
    class?: any
    ui?: Record<string, any>
  }>(), {
    size: 'md',
    variant: 'outline',
    color: 'primary',
    trailingIcon: 'solar:calendar-linear',
    separatorIcon: 'solar:minus-linear',
    autofocusDelay: 0,
    range: false,
    placeholder: 'Select date...',
    modelValue: null,
    defaultValue: null,
    disabled: false
  })
  
  // Destructure props reactively
  const {
    modelValue,
    size,
    variant,
    color,
    trailingIcon,
    leadingIcon,
    separatorIcon,
    leading,
    trailing,
    loading,
    range,
    disabled
  } = toRefs(props)
  
  const emits = defineEmits<{
    'update:modelValue': [value: typeof modelValue.value]
    change: [event: Event]
    blur: [event: FocusEvent]
    focus: [event: FocusEvent]
  }>()
  
  /* -------------------- Theme -------------------- */
  const datePickerTheme = computed(() =>
    theme({
      size: size.value,
      variant: variant.value,
      color: color.value,
      disabled: disabled.value,
      leading: leading.value || !!leadingIcon.value,
      trailing: trailing.value || !!trailingIcon.value || loading.value,
      range: range.value
    })
  )
  
  /* -------------------- State -------------------- */
  const isMobile = ref(false)
  const displayValue = ref('')
  const displayStartValue = ref('')
  const displayEndValue = ref('')
  
  const containerRef = ref<HTMLElement | null>(null)
  const singleDateInputRef = ref<HTMLInputElement | null>(null)
  const startDateInputRef = ref<HTMLInputElement | null>(null)
  const endDateInputRef = ref<HTMLInputElement | null>(null)
  
  /* -------------------- Utils -------------------- */
  function toDate(value: Date | string | null | undefined): Date | null {
    if (!value) return null
    const d = new Date(value)
    return isNaN(d.getTime()) ? null : d
  }
  
  function formatDate(value: Date | string | null | undefined): string {
    const d = toDate(value)
    return d
      ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      : ''
  }
  
  /* -------------------- Display -------------------- */
  function updateDisplay() {
    if (range.value) {
      const v = modelValue.value as { start?: Date | string; end?: Date | string } | null
      displayStartValue.value = formatDate(v?.start)
      displayEndValue.value = formatDate(v?.end)
    } else {
      displayValue.value = formatDate(modelValue.value as Date | string | null)
    }
  }
  
  /* -------------------- Emitters -------------------- */
  function emitUpdate(value: typeof modelValue.value) {
    emits('update:modelValue', value)
    emits('change', new Event('change'))
    updateDisplay()
  }
  
  function onSingleChange(e: Event) {
    const val = (e.target as HTMLInputElement).valueAsDate
    emitUpdate(val)
  }
  
  function onStartChange(e: Event) {
    const v = modelValue.value as { start?: Date | string; end?: Date | string } | null
    emitUpdate({
      start: (e.target as HTMLInputElement).valueAsDate,
      end: v?.end ?? null
    })
  }
  
  function onEndChange(e: Event) {
    const v = modelValue.value as { start?: Date | string; end?: Date | string } | null
    emitUpdate({
      start: v?.start ?? null,
      end: (e.target as HTMLInputElement).valueAsDate
    })
  }
  
  /* -------------------- Picker Logic -------------------- */
  function cleanup(el: HTMLInputElement) {
    document.body.contains(el) && document.body.removeChild(el)
  }
  
  function triggerDatePicker(type: 'single' | 'start' | 'end' = 'single') {
    if (disabled.value || !containerRef.value) return
  
    const rect = containerRef.value.getBoundingClientRect()
    const input = document.createElement('input')
    input.type = 'date'
  
    let refInput: HTMLInputElement | null = null
    let onChange: (e: Event) => void
    let left = rect.left
    let width = rect.width
  
    if (type === 'single') {
      refInput = singleDateInputRef.value
      onChange = onSingleChange
    } else if (type === 'start') {
      refInput = startDateInputRef.value
      onChange = onStartChange
      width = rect.width / 2
    } else {
      refInput = endDateInputRef.value
      onChange = onEndChange
      left = rect.left + rect.width * 0.6
      width = rect.width * 0.4
    }
  
    input.value = refInput?.value || ''
    input.min = refInput?.min || ''
    input.max = refInput?.max || ''
  
    Object.assign(input.style, {
      position: 'fixed',
      top: `${rect.top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${rect.height}px`,
      opacity: '0',
      zIndex: '9999',
      pointerEvents: 'none'
    })
  
    input.onchange = (e) => {
      onChange(e)
      cleanup(input)
    }
  
    input.onblur = () => setTimeout(() => cleanup(input), 100)
  
    document.body.appendChild(input)
  
    setTimeout(() => {
      input.focus()
      if (typeof (input as any).showPicker === 'function') (input as any).showPicker()
      else input.click()
    }, 50)
  }
  
  /* -------------------- Lifecycle -------------------- */
  function handleResize() {
    isMobile.value = window.innerWidth < 640
  }
  
  onMounted(() => {
    handleResize()
    updateDisplay()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  
  watch(() => modelValue.value, updateDisplay, { deep: true })
  watch(() => range.value, updateDisplay)
  </script>  
  
 
  <template>
    <div ref="containerRef" :class="datePickerTheme.base()">
  
      <!-- SINGLE -->
      <button
        v-if="!props.range"
        type="button"
        :class="datePickerTheme.segment()"
        :disabled="props.disabled"
        aria-haspopup="dialog"
        aria-controls="datepicker-single"
        @click="triggerDatePicker('single')"
      >
        <span v-if="displayValue">{{ displayValue }}</span>
        <span v-else class="placeholder">{{ props.placeholder }}</span>
      </button>
  
      <!-- RANGE -->
      <div v-else class="range-wrapper">
        <button
          type="button"
          :class="datePickerTheme.segment()"
          :disabled="props.disabled"
          aria-haspopup="dialog"
          aria-controls="datepicker-start"
          @click="triggerDatePicker('start')"
        >
          <span v-if="displayStartValue">{{ displayStartValue }}</span>
          <span v-else class="placeholder">Start date</span>
        </button>
  
        <Icon :name="separatorIcon" />
  
        <button
          type="button"
          :class="datePickerTheme.segment()"
          :disabled="props.disabled"
          aria-haspopup="dialog"
          aria-controls="datepicker-end"
          @click="triggerDatePicker('end')"
        >
          <span v-if="displayEndValue">{{ displayEndValue }}</span>
          <span v-else class="placeholder">End date</span>
        </button>
      </div>
  
      <!-- Accessible native inputs -->
      <input
        id="datepicker-single"
        ref="singleDateInputRef"
        type="date"
        class="sr-only"
        aria-label="Select date"
      />
  
      <input
        id="datepicker-start"
        ref="startDateInputRef"
        type="date"
        class="sr-only"
        aria-label="Select start date"
      />
  
      <input
        id="datepicker-end"
        ref="endDateInputRef"
        type="date"
        class="sr-only"
        aria-label="Select end date"
      />
    </div>
  </template>  