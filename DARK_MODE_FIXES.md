# Dark Mode Fixes

## Critical Fix: Primary Color Dark Mode Token

### Problem Identified

The `--color-primary` token was using the same value (`primary-500`) in both light and dark modes. This caused primary buttons to have the same dark background in both themes, which looked wrong and didn't adapt text contrast properly.

### Solution Applied

Changed the dark mode primary color to use a lighter shade with dark text:

```css
/* Before */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: var(--color-primary-500); /* Same as light mode! */
    --color-primary-foreground: oklch(1 0 0); /* White text */
  }
}

/* After */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: var(--color-primary-400); /* Lighter blue */
    --color-primary-foreground: var(--color-secondary-950); /* Dark text */
  }
}
```

## Component-Specific Fixes

### 1. Alert Component

**File:** `src/themes/alert.ts`

**Before:**

```typescript
error: 'bg-error-50 text-destructive border-destructive'
```

**After:**

```typescript
error: 'bg-error/10 text-error border-error/30'
```

**Pattern:** Use opacity-based backgrounds (`/10`, `/30`) with semantic color tokens that auto-adapt.

### 2. Button Component

**File:** `src/themes/button.ts`

**Changes:**

- Primary variant: Uses `bg-primary text-primary-foreground hover:bg-primary/90`
- Secondary variant: Uses `bg-card text-foreground border-border hover:bg-accent`
- Tertiary variant: Uses `text-foreground hover:bg-accent`
- Success tone: Uses `bg-success text-success-foreground`
- Error tone: Uses `bg-error text-error-foreground`

**Pattern:** All buttons now use `-foreground` tokens that automatically provide proper contrast in both light and dark modes.

### 3. Table Component

**File:** `src/themes/table.ts`

**Before:**

```typescript
stickyHeader: 'bg-white'
```

**After:**

```typescript
stickyHeader: 'bg-background'
```

**Pattern:** Use semantic background tokens instead of hardcoded colors.

## Dark Mode Color System

### Semantic Token Strategy

Our color system now follows this pattern:

**Light Mode:**

- Darker backgrounds (e.g., `primary-500`, `success-500`)
- White or light text (`white`, `secondary-50`)

**Dark Mode:**

- Lighter backgrounds (e.g., `primary-400`, `success-400`)
- Dark text (e.g., `secondary-950`, `secondary-900`)

### Foreground Token Pairs

Every semantic color has a matching foreground:

| Color Token | Light Mode    | Dark Mode     | Foreground (Light) | Foreground (Dark) |
| ----------- | ------------- | ------------- | ------------------ | ----------------- |
| `primary`   | `primary-500` | `primary-400` | White              | `secondary-950`   |
| `success`   | `success-500` | `success-400` | White              | `secondary-950`   |
| `warning`   | `warning-500` | `warning-400` | `secondary-950`    | `secondary-950`   |
| `error`     | `error-500`   | `error-400`   | White              | `secondary-950`   |
| `info`      | `info-500`    | `info-400`    | White              | `secondary-950`   |

## Best Practices for Dark Mode

### ✅ DO:

1. Use semantic tokens like `bg-primary`, `text-primary-foreground`
2. Use opacity modifiers for subtle backgrounds: `bg-error/10`, `border-error/30`
3. Use `-foreground` tokens for text on colored backgrounds
4. Use `bg-background`, `text-foreground` for neutral elements
5. Use `bg-card`, `text-card-foreground` for elevated surfaces

### ❌ DON'T:

1. Use hardcoded shades like `bg-primary-500`, `text-primary-700`
2. Use same text color in both modes without foreground tokens
3. Use `bg-white` or `bg-black` directly
4. Mix hardcoded colors with semantic tokens

## Testing Checklist

To verify dark mode works correctly for any component:

1. Open component in Storybook
2. Toggle between light and dark mode using toolbar
3. Verify:
   - [ ] Background colors adapt (darker in light, lighter in dark)
   - [ ] Text maintains proper contrast
   - [ ] Borders are visible but not harsh
   - [ ] Interactive states (hover, active, focus) work in both modes
   - [ ] Icons and other elements are visible

## Reference: Nuxt UI Comparison

Nuxt UI uses a similar approach with:

- `text-inverted` for solid buttons (always provides contrast)
- Lighter backgrounds in dark mode
- Semantic tokens that auto-adapt

Our implementation now matches this behavior with our `-foreground` token system.

## Next Steps

1. Systematically test all 43 components in Storybook
2. Compare each with Nuxt UI equivalent
3. Apply the same patterns to any components with issues
4. Document any component-specific edge cases

## Files Modified

- [x] `src/style.css` - Fixed `--color-primary` dark mode token
- [x] `src/themes/alert.ts` - Opacity-based backgrounds
- [x] `src/themes/button.ts` - All variants use foreground tokens
- [x] `src/themes/table.ts` - Semantic background tokens

## Verified Working

- [x] Badge - Already using proper patterns
- [x] Card - Using `bg-card text-card-foreground`
- [x] Input - Using semantic tokens
- [x] DataTable - All semantic tokens
- [x] Modal - Using `bg-default text-foreground`
- [x] Toast - Using opacity pattern
- [x] Drawer - Proper semantic tokens
