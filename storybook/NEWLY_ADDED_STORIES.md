# Newly Added Storybook Stories

This document lists all the new component stories that were added to the Storybook.

## Summary

- **Previous Story Count**: 40
- **New Story Count**: 60
- **Stories Added**: 20+

## New Stories Added

### Forms Category

1. **Calendar.stories.ts** - Calendar date picker component
   - Default, Secondary, Soft variants

2. **ColorPicker.stories.ts** - Color selection component
   - Default, Small, Large, Disabled variants

3. **Slider.stories.ts** - Range slider component
   - Default, Range, WithStep, Small, Large, Disabled variants

4. **PinInput.stories.ts** - PIN code input component
   - Default, SixDigit, Masked, Soft, Disabled variants

5. **Stepper.stories.ts** - Multi-step form component
   - Default, Vertical, WithIcons variants

6. **FileUpload.stories.ts** - File upload component
   - Default, Multiple, WithAccept, Disabled, Large variants

### Data Display Category

7. **Timeline.stories.ts** - Timeline/activity feed component
   - Default, Success variants

8. **Marquee.stories.ts** - Scrolling text component
   - Default, RightDirection, Fast, Slow variants

9. **User.stories.ts** - User profile display component
   - Default, WithEmail, Small, Large, WithoutAvatar variants

10. **Tree.stories.ts** - Tree view/file explorer component
    - Default, WithIcons variants

### Layout Category

11. **Carousel.stories.ts** - Image/content carousel component
    - Default, AutoPlay variants

### Overlay Category

12. **CommandPalette.stories.ts** - Command/search palette component
    - Default, WithRecentSearches variants

### Content Category

13. **BlogPost.stories.ts** - Blog post card component
    - Default, WithoutImage, Featured variants

14. **PricingPlan.stories.ts** - Pricing plan card component
    - Basic, Popular, Enterprise, Free variants

15. **PricingTable.stories.ts** - Pricing comparison table
    - Default, Annual variants

16. **Banner.stories.ts** - Notification banner component
    - Info, Success, Warning, Error, WithButton, Dismissible variants

### Page Category

17. **PageFeature.stories.ts** - Feature showcase section
    - Default, WithImage, Vertical variants

18. **PageHero.stories.ts** - Hero section component
    - Default, WithImage, Centered variants

19. **PageCard.stories.ts** - Page content card
    - Default, WithImage, WithBadge, Primary variants

20. **PageSection.stories.ts** - Page section wrapper
    - Default, WithCTA, Highlighted variants

## Story Organization

Stories are organized into the following categories:

```
storybook/src/stories/
├── Forms/              # Form input components
├── DataDisplay/        # Components for displaying data
├── Feedback/           # User feedback components
├── Navigation/         # Navigation components
├── Layout/             # Layout and container components
├── Overlay/            # Overlay/modal components
├── Content/            # Content presentation components
└── Page/               # Page-level components
```

## Running Storybook

To view all the new stories:

```bash
cd storybook
npm install
npm run storybook
```

Then open http://localhost:6006/ in your browser.

## Component Naming

All components now use the `ui-` prefix with kebab-case naming:

- Import: `UiButton`
- Usage: `<ui-button>`

Example:
```vue
<script setup>
import { UiCalendar, UiColorPicker, UiSlider } from '@cartino/ui'
</script>

<template>
  <ui-calendar v-model="date" />
  <ui-color-picker v-model="color" />
  <ui-slider v-model="value" :min="0" :max="100" />
</template>
```

## Next Steps

Components that still need stories:
- Dashboard components (DashboardNavbar, DashboardSidebar, etc.)
- Some page components (PageColumns, PageGrid, PageList, etc.)
- Chat components (ChatMessage, ChatPalette, etc.)
- Content components (ChangelogVersion, BlogPosts, etc.)
- Advanced form components (InputTags, InputMenu, InputNumber, etc.)

These can be added as needed based on usage priority.

## Benefits

With these new stories:
1. Better component documentation
2. Visual testing environment
3. Interactive component playground
4. Accessibility testing with a11y addon
5. Easier component discovery and usage
