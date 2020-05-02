
$(document).ready(function () {
  var today = moment().format('dddd, MMMM Do');
  var currentHour = parseInt(moment().format("HH"));
  var workDay = 12;
  var ppf = ""
  var savedTasks = [];

  // Initialize page: 
  // load day at top of page
  $("#currentDay").text(today);

  // Load Time Blocks
  loadTimes();

  // Create Time Blocks
  function loadTimes() {
    for (var i = 0; i < workDay + 1; i++) {
      // Get hours 
      var hour = moment().hour(6);
      hour = hour.add(i, 'h')

      var hourString = hour.format("h A");
      var hourNum = parseInt(hour.format("HH"));

      // Checks if current hour relative to hour blocks is past, present, future

      if (currentHour > hourNum){
        ppf = "past"
      } 
      if (currentHour < hourNum) {
        ppf = "future"
      } 
      if (currentHour === hourNum) {
        ppf = "present"
      }

      // Create visual componets with bootstrap styling 
      var rowEl = $("<div>").addClass("row time-block");
      var hourEl = $("<div>").addClass("pt-3 col-1 hour d-flex justify-content-center").text(hourString);
      var textEl = $("<textarea>").addClass("col-9 description " + ppf).attr("data-hour", hourString);
      var buttonEl = $("<button>").addClass("col-1 saveBtn d-flex justify-content-center").attr("data-hour", hourString).append($("<i>").addClass("fas fa-save"));

      // Append Elements
      $("#time-container").append(rowEl.append(hourEl, textEl, buttonEl));
    }
  }

  // Save inputs to localStorage on click 
  $(".saveBtn").on("click", function() {
    event.preventDefault();
    var thisHour = $(this).attr("data-hour")
    var task = $(`.description[data-hour='${thisHour}'`).val().trim();

    var hourTask = {
      saveHour: thisHour,
      saveTask: task
    }
    savedTasks.push(hourTask)
    localStorage.setItem("tasks", JSON.stringify(savedTasks))
  });

  // initialize
  // funcion init() {
  //   var storedSavedTasks
  // }










});

// save newly inputed information
// localStorage saved info
