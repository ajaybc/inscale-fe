import React, {Component} from 'react';
// import moment from 'moment';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

const DATE_FORMAT = 'DD/MM/Y';

export default class SearchBar extends Component {
  state = {
    query: ''
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.query != prevState.query) {
  //     return { query: nextProps.query}
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.setState({query: this.props.query});
    }
  }

  handleSearch = (filters) => {
    this.props.onSearch(filters);
  }
  render () {
    const { query } = this.state;
    const { startDate, endDate } = this.props;
    return <div className="SearchBar">
      <div className="SearchBar__left">
        <DatePicker
          className="test"
          selected={startDate}
          onChange={(d) => {
            // this.setState({startDate: d});
            this.handleSearch({ query, endDate, startDate: d });
          }}
          isClearable={true}
          placeholderText="Start-Date" 
          dateFormat={DATE_FORMAT}
          maxDate={endDate}
          />
        <DatePicker
          selected={endDate}
          onChange={(d) => {
            this.handleSearch({ query, startDate, endDate: d });
          }}
          isClearable={true}
          placeholderText="End-Date"
          dateFormat={DATE_FORMAT}
          minDate={startDate}
        />
      </div>
      <div className="SearchBar__right">
        <input type="text" value={query} className="SearchBar__searchField" onChange={(e) => {this.setState({query: e.target.value})}}/>
        <button className="SearchBar__searchBtn" onClick={() => { this.handleSearch({ query, startDate, endDate })}} >Search</button>
      </div>
    </div>;
  }
}