import React, { Component } from 'react';
import './App.css';
import Dial from './Dial';
import Announcements from './Announcements';
import Lunch from './Lunch';
import Taskbar from './Taskbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Here's all the stuff!</h1>
        <hr />
        <Dial />
        <Announcements />
        <Lunch />
        <Taskbar />
      </div>
    );
  }
}

export default App;
