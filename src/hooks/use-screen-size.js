import { useState, useEffect, useCallback } from 'react';

const useScreenSize = (breakpoint) => {
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
    window.addEventListener('resize', onScreenResizeHandler);
    return () => {
      window.removeEventListener('resize', onScreenResizeHandler);
    };
  }, [onScreenResizeHandler]);

  return matches;
};

export default useScreenSize;
