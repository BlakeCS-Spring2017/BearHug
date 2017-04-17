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
} from 'react-router-dom'
import * as firebase from 'firebase';

const config = {
        apiKey: "AIzaSyDvOynKV6mf5BkERbfHUnedRyyLxM9kpTg",
        authDomain: "bearhug-e6890.firebaseapp.com",
        databaseURL: "https://bearhug-e6890.firebaseio.com",
        storageBucket: "bearhug-e6890.appspot.com",
        messagingSenderId: "1044694721899"
};

const fb = firebase  
  .initializeApp(config)
  .database()
  .ref();

class App extends Component{
  componentWillMount() {
    this.state = {announcements: 3};
    fb.on('value', snapshot => {  
      this.setState({announcements: snapshot.val().Announcements});
    });
  } 
  render(){
    return(
        <Router>
          <div>
            <Taskbar />
            <Route exact path="/" component={Dial}/>
            <Route path="/beartime" component={Beartime}/>
            <Route path="/announcements" render={() => <Announcements Anntotal={this.state.announcements}/>}/>
            <Route path="/lunch" component={Lunch}/>
          </div>
        </Router>
    );
  }
}


export default App


