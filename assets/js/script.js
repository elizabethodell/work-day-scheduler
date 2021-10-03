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


  //check the current time and then add add color depending on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');
    console.log(currentTime)

    //get all elements with class "taskarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass("present past future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}
checkTime();