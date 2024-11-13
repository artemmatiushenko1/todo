import { useState, useEffect, useCallback } from 'react';

const useScreenSize = (breakpoint: number) => {
  const [matches, setMatches] = useState(window.innerWidth < breakpoint);

  const onScreenResizeHandler = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > breakpoint) {
      setMatches(false);
      return;
    }
    setMatches(true);
  }, [breakpoint]);

  useEffect(() => {
    const controller = new AbortController();

    window.addEventListener('resize', onScreenResizeHandler, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, [onScreenResizeHandler]);

  return matches;
};

export default useScreenSize;
