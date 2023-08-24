import { useRef, useEffect, useState } from 'react';

type ObserverOptions = {
  root: HTMLElement | null,
  rootMargin: string,
  threshold: number,
};

type ObserverEntry = {
  boundingClientRect: DOMRectReadOnly,
  intersectionRatio: number,
  intersectionRect: DOMRectReadOnly,
  isIntersecting: boolean,
  rootBounds: DOMRectReadOnly | null,
  target: Element,
  time: number,
};

const useIntersectionObserver = ((options: ObserverOptions) => {
  const containerRef = useRef<HTMLDivElement | HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: ObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
});

export default useIntersectionObserver;
