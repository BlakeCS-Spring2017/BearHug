import React, { Component } from 'react';
import './Dial.css';

class Dial extends Component {
  render() {
    return (
      <div>
        <h2>Dial</h2>
        <p>Here's the HTML for the dial!</p>

        <div id="circle">  
        	<div id="circle2"> </div> 
        </div>

        <div id="taskbar"> </div>
        
        <div className = "ViewContainer1">
        	<div id="circle">
       	 </div>
       	 </div>

       	<div className = "ViewContainer2">
       		<div id="circle2">
       		</div>
       	</div>


       	<div id="hidingCircle">
       	</div>
      </div>
    );
  }
}

export default Dial;
