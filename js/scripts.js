// Business Logic


// User interface Logic
$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    let user = $("input#name").val();
    let operation = $("input[name='operation']:checked").val();
    let cost = $("input[name='cost']:checked").val();
    let think = $("input[name='think']:checked").val();
    let job = $("input[name='job']:checked").val();
    let content = $("input[name='content']:checked").val();

    console.log(operation)
    console.log(cost)
    console.log(think)
    console.log(job)
    console.log(content)

    $(".name").text(user);
  });
});