import { combineReducers } from 'redux';
import themeReducer from './theme-reducer';
import todoReducer from './todo-reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  todos: todoReducer,
});

export default rootReducer;
