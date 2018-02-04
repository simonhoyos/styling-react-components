import React, { Component } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid chocolate;
  border-radius: 10px;
`;

class App extends Component {
  render() {
    return (
      <Box />
    );
  }
}

export default App;
