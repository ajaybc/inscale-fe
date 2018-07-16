import React, { Component } from 'react';
import {
  Route
} from "react-router-dom";

import Campaigns from './pages/Campaigns';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-body">
          <Route exact path="/" component={Campaigns}/>
        </div>
      </div>
    );
  }
}

export default App;
