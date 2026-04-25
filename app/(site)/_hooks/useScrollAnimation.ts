import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay to ensure animations are visible
          setTimeout(() => {
            const animatedElements = element.querySelectorAll(
              "[class*='animate-fadeInUp'], [class*='animate-fadeInDown']"
            );
            
            animatedElements.forEach((el) => {
              const htmlEl = el as HTMLElement;
              // Remove animation to reset
              htmlEl.style.animation = "none";
              // Force reflow
              void htmlEl.offsetWidth;
              // Reapply animation
              htmlEl.style.animation = "";
            });
          }, 50);
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}
