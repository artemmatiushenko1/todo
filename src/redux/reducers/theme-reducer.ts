import { SET_THEME } from '../types';
import { ThemeActions } from '../actions/themeActions';

const initialState = {
  isDarkTheme: false,
};

const themeReducer = (state = initialState, action: ThemeActions) => {
  switch (action.type) {
    case SET_THEME: {
      return { isDarkTheme: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
