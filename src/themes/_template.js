import { tv } from 'tailwind-variants'

/**
 * Template per creare un nuovo theme component
 *
 * 1. Copia questo file e rinominalo con il nome del componente (es: button.js)
 * 2. Definisci tutti gli slots (elementi HTML del componente)
 * 3. Aggiungi le variants necessarie (size, color, variant, etc.)
 * 4. Usa compoundVariants per stili condizionali complessi
 * 5. Imposta i defaultVariants
 */

export default tv({
  // Slots: ogni elemento HTML del componente
  slots: {
    root: 'base-classes-for-root',
    // element1: 'base-classes-for-element1',
    // element2: 'base-classes-for-element2',
  },

  // Variants: diverse opzioni di stile
  variants: {
    size: {
      sm: {
        root: 'small-size-classes',
        // element1: 'small-size-classes',
      },
      md: {
        root: 'medium-size-classes',
        // element1: 'medium-size-classes',
      },
      lg: {
        root: 'large-size-classes',
        // element1: 'large-size-classes',
      }
    },

    color: {
      primary: {
        root: 'primary-color-classes'
      },
      secondary: {
        root: 'secondary-color-classes'
      }
    },

    // Variants booleane
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed'
      }
    }
  },

  // Compound Variants: stili applicati quando più variants sono attive insieme
  compoundVariants: [
    {
      size: 'sm',
      color: 'primary',
      class: {
        root: 'specific-classes-for-small-primary'
      }
    }
  ],

  // Default Variants: valori di default se non specificati
  defaultVariants: {
    size: 'md',
    color: 'primary',
    disabled: false
  }
})
