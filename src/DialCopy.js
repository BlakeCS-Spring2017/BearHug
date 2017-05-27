import React, { Component } from 'react';
import './Dial.css';
import $ from 'jquery'; 
import moment from 'moment';
var moment = require('moment');

class Dial extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lunchSettings: [1,1,1,1,1];
        };
        
        this.monday = [{"duration":45, "end":"8:55am", "number":1, "start":"8:10am"},
            {"duration":45, "end":"9:45am", "number":2, "start":"9:00am"},
            {"duration":30, "end":"10:15am", "name":"Tutorial", "start":"9:45am"},
            {"duration":45, "end":"11:05am", "number":3, "start":"10:20am"},
            {"duration":45, "end":"12:30pm", "number":4, "start":"11:10am", "lunch":2},
            {"duration":30, "end":"11:40am", "name":"First Lunch", "start":"11:10am", "lunch":1},
            {"duration":45, "end":"12:30pm", "number":4, "start":"11:45am", "lunch":1},
            {"duration":30, "end":"12:30pm", "name":"Second Lunch", "start":"12:00pm", "lunch":2}
            {"duration":45, "end":"12:35", "number":5, "start":"1:20pm"},
            {"duration":45, "end":"2:10pm", "number":6, "start":"1:25pm"},
            {"duration":45, "end":"3:00pm", "number":7, "start":"2:15pm"}];
        this.tuesday = [];
        this.wednesday =[];
        this.thursday = [];
        this.friday = [];

        this.week = [this.monday, this.tuesday, this.wednesday, this.thursday, this.friday];
    };

    determineDay() {
        var today = moment();
        var todayDate = moment.format('YYYY-MM-DD');

        var day;

        $.getJSON("//beartime-9facf.firebaseio.com/specials/"+todayDate+".json", 
            function(data) {
                if (data != null) {
                    return data
                }
                else{
                    day = today.weekday();
                    return day
                };
            }
        );
    };

    determineDaySchedule(scheduleData) {

    };


    componentWillMount() {
        var returnDay = determineDay();
        var daySchedule;

            if (typeof(returnDay) === 'number') {
                returnDay -= 1
                if returnDay < 5 {
                    daySchedule = this.week[returnDay];
                }
                else {
                    daySchedule = "No School"   
                }
            }
            else {
                daySchedule = returnDay;
            }

        var scheduleForDial = determineDaySchedule(daySchedule);
    };



};


export default Dial;