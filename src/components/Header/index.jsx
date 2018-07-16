import React from 'react';
import Container from "../Container";

import logo from '../../logo.svg';
import './style.css';

export default () => {
  return <header className="Header">
    <Container>
      <img src={logo} alt="Logo" className="Header__logo"/>
      <div className="Header__title">InScale Assignment</div>
    </Container>
  </header>
} 