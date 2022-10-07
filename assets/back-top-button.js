const backToSelection = document.getElementById("backtoselectionID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 1450) {
    backToSelection.className = "back_to_selection back_to_selection-show";
  } else {
    backToSelection.className = "back_to_selection back_to_selection-hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1450) {
    $('.back_to_selection').fadeIn(1000);
  } else {
    $('.back_to_selection').fadeOut(1000);
  }
});
