import { combineReducers } from 'redux';
import themeReducer from './theme-reducer';
import todoReducer from './todo-reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
});

export default rootReducer;
