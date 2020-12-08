// JQuery
// Adapted from: https://www.w3schools.com/jquery/jquery_events.asp
// Owner: Jessica Hobbins

$(document).ready(function(){
    $("input").focus(function(){                     // Selecting input elements
      $(this).css("background-color", "teal");      // Changing the background of the input box to teal once clicked
    });
  });
