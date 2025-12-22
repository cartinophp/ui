UI Library Audit & Improvement Plan

Here’s a detailed review of the current state of the library and actionable steps to bring it closer to a polished, scalable system—similar to Polaris, but using a NuxtUI-style token architecture.

1. System-Level Issues

These are foundational problems affecting the entire library:

No Semantic Token System: Right now, the tailwind.config.ts just uses basic colors like primary and secondary. We need semantic tokens like color-background-interactive or color-text-critical for theming and scalability.

Inconsistent Interaction States: Focus styles and disabled states differ between components like Button and Input.

Style vs Intent: Variants currently describe appearance (outline, ghost) rather than intent (primary, critical).

Missing Core Components: Some essential components like Table, Modal, and Dropdown/Select are missing.

2. Component-by-Component Fix Plan
Button

Problems:

Variants describe style, not intent.

Loading state doesn’t disable the button.

Focus ring is the browser default blue.

Disabled state lacks sufficient contrast.

Spacing and font size aren’t tied to a global scale.

Improvements:

Switch variants to intent-based: primary, secondary, critical, plain.

Standardize interaction states (hover, focus, active, disabled).

Derive visual styles from semantic tokens.

Step-by-Step Fixes:

Study Polaris’ usage of primary, secondary, critical, and plain.

Update cva config to reflect intent-based variants.

Map colors, borders, and shadows to semantic tokens.

Fix interaction states:

Loading: auto-disable button.

Focus: use focus-visible:ring-2 with token-based colors.

Disabled: use specific token colors for contrast.

Test keyboard navigation (Tab + Enter/Space) for accessibility.

Input

Problems:

No built-in error or invalid state.

Focus ring differs from Button.

Disabled state lacks contrast.

No consistent pattern for leading/trailing icons.

Improvements:

Add an error prop with ARIA support.

Standardize focus ring to match Button.

Support icons with a clear compositional pattern.

Step-by-Step Fixes:

Add error?: boolean prop.

Style error state using tokens like border-critical-strong.

Add ARIA attributes: aria-invalid="true" and aria-describedby.

Standardize focus styles.

Refactor for icons: wrap input in a relative div, use absolute positioning for icons, adjust padding.

Badge

Problems:

Variants are named by color rather than status.

Visual weight is too heavy.

Improvements:

Switch to status-based variants: success, info, warning, critical.

Refine sizing and token usage.

Step-by-Step Fixes:

Check Polaris badges for reference.

Update cva variants to { default, success, info, warning, critical }.

Map each variant to semantic token colors (e.g., bg-success-subtle).

Adjust padding and font size for better balance.

3. Priority Matrix

Critical

Establish a semantic token system.

Implement Input error state.

Standardize all interaction states.

Important

Refactor Button to intent-based variants.

Fix Button loading/disabled behavior.

Refactor Badge to status-based variants.

Apply design tokens to spacing and shadows globally.

Nice-to-Have

Input leading/trailing icons.

Add subdued Card variant.

Scaffold missing components: Table, Modal.

4. Key Takeaways

Intent over Style: Naming variants by purpose ( critical) improves consistency and communicates meaning to users.

Tokens as Source of Truth: All colors, spacing, and shadows should come from semantic tokens; variants are just the public API.

Scalability: With intent-based APIs + token-based styling, you get consistent, maintainable, and themeable components.
