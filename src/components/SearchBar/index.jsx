import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

export default class SearchBar extends Component {
  render () {
    return <div className="SearchBar">
      <div className="SearchBar__left">
        <DatePicker
          className="test"
          // selected={new Date()}
          onChange={(a, b) => {
            console.log(a,b);
          }}
          placeholderText="Start-Date" 
        />
        <DatePicker
          // selected={new Date()}
          onChange={(a, b) => {
            console.log(a, b);
          }}
          placeholderText="End-Date"
        />
      </div>
      <div className="SearchBar__right">
        <input type="text" className="SearchBar__searchField"/>
        <button className="SearchBar__searchBtn">Search</button>
      </div>
    </div>;
  }
}