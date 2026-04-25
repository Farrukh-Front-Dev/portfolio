# Reusable Components Analysis

## ✅ Reusable Components (Can be used in other projects)

### UI Components
1. **ToggleButton** (`app/(site)/_components/ui/ToggleButton.tsx`)
   - Theme toggle with liquid glass effect
   - Fully generic, no portfolio-specific logic
   - Props: None (uses ThemeContext)
   - Reusability: **HIGH** ⭐⭐⭐⭐⭐

2. **MagnifierCursor** (`app/(site)/_components/ui/MagnifierCursor.tsx`)
   - Custom cursor with magnifier effect
   - Desktop-only, no portfolio-specific logic
   - Props: None
   - Reusability: **HIGH** ⭐⭐⭐⭐⭐

### Effects Components
3. **Particles** (`app/(site)/_components/effects/Particles.tsx`)
   - WebGL particle system with full customization
   - Highly configurable with 12+ props
   - Props: particleCount, particleSpread, speed, particleColors, moveParticlesOnHover, etc.
   - Reusability: **VERY HIGH** ⭐⭐⭐⭐⭐

4. **LightRays** (`app/(site)/_components/effects/LightRays.tsx`)
   - WebGL light rays effect with full customization
   - Highly configurable with 13+ props
   - Props: raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, etc.
   - Reusability: **VERY HIGH** ⭐⭐⭐⭐⭐

### Common Components
5. **FlipCard** (`app/(site)/_components/common/FlipCard.tsx`)
   - 3D flip card animation component
   - Generic flip animation logic
   - Props: name, setName, onSubmit
   - Reusability: **MEDIUM** ⭐⭐⭐ (specific to visitor input use case)

6. **BackCard** (`app/(site)/_components/common/BackCard.tsx`)
   - Form input card with submit button
   - Generic form component
   - Props: name, setName, onSubmit
   - Reusability: **MEDIUM** ⭐⭐⭐ (could be generalized)

7. **FrontCard** (`app/(site)/_components/common/FrontCard.tsx`)
   - Static welcome card
   - Portfolio-specific content
   - Props: None
   - Reusability: **LOW** ⭐ (portfolio-specific)

### Feature Components
8. **CTAButton** (`app/(site)/_components/features/hero/CTAButton.tsx`)
   - Call-to-action button with glass effect
   - Generic button component
   - Props: href, text
   - Reusability: **HIGH** ⭐⭐⭐⭐ (uses GlassSurface)

9. **SidebarItem** (`app/(site)/_components/features/sidebar/SidebarItem.tsx`)
   - Navigation item with glass effect and tooltip
   - Generic navigation component
   - Props: item, activeSection, hoveredId, setHoveredId
   - Reusability: **MEDIUM** ⭐⭐⭐ (sidebar-specific)

---

## ❌ Non-Reusable Components (Portfolio-specific)

### Sections (Page-specific)
- **HeroSection** - Portfolio hero with specific content
- **AboutSection** - Portfolio about section
- **ProjectsSection** - Portfolio projects showcase
- **ContactSection** - Portfolio contact form
- **Footer** - Portfolio footer

### Features (Portfolio-specific)
- **HeroImage** - Portfolio hero image
- **HeroText** - Portfolio hero text
- **ResumeButton** - Portfolio resume download
- **ContactForm** - Portfolio contact form
- **SocialLinks** - Portfolio social links
- **Sidebar** - Portfolio navigation sidebar
- **RotatingText** - Portfolio rotating text effect

### Utilities (Portfolio-specific)
- **VisitorInput** - Portfolio visitor tracking
- **ErrorBoundary** - Generic but used for portfolio
- **ThemeContext** - Generic but used for portfolio

---

## Summary

### Most Reusable (Can copy to any project)
1. **Particles** - WebGL particle system
2. **LightRays** - WebGL light rays effect
3. **ToggleButton** - Theme toggle
4. **MagnifierCursor** - Custom cursor
5. **CTAButton** - CTA button with glass effect

### Moderately Reusable (Need minor modifications)
1. **FlipCard** - 3D flip animation
2. **BackCard** - Form input card
3. **SidebarItem** - Navigation item

### Not Reusable (Portfolio-specific)
- All section components
- All page-specific features
- Visitor tracking system
- Portfolio content components

---

## Recommendation

If you want to create a **component library**, focus on:
1. **Particles** - Most valuable
2. **LightRays** - Most valuable
3. **ToggleButton** - Simple but useful
4. **MagnifierCursor** - Unique effect
5. **CTAButton** - Common pattern

These 5 components could be extracted into a separate npm package for reuse across projects.
