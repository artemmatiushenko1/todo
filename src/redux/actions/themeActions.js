import { SET_DARK_THEME, SET_LIGHT_THEME, SET_THEME } from 'redux/types';
import { store } from 'redux/store';
import { bindActionCreators } from 'redux';

const setDarkTheme = () => {
  return {
    type: SET_DARK_THEME,
  };
};

const setLightTheme = () => {
  return {
    type: SET_LIGHT_THEME,
  };
};

const setTheme = (isDarkTheme) => {
  return {
    type: SET_THEME,
    payload: isDarkTheme,
  };
};

const boundThemeActions = bindActionCreators(
  {
    setDarkTheme,
    setLightTheme,
    setTheme,
  },
  store.dispatch
);

export default boundThemeActions;
