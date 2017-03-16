import React, { Component } from 'react';
import './App.css';
import Dial from './Dial';
import Announcements from './Announcements';
import Lunch from './Lunch';
import Taskbar from './Taskbar';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Dial</Link></li>
        <li><Link to="/beartime">Beartime</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li><Link to="/lunch">Lunch</Link></li>
      </ul>

      <Route exact path="/" component={Dial}/>
      <Route path="/beartime" component={Beartime}/>
      <Route path="/announcements" component={Announcements}/>
      <Route path="/lunch" component={Lunch}/>
    </div>
  </Router>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bear Time Dial</h1>
        <hr />
        <Dial />
        <Announcements />
        <Lunch />
        <Taskbar />
      </div>
    );
  }
}

const Beartime = () => (
  <div>
    <h2>Beartime</h2>
  </div>
)

export default BasicExample