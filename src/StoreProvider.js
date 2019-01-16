import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const StoreProvider = ({ children }) => (
  <Provider
    store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))}
  >
    {children}
  </Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
