import { createStore, applyMiddleware } from 'redux';
// Middleware is added so when actions are fired we can
// catch & display them
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
// With persist our browser can cache our store

import rootReducer from './root-reducer';

const middleWares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

//export default { store, persistor };
