import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';

const enhancers = [];
if (__IS_DEV__) { // eslint-disable-line
  const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
  if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
    enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const initialState = window.INITIAL_STATE
  ? window.INITIAL_STATE
  : {};

const axiosIntance = axios.create({
  baseURL: '/api',
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk.withExtraArgument(axiosIntance)), ...enhancers)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
