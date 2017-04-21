import React, { Component } from 'react';
import './Timer.css'

class Timer extends Component {
	constructor(props) {
		super(props);

		// Bind decrementTimer to 'this' to keep the right context for setState
		this.decrementTimer = this.decrementTimer.bind(this);

		this.state = {
			timeRemaining: this.props.initialTime,
		};
	}

	componentWillMount() {
		this.timer = setInterval(this.decrementTimer, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	decrementTimer() {
		var timeRemaining = this.state.timeRemaining - 1
		if (timeRemaining <= 0) {
			// Never go below zero seconds remaining
			timeRemaining = 0;
		}
		this.setState({ timeRemaining: timeRemaining });
	}

	render() {
		// Get string representation of minutes remaining, padding with 0's in front
		var minutes = Math.floor(this.state.timeRemaining / 60);
		var minutesString = "" + minutes;
		if (minutes < 10) {
			minutesString = "0" + minutes;
		}

		// Get string representation of seconds remaining, padding with 0's in front
		var seconds = this.state.timeRemaining % 60;
		var secondsString = "" + seconds;
		if (seconds < 10) {
			secondsString = "0" + seconds;
		}

		return (
			<div id="timerDiv">
				{ minutesString + ":" + secondsString }
			</div>);
	}
}

export default Timer;
