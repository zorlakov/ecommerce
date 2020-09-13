import { createStore, applyMiddleware } from 'redux';
// Middleware is added so when actions are fired we can
// catch & display them
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
