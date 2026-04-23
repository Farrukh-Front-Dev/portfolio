/**
 * Accessibility Utilities
 * WCAG 2.1 AA compliance helpers
 */

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Check if user prefers dark mode
 */
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Check if user prefers high contrast
 */
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: more)').matches;
}

/**
 * Generate accessible button attributes
 */
export function getAccessibleButtonAttrs(options: {
  label: string;
  disabled?: boolean;
  ariaPressed?: boolean;
  ariaExpanded?: boolean;
  ariaHasPopup?: boolean;
}) {
  return {
    'aria-label': options.label,
    'aria-disabled': options.disabled,
    'aria-pressed': options.ariaPressed,
    'aria-expanded': options.ariaExpanded,
    'aria-haspopup': options.ariaHasPopup,
  };
}

/**
 * Generate accessible link attributes
 */
export function getAccessibleLinkAttrs(options: {
  label: string;
  external?: boolean;
  current?: boolean;
}) {
  return {
    'aria-label': options.label,
    'aria-current': options.current ? 'page' : undefined,
    'rel': options.external ? 'noopener noreferrer' : undefined,
    'target': options.external ? '_blank' : undefined,
  };
}

/**
 * Generate accessible form input attributes
 */
export function getAccessibleInputAttrs(options: {
  id: string;
  label: string;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helperText?: string;
}) {
  return {
    id: options.id,
    'aria-label': options.label,
    'aria-required': options.required,
    'aria-invalid': options.invalid,
    'aria-describedby': [
      options.errorMessage ? `${options.id}-error` : '',
      options.helperText ? `${options.id}-helper` : '',
    ]
      .filter(Boolean)
      .join(' '),
  };
}

/**
 * Generate accessible heading attributes
 */
export function getAccessibleHeadingAttrs(options: {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
}) {
  return {
    id: options.id,
    role: `heading`,
    'aria-level': options.level,
  };
}

/**
 * Generate accessible list attributes
 */
export function getAccessibleListAttrs(options: {
  ordered?: boolean;
  label?: string;
}) {
  return {
    role: options.ordered ? 'list' : 'list',
    'aria-label': options.label,
  };
}

/**
 * Generate accessible navigation attributes
 */
export function getAccessibleNavAttrs(options: {
  label: string;
  current?: string;
}) {
  return {
    'aria-label': options.label,
    'aria-current': options.current ? 'page' : undefined,
  };
}

/**
 * Skip to main content link
 * Should be first focusable element on page
 */
export function SkipToMainContent() {
  return {
    className: 'sr-only focus:not-sr-only',
    href: '#main-content',
    children: 'Skip to main content',
  };
}

/**
 * Screen reader only text
 */
export function srOnly(text: string) {
  return {
    className: 'sr-only',
    children: text,
  };
}

/**
 * Announce to screen readers
 */
export function announceToScreenReader(
  message: string,
  priority: 'polite' | 'assertive' = 'polite'
) {
  if (typeof window === 'undefined') return;

  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within an element
   */
  trapFocus(element: HTMLElement) {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  },

  /**
   * Restore focus to element
   */
  restoreFocus(element: HTMLElement) {
    const previousActiveElement = document.activeElement as HTMLElement;
    element.focus();

    return () => {
      previousActiveElement?.focus();
    };
  },
};

/**
 * Color contrast checker (WCAG AA)
 */
export function checkColorContrast(
  foreground: string,
  background: string
): { ratio: number; passes: boolean } {
  const getLuminance = (color: string) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    const luminance =
      (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    return luminance <= 0.03 ? luminance + 0.05 : luminance;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);

  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  return {
    ratio: Math.round(ratio * 100) / 100,
    passes: ratio >= 4.5, // WCAG AA for normal text
  };
}
