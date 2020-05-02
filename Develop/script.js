
$(document).ready(function () {
  var today = moment().format('dddd, MMMM Do');
  var currentHour = parseInt(moment().format("HH"));

  // load day at top of page
  $("#currentDay").text(today);

  // fill in times from 6AM to 6PM

  var workDay = 24;

  // Create Time Blocks
  function loadTimes() {
    for (var i = 0; i < workDay + 1; i++) {
      // Get hour 
      var hour = moment().hour(6);
      hour = hour.add(i, 'h')

      var hourString = hour.format("hA");
      var hourNum = parseInt(hour.format("HH"));

      var ppf = ""

      // Create an if statement that checks if current hour is past, present, future

      if (currentHour > hourNum){
        ppf = "past"
      } 
      if (currentHour < hourNum) {
        ppf = "future"
      } 
      if (currentHour === hourNum) {
        ppf = "present"
      }


      // Create hour El 
      var rowEl = $("<div>").addClass("row time-block");
      var hourEl = $("<div>").addClass("col-1 hour").text(hourString).css("vertical-align", "middle");
      // will need to dynamically fill past or future *** 
      var textEl = $("<textarea>").addClass("col-10 description " + ppf);
      var buttonEl = $("<button>").addClass("col-1 saveBtn d-flex justify-content-center").append($("<i>").addClass("fas fa-save"));

      // Append Elements
      $("#time-container").append(rowEl.append(hourEl, textEl, buttonEl));
    }
  }

  loadTimes();











});


// dynamically add classes to times (past, present, future)
// save newly inputed information
// localStorage saved info
