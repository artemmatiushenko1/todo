import { SET_THEME } from 'redux/types';
import { store } from 'redux/store';
import { bindActionCreators } from 'redux';

const setTheme = (isDarkTheme) => {
  return {
    type: SET_THEME,
    payload: isDarkTheme,
  };
};

const boundThemeActions = bindActionCreators(
  {
    setTheme,
  },
  store.dispatch
);

export default boundThemeActions;
