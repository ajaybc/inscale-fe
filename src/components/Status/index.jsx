import React, {Fragment} from 'react';
import moment from 'moment';

import './style.css';

const today = moment();

//TODO: Check status and display color accordingly
export default ({startDate, endDate}) => {
  const status = (startDate < today && today < endDate)?'active':'inactive';
  return <Fragment>
    <div className={`Status__status Status__status--${status}`}></div> {status}
  </Fragment>
} 