$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#hidden-pictures").slideToggle();
    $("#showing-pictures").slideToggle();
  });
});

