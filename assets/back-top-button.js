const backToSelection = document.getElementById("backtoselectionID");

const myScrollFunc = function() {
  let y = window.scrollY;
  if (y >= 1450) {
    backToSelection.className = "back_to_selection back_to_selection-show";
  } else {
    backToSelection.className = "back_to_selection back_to_selection-hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

$(document).scroll(function() {
  let scrollTop = $(this).scrollTop();
  if (scrollTop > 1450) {
    $('.back_to_selection').fadeIn(1000);
  } else {
    $('.back_to_selection').fadeOut(300);
  }
});
