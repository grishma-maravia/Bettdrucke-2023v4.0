myID = document.getElementById("backtoselectionID");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 1450) {
    myID.className = "back_to_selection back_to_selection-show";
  } else {
    myID.className = "back_to_selection back_to_selection-hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1450) {
    $('.<em>back_to_selection</em>').fadeIn(5000);
  } else {
    $('.<em>back_to_selection</em>').fadeOut(5000);
  }
});
