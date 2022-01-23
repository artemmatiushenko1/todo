const initialState = {
  isDarkTheme: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME': {
      return { isDarkTheme: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
