import { useEffect, useRef } from 'react';

const IO_OPTIONS = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' };
const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function useReveal<T extends HTMLElement = HTMLDivElement>(delay = 0) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // When a delay is requested, set the full transition here so JSX doesn't need to
    if (delay > 0) {
      el.style.transition = `opacity .8s ease ${delay}s, transform .8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`;
    }

    const show = () => { el.style.opacity = '1'; el.style.transform = 'none'; };

    if (reduced() || !('IntersectionObserver' in window)) { show(); return; }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { show(); io.disconnect(); }
    }, IO_OPTIONS);

    io.observe(el);
    const t = setTimeout(show, 4500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [delay]);

  return ref;
}

export function useDraw<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const draw = () => {
      el.querySelectorAll('path').forEach((p) => {
        (p as SVGPathElement).style.strokeDashoffset = '0';
      });
    };

    if (reduced() || !('IntersectionObserver' in window)) { draw(); return; }

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { draw(); io.disconnect(); }
    }, IO_OPTIONS);

    io.observe(el);
    const t = setTimeout(draw, 4500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return ref;
}
