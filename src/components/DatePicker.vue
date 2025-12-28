<script lang="ts">
  
  
  export interface DatePickerProps {
    modelValue?: Date | string | { start: Date | string; end: Date | string } | null
    defaultValue?: Date | string | { start: Date | string; end: Date | string } | null
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
  }
  
  export interface DatePickerEmits {
    'update:modelValue': [date: DatePickerProps['modelValue']]
    change: [event: Event]
    blur: [event: FocusEvent]
    focus: [event: FocusEvent]
  }
  </script>
  
  <script setup lang="ts">
  import {
    computed,
    ref,
    watch,
    onMounted,
    onUnmounted,
  //  useSlots
  } from 'vue'
  import theme from '@/themes/date-picker'
  import Icon from './Icon.vue'
  
  const props = withDefaults(defineProps<DatePickerProps>(), {
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
  
  const emits = defineEmits<DatePickerEmits>()
  // const slots = useSlots()
  
  /* -------------------- Theme -------------------- */
  
  const datePickerTheme = computed(() =>
    theme({
      size: props.size,
      variant: props.variant,
      color: props.color,
      disabled: props.disabled,
      leading: props.leading || !!props.leadingIcon,
      trailing: props.trailing || !!props.trailingIcon || props.loading,
      range: props.range
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
  
  function toDate(value: any): Date | null {
    const d = new Date(value)
    return isNaN(d.getTime()) ? null : d
  }
  
  function formatDate(value: any): string {
    const d = toDate(value)
    return d
      ? d.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      : ''
  }
  
  // function formatForInput(value: any): string {
  //   const d = toDate(value)
  //   if (!d) return ''
  //   return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
  //     2,
  //     '0'
  //   )}-${String(d.getDate()).padStart(2, '0')}`
  // }
  
  /* -------------------- Display -------------------- */
  
  function updateDisplay() {
    if (props.range) {
      const v = props.modelValue as any
      displayStartValue.value = formatDate(v?.start)
      displayEndValue.value = formatDate(v?.end)
    } else {
      displayValue.value = formatDate(props.modelValue)
    }
  }
  
  /* -------------------- Emitters -------------------- */
  
  function emitUpdate(value: any) {
    emits('update:modelValue', value)
    emits('change', new Event('change'))
    updateDisplay()
  }
  
  function onSingleChange(e: Event) {
    emitUpdate((e.target as HTMLInputElement).valueAsDate)
  }
  
  function onStartChange(e: Event) {
    const v = props.modelValue as any
    emitUpdate({
      start: (e.target as HTMLInputElement).valueAsDate,
      end: v?.end ?? null
    })
  }
  
  function onEndChange(e: Event) {
    const v = props.modelValue as any
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
    if (props.disabled || !containerRef.value) return
  
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
      if (input.showPicker) input.showPicker()
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
  
  watch(() => props.modelValue, updateDisplay, { deep: true })
  watch(() => props.range, updateDisplay)
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