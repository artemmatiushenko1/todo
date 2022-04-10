import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer);

export const persistor = persistStore(store);
