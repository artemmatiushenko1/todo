import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer);

//some comment for testing purposes

export const persistor = persistStore(store);
