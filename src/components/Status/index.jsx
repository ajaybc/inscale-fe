import React, {Fragment} from 'react';

import './style.css';

//TODO: Check status and display color accordingly
export default ({children}) => {
  return <Fragment>
    <div className={`Status__status Status__status--active`}></div> Active
  </Fragment>
} 