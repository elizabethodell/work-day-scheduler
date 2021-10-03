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

var tasks = {};


// task text was clicked
$(".list-group").on("click", "input", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace input element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  });

  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  //checks time and adds color
  var time = moment().format('HH');

  console.log(time);

  // remove any old classes from element
  $(block).removeClass("past present future");

  // apply new class if the time is
  if (moment(time).isAfter(time-1)) {
    $(block).addClass("past");
  } 
  else if (moment(time).isSame(time)) {
    $(block).addClass("present");
  }

  else {
    $(block).addClass("future");
  }
