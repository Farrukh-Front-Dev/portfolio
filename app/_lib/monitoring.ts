/**
 * Web Vitals and Performance Monitoring
 * Tracks Core Web Vitals and sends to monitoring service
 */

export interface WebVitalsMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

/**
 * Initialize Web Vitals monitoring
 * Tracks: LCP, FID, CLS, FCP, TTFB
 */
export function initializeWebVitals() {
  if (typeof window === 'undefined') return;

  try {
    // Dynamically import web-vitals to avoid bundle bloat
    import('web-vitals').then((module) => {
      const { onCLS, onFCP, onINP, onLCP, onTTFB } = module;
      
      // Cumulative Layout Shift
      onCLS((metric: any) => reportWebVital(metric));

      // Interaction to Next Paint (replaces FID)
      onINP((metric: any) => reportWebVital(metric));

      // First Contentful Paint
      onFCP((metric: any) => reportWebVital(metric));

      // Largest Contentful Paint
      onLCP((metric: any) => reportWebVital(metric));

      // Time to First Byte
      onTTFB((metric: any) => reportWebVital(metric));
    }).catch((err) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to load web-vitals:', err);
      }
    });
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Web Vitals monitoring not available:', err);
    }
  }
}

/**
 * Report Web Vital metric
 * @param metric - Web Vital metric
 */
function reportWebVital(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`${metric.name}:`, {
      value: metric.value.toFixed(2),
      rating: metric.rating,
      delta: metric.delta.toFixed(2),
    });
  }

  // Send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_category: 'web_vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to custom monitoring endpoint
  if (process.env.NEXT_PUBLIC_MONITORING_ENDPOINT) {
    navigator.sendBeacon(
      process.env.NEXT_PUBLIC_MONITORING_ENDPOINT,
      JSON.stringify({
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      })
    );
  }
}

/**
 * Track custom performance metric
 * @param name - Metric name
 * @param value - Metric value
 * @param metadata - Additional metadata
 */
export function trackPerformanceMetric(
  name: string,
  value: number,
  metadata?: Record<string, any>
) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance: ${name}`, { value, ...metadata });
  }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'performance_metric', {
      metric_name: name,
      metric_value: value,
      ...metadata,
    });
  }
}

/**
 * Track error event
 * @param error - Error object
 * @param context - Error context
 */
export function trackError(error: Error, context?: Record<string, any>) {
  console.error('Error tracked:', error, context);

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      ...context,
    });
  }

  // Send to error tracking service (Sentry, etc.)
  if (process.env.NEXT_PUBLIC_ERROR_TRACKING_ENDPOINT) {
    navigator.sendBeacon(
      process.env.NEXT_PUBLIC_ERROR_TRACKING_ENDPOINT,
      JSON.stringify({
        error: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      })
    );
  }
}

/**
 * Track user interaction
 * @param action - Action name
 * @param category - Action category
 * @param label - Action label
 * @param value - Action value
 */
export function trackUserInteraction(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}
