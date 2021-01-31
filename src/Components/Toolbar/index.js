import React from 'react';

import { Container } from './styles';

function Toolbar({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Toolbar;