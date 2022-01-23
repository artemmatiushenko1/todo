import { useEffect } from 'react';

const useTheme = (isDarkTheme) => {
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkTheme]);
};

export default useTheme;
