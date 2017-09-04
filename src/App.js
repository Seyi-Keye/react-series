import React, { Component } from 'react';
import './App.css';
import { TimerDashboard } from './components/TimerDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1
          style={{
            textAlign: 'center',
            color: 'skyblue',
            fontFamily: 'Lucida Sans',
            }}
        >Timers</h1>
        <hr/>
        <TimerDashboard />
      </div>
    );
  }
}

export default App;
