import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  HashRouter as Router,
} from "react-router-dom";

import './reset.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })) || compose;
/* eslint-enable */
const store = createStore(
  combineReducers({
    ...reducers
  }), 
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
