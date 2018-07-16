import React from 'react';

import logo from '../../logo.svg';
import './style.css';

export default () => {
  return <header className="Header">
    <img src={logo} alt="Logo" className="Header__logo"/>
    <div className="Header__title">InScale Assignment</div>
  </header>
} 