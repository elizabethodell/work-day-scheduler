// start the current date section
//get the current date with month and day
var m_names = ["January", "February", "March", 
"April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", 
"Thursday", "Friday", "Saturday"];

var myDate = new Date();
myDate.setDate(myDate.getDate());
var currentDate = myDate.getDate();
var currentMonth = myDate.getMonth();
var currentDay  = myDate.getDay();
var currentYear = myDate.getFullYear();
var date = d_names[currentDay] + ", " + m_names[currentMonth] + " " +currentDate + ", " + currentYear

//displays and adds the date to the top
console.log(date);
document.getElementById("currentDay").innerHTML = date;

//end of current date section
