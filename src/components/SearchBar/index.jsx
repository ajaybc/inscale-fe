import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

const DATE_FORMAT = 'DD/MM/Y';

export default class SearchBar extends Component {
  state = {}
  handleSearch() {

  }
  render () {
    const {startDate, endDate, query} = this.state;
    return <div className="SearchBar">
      <div className="SearchBar__left">
        <DatePicker
          className="test"
          selected={startDate}
          onChange={(d) => {
            this.setState({startDate: d});
          }}
          isClearable={true}
          placeholderText="Start-Date" 
          dateFormat={DATE_FORMAT}
        />
        <DatePicker
          selected={endDate}
          onChange={(d) => {
            this.setState({ endDate: d })
          }}
          isClearable={true}
          placeholderText="End-Date"
          dateFormat={DATE_FORMAT}
        />
      </div>
      <div className="SearchBar__right">
        <input type="text" value={query} className="SearchBar__searchField"/>
        <button className="SearchBar__searchBtn" onClick={this.handleSearch} >Search</button>
      </div>
    </div>;
  }
}