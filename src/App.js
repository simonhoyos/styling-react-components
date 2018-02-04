import React, { Component } from 'react';

const styles = {
  box: {
    width: 100,
    height: 100,
    border: '10px solid chocolate',
    borderRadius: 10
  }
};

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={styles.box}
      />
    );
  }
}

export default App;
