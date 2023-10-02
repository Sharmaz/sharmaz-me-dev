import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

export default function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 1.0,
    root = null,
    rootMargin = '150px',
    freezeOnceVisible = false,
  }: Args,
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([updatedEntry]: IntersectionObserverEntry[]): void => {
    setEntry(updatedEntry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);
  }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}
