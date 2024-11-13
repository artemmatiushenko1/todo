import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/index';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
