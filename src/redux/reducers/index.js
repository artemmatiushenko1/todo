import { combineReducers } from 'redux';
import themeReducer from './theme-reducer';
import todoReducer from './todo-reducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['todos'],
};

const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  todos: persistReducer(todosPersistConfig, todoReducer),
  theme: themeReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
