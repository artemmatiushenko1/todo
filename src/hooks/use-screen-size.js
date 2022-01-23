import { useState, useEffect, useCallback } from 'react';

const useScreenSize = (breakpoint) => {
  const [reachedScreen, setReachedScreen] = useState(
    window.innerWidth < breakpoint
  );

  const onScreenResizeHandler = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > breakpoint) {
      setReachedScreen(false);
      return;
    }
    setReachedScreen(true);
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener('resize', onScreenResizeHandler);
    return () => {
      window.removeEventListener('resize', onScreenResizeHandler);
    };
  }, [onScreenResizeHandler]);

  return {
    reachedScreen,
  };
};

export default useScreenSize;
