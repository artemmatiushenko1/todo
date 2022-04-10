import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer);

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
//  recusandae repellat nihil tempore ad cum fugiat quasi aperiam tenetur
//  omnis, alias, vel consequuntur est? Quaerat fugiat vero voluptates non asperiores.

export const persistor = persistStore(store);
