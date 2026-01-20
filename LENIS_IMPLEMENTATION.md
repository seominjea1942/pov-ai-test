# Lenis Smooth Scrolling Implementation

## Overview
This project now uses **Lenis** - a lightweight, high-performance smooth scrolling library that provides a premium, silky-smooth scrolling experience similar to modern websites like Dashline.tech.

## What Was Added

### 1. **Lenis Library**
- Package: `lenis` (latest version)
- Installed via: `npm install lenis`

### 2. **SmoothScrollProvider Component**
- Location: `/src/app/components/SmoothScrollProvider.tsx`
- Wraps the entire application to enable smooth scrolling
- Configuration:
  - **Duration**: 1.2s - Controls the smoothing duration
  - **Easing**: Custom easing function for natural deceleration
  - **Orientation**: Vertical scrolling
  - **Smooth Wheel**: Enabled for mouse wheel smoothing
  - **Touch Multiplier**: 2x for touch devices

### 3. **CSS Styles**
- Location: `/src/styles/lenis.css`
- Handles edge cases like iframes, scroll prevention, and stopped states
- Automatically imported in `/src/styles/index.css`

### 4. **Integration**
- The `SmoothScrollProvider` wraps the entire app in `/src/app/App.tsx`
- Lenis classes are automatically added to the HTML element
- RequestAnimationFrame loop ensures 60fps smooth scrolling

## How It Works

Lenis intercepts native scroll events and applies smooth interpolation using:
1. **Linear Interpolation (Lerp)**: Gradually transitions between current and target scroll positions
2. **Custom Easing**: Creates natural acceleration/deceleration
3. **RAF Loop**: Updates scroll position on every frame (60fps)

## Customization

To adjust the smoothness, edit `/src/app/components/SmoothScrollProvider.tsx`:

```tsx
const lenis = new Lenis({
  duration: 1.2,        // Lower = faster, Higher = slower/smoother
  wheelMultiplier: 1,   // Adjust scroll speed (mouse wheel)
  touchMultiplier: 2,   // Adjust scroll speed (touch)
});
```

## Advanced Features

### Programmatic Scrolling
You can access the Lenis instance to scroll programmatically:

```tsx
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

// In your component
const lenisRef = useRef<Lenis | null>(null);

// Scroll to a specific position
lenisRef.current?.scrollTo(0, { duration: 2 });

// Scroll to an element
lenisRef.current?.scrollTo('#section-id', { offset: -100 });
```

### Prevent Scroll on Specific Elements
Add `data-lenis-prevent` attribute to elements that should have native scrolling:

```html
<div data-lenis-prevent>
  <!-- This will use native scrolling -->
</div>
```

## Performance

Lenis is optimized for performance:
- ✅ Lightweight (~2KB gzipped)
- ✅ 60fps smooth scrolling
- ✅ Works with your existing Spline animations
- ✅ No conflicts with CSS transforms or sticky positioning
- ✅ Accessible and respects user preferences

## Browser Support

Lenis works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Resources

- [Lenis Documentation](https://lenis.darkroom.engineering/)
- [Lenis GitHub](https://github.com/darkroomengineering/lenis)
- [Examples & Demos](https://lenis.darkroom.engineering/examples)
