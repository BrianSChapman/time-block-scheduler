// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // Utilized dayjs to incorporate the current date to the page
  var todaysDate = dayjs();
  $("#currentDay").text(todaysDate.format("MMMM D, YYYY"));
 
  //      
      var saveBtn = $(".saveBtn");
      
     // Onclick function to store the text field into local storage
        saveBtn.on("click", function(event){
          event.preventDefault();
        
          var textBlock = $(this).parent().children(".description").val();
          localStorage.setItem("textInput", textBlock);
          var entryTime = $(this).parent().attr('id');
          localStorage.setItem("entryTime", entryTime);
        
});       //Attempted to get the color to change based upon time. Unsuccessful.
          var currentHour = dayjs().format("H");
         console.log(currentHour);
          $(".time-block").each(function() {
          var plannerHour = parseInt($("this").attr("id"));
          var descriptionBox = document.getElementsByClassName(".description");

          if (currentHour < plannerHour) {
          $(this).addClass("future");
  
        }   else if( currentHour == plannerHour) {
            $(this).addClass("present");
      
        }  else {
            $(this).addClass("past");
    }
});       //Attempted to retreived localstorage information
          JSON.parse(localStorage.getItem("entrytime"));
          JSON.parse(localStorage.getItem("textInput"));    
  
});

  //A for loop that was also attempted to get the color to change. Unsuccessful.

// var currentHour = dayjs().format("H");
//       var textArea = document.getElementsByClassName('.description');
//         for (var i = 17; i < textArea.length ; i++) {
//           var plannerHour = textArea.length[i]; 
//           console.log(plannerHour);