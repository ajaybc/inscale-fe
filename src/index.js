import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './reset.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router>
  <App />
</Router>, document.getElementById('root'));
registerServiceWorker();
