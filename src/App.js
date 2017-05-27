import React, { Component } from 'react';
import './App.css';
import Dial from './Dial';
import Announcements from './Announcements';
import Lunch from './Lunch';
import Taskbar from './Taskbar';
import Beartime from './Beartime';
import {
  HashRouter as Router,
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
    this.state = {announcements: null};
    fb.on('value', snapshot => {  
      this.setState({announcements: snapshot.val().masterAnnouncements});
      this.setState({Taskbar: true})
    });
    this.state = {lunch: null}
    fb.on('value', snapshot => {
      this.setState({lunch: snapshot.val().masterLunch});
    });
  } 

window.addEventListener("load",function() {
  // Set a timeout...
  setTimeout(function(){
    // Hide the address bar!
    window.scrollTo(0, 1);
  }, 0);
}); 

  render(){
    return(
        <Router>
          <div>
            <Taskbar render={() => <Taskbar tasTotal={this.state.Taskbar}/>}/>
            <Route exact path="/" component={Dial}/>
            <Route path="/beartime" component={Beartime}/>
            <Route path="/announcements" render={() => <Announcements annTotal={this.state.announcements}/>}/>
            <Route path="/lunch" render={() => <Lunch lunTotal={this.state.lunch}/>}/>
          </div>
        </Router>
    );
  }
}



export default App



