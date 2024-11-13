import { SET_THEME } from '../../redux/types';

const setTheme = (isDarkTheme: boolean) => {
  return {
    type: SET_THEME,
    payload: isDarkTheme,
  };
};

export type ThemeActions = ReturnType<typeof setTheme>;

export const themeActions = {
  setTheme,
};
