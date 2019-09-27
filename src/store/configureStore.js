// configureStore.js

import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = [];
  middleware.push(logger);
  const composedEnhancers = compose(
    applyMiddleware(...middleware)
  );
  return createStore(rootReducer, initialState, composedEnhancers);
}