// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  var todaysDate = dayjs();
  $('#currentDay').text(todaysDate.format('MMMM D, YYYY'));
  
//     var textBlock = getItem("text");
//     var saveBtn = $('.saveBtn');
   
//       saveBtn.on('click', function(){
//       localStorage.setItem("text",textBlock);
      

// });
var currentHour = day.js().hour();
  // var textArea = $('.description');
  // for (let i = 0; i < textArea.length; i++) {
  //   textArea.length = array[i];
  // }
  //   var textEntries = textArea 
    
  
    if ('#hour-9'< currentHour) {
      $('div').toggleClass('.past', true);

    }   else if('#hour-9'=== currentHour) {
        $('div').toggleClass('.present', true);
      
    }    else {
        $('div').toggleClass('.future', true);
    }
    


 


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
