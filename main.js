"use strict";
var later = require('later');
later.date.localTime();

// define a new schedule

// daily schedule
//var dailySchedule = later.parse.recur().on(10).hour().on(30).minute().on(10).second();
var dailySchedule =  later.parse.text('at 19:52:00');


// weekly schedule
//var weeklySchedule = later.parse.recur().on(0).dayOfWeek().on(5).hour().on(30).minute().on(0).second();
var weeklySchedule = later.parse.text('at 5:00 pm on Sun, Tue');

// monthly schedule
//var monthlySchedule = later.parse.on(3).dayOfMonth();
var monthlySchedule =  later.parse.text('at 5:00 pm on the 16th day of the month');

var sched = later.schedule(monthlySchedule);
//console.log(sched.isValid(new Date())); //

var start = new Date('Wed Sep 16 2015 16:53:00 GMT-0700 (PDT)');
var end = new Date('Wed Sep 16 2015 19:56:00 GMT-0700 (PDT)');

console.log(new Date());
console.log(sched.next(5, start, end));
//console.log(weeklySchedule);