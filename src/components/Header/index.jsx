import React from 'react';
import {Link} from 'react-router-dom';

import Container from "../Container";

import logo from '../../logo.svg';
import './style.css';

export default () => {
  return <header className="Header">
    <Container>
      <Link to="/">
        <img src={logo} alt="Logo" className="Header__logo"/>
        <div className="Header__title">InScale Assignment</div>
      </Link>
    </Container>
  </header>
} 