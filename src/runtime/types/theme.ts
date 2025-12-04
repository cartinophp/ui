/**
 * Theme Configuration Types
 * Defines the structure for external theme customization
 */

import type { TVConfig } from './tv'
import type { ClassValue } from 'tailwind-variants'

/**
 * Color mapping configuration
 */
export interface ColorMapping {
  primary?: string
  secondary?: string
  success?: string
  info?: string
  warning?: string
  error?: string
  neutral?: string
  [key: string]: string | undefined
}

/**
 * Icon configuration
 */
export interface IconConfig {
  // Loading & States
  loading?: string
  check?: string
  close?: string
  info?: string
  success?: string
  warning?: string
  error?: string

  // Navigation
  chevronDown?: string
  chevronUp?: string
  chevronLeft?: string
  chevronRight?: string
  chevronDoubleLeft?: string
  chevronDoubleRight?: string

  // Actions
  search?: string
  filter?: string
  sort?: string
  add?: string
  remove?: string
  edit?: string
  delete?: string

  // Custom icons
  [key: string]: string | undefined
}

/**
 * Component theme override structure
 */
export interface ComponentTheme {
  slots?: Record<string, ClassValue>
  variants?: Record<string, Record<string, any>>
  compoundVariants?: Array<Record<string, any>>
  defaultVariants?: Record<string, any>
}

/**
 * Complete theme configuration
 */
export interface ThemeConfig {
  /** Component name prefix */
  prefix?: string

  /** Enable/disable transitions globally */
  transitions?: boolean

  /** Color mapping */
  colors?: ColorMapping

  /** Icon configuration */
  icons?: IconConfig

  /** Component-specific theme overrides */
  components?: {
    [componentName: string]: ComponentTheme
  }

  /** Tailwind merge configuration */
  twMerge?: {
    prefix?: string
    classGroups?: Record<string, any>
  }
}

/**
 * Theme preset type
 */
export interface ThemePreset extends ThemeConfig {
  name: string
  description?: string
}

/**
 * Runtime theme state
 */
export interface ThemeState {
  current: ThemeConfig
  presets: Map<string, ThemePreset>
  setTheme: (config: Partial<ThemeConfig>) => void
  usePreset: (name: string) => void
  getComponentTheme: (componentName: string) => ComponentTheme | undefined
}
