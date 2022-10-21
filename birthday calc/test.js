let dob='2022-10-21'
// let year = dob.split('-')[0];
// let month = dob.split('-')[1];
// let day = dob.split('-')[2];
// let CC = year.slice(0,2);
// let YY = year.slice(-2);
// let MM = month;
// let DD = day;
// console.log (MM);

// const dayofTheWeek = dob.getDay();

// console.log(dayofTheWeek);


// var dt = new Date("December 26, 1995 23:15:00");
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var now = new Date('21/10/2022');
// var dt = (days[now.getDay()] + ' ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear()); //Tuesday February 12 2013
// console.log("getDay() : " + dt.getDay() ); 


var dateOfWeek = new Date(dob);
var day = dateOfWeek.getDay();
console.log(day);