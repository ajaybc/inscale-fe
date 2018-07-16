import React from 'react';
import Container from "../Container";

import './style.css';

export default ({children}) => {
  return <div className="PageBody">
    <Container>
      {children}
    </Container>
  </div>
} 