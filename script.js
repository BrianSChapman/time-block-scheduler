// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Utilized dayjs to incorporate the current date to the page
  var todaysDate = dayjs();
  $('#currentDay').text(todaysDate.format('MMMM D, YYYY'));
 
  //      var textBlock = localstorage.getItem("text");
      var saveBtn = $('.saveBtn');
      
     
        saveBtn.on('click', function(event){
          event.preventDefault();
        
          var textBlock = $(this).parent().children(".description").val();
          localStorage.setItem('textInput', textBlock);
          var entryTime = $(this).parent().attr('id');
          localStorage.setItem('entryTime', entryTime);
        
});

 
  var currentHour = dayjs().hour();

  var textArea = $('.description');
  for (var i = 17; i < textArea.length; i++) {
    // var
  }
    // var textEntries = textArea 
    // var timeBlock = $('div');
    //     var textArea = $('.description');
 
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});
