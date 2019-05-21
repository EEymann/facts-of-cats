$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });
});

$(document).ready(function() {
  $("#click-pictures").click(function() {
    $("#hidden-pictures").slideToggle();
    $("#showing-pictures").slideToggle();
  });
});

$(document).ready(function() {
  $("#hide-pictures").click(function() {
    $("#hidden-pictures").slideToggle();
    $("#showing-pictures").slideToggle();
  });
});

