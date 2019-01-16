import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const StoreProvider = ({ children }) => (
  <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
    {children}
  </Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoreProvider;
