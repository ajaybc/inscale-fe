import React from 'react';
import ReactPaginate from "react-paginate";

import './style.css';

export default (props) => {
  return <div className="Pagination">
    <ReactPaginate
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      activeClassName={"active"}
      {...props}
    // onPageChange={this.handlePageClick}
  />
  </div>
} 