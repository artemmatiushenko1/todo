import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/index';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger({
    collapsed: true,
  });

  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
