import { SET_THEME } from 'redux/types';

const setTheme = (isDarkTheme) => {
  return {
    type: SET_THEME,
    payload: isDarkTheme,
  };
};

export const themeActions = {
  setTheme,
};
