

$(document).ready(function(){
  var today = moment().format('dddd, MMMM Do');
  
  // load day at top of page
  $("#currentDay").text(today);

  // fill in times from 6AM to 6PM

  var workDay = 12;
  var hours = []

  for (var i = 0; i < workDay + 1; i ++) {
    var startHour = moment().hour(6);
    hours.push(startHour.add(i, 'h').format("hA"));
  }













});


// fill in times from 6AM to 6PM
// dynamically add classes to times (past, present, future)
// save newly inputed information
// localStorage saved info







/* <div class="row time-block">
<div class="col-1 hour">
9AM
</div>
<textarea class="col-10 past description"></textarea>
<button class="col-1 saveBtn d-flex justify-content-center">
  <i class="fas fa-save"></i>
</button>
</div>    */