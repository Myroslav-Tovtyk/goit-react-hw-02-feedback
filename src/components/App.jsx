import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';

class App extends Component {
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Feedback />
      </div>
    );
  }
}
export default App;
