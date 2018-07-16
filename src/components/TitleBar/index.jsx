import React from 'react';
import Container from "../Container";

import './style.css';

export default ({title, summary}) => {
  return <div className="TitleBar">
    <Container>
      <h1 className="TitleBar__title">{title}</h1>
      <div className="TitleBar__summary">{summary}</div>
    </Container>
  </div>
} 