// Business Logic
function totalValue(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
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

    $(".name").text(user);
  });
});