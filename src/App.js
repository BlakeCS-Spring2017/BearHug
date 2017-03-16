import React, { Component } from 'react';
import './App.css';
import Dial from './Dial';
import Announcements from './Announcements';
import Lunch from './Lunch';
import Taskbar from './Taskbar';
import Beartime from './Beartime';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Bearhug = () => (
  <Router>
    <div>
      <Taskbar />
      <Route exact path="/" component={Dial}/>
      <Route path="/beartime" component={Beartime}/>
      <Route path="/announcements" component={Announcements}/>
      <Route path="/lunch" component={Lunch}/>
    </div>

  </Router>
)

export default Bearhug