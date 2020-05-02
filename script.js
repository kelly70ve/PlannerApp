$(document).ready(function () {
  var today = moment().format('dddd, MMMM Do');
  var currentHour = parseInt(moment().format("HH"));
  var workDay = 12;
  var ppf = ""
  var savedTasks = [];

  // Load Time Blocks
  loadTimes();
  // Load saved task 
  loadTasks();
  // load day at day at top of page
  $("#currentDay").text(today);

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
      var buttonEl = $("<button>").addClass("col-1 saveBtn d-flex justify-content-center").attr("data-hour", hourString).attr("data-day", today).append($("<i>").addClass("fas fa-save"));

      // Append Elements
      $("#time-container").append(rowEl.append(hourEl, textEl, buttonEl));
    }
  }

  // Save inputs to localStorage on click 
  $(".saveBtn").on("click", function() {
    event.preventDefault();
    var thisHour = $(this).attr("data-hour")
    var thisDay = $(this).attr("data-day")
    var task = $(`.description[data-hour='${thisHour}'`).val().trim();

    var hourTask = {
      saveDay: thisDay,
      saveHour: thisHour,
      saveTask: task
    }
    savedTasks.push(hourTask)
    localStorage.setItem("tasks", JSON.stringify(savedTasks))
  });

  // Load Tasks
  function loadTasks () {
    var storedSavedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedSavedTasks !== null){
      savedTasks = storedSavedTasks;
      renderTasks();
    }
  }

// Render saved Tasks
  function renderTasks() {
    for (var i = 0; i < savedTasks.length; i++) {
      var getDay =  savedTasks[i].saveDay;
      var getHour = savedTasks[i].saveHour;
      var getTask = savedTasks[i].saveTask;
      if (today === getDay){
        $(`.description[data-hour='${getHour}'`).text(getTask);
      }
    }
  }

  // Clear Tasks
  $("#clear").on("click", function () {
    for (var i = 0; i < savedTasks.length; i++) {
      var getHour = savedTasks[i].saveHour;
      $(`.description[data-hour='${getHour}'`).text("");
    }
    localStorage.clear();
  });
});

