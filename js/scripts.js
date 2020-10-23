// Business Logic
function totalValue(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

function reloadPage() {
  window.location.reload();
}

// User interface Logic
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    let user = $("input#name").val();
    let operation = parseInt($("input[name='operation']:checked").val());
    let cost = parseInt($("input[name='cost']:checked").val());
    let think = parseInt($("input[name='think']:checked").val());
    let job = parseInt($("input[name='job']:checked").val());
    let content = parseInt($("input[name='content']:checked").val());
    let total = totalValue (operation, cost, think, job, content);
    
    if ($('li:not(:has(:radio:checked))').length) {
      alert("Please answer all questions");
      cancelFormSubmission();
    }

    if ($("#name").val() == "") {
      alert("You must enter your Name");
    } else if ($("#name").val() !== ""){
      $(".result").show();
      $(".name").text(user);
      $(".jumbotron").hide();
      $("#questions").hide();
    }

    if (total >=16) {
      $("#swift").show();
    } else if (total >=13) {
      $("#ruby").show();
    } else if (total >=10) {
      $("#python").show();
    } else if (total >=7) {
      $("#csharp").show();
    } else if (total >=5) { 
      $("#javascript").show();
    }

  });
});