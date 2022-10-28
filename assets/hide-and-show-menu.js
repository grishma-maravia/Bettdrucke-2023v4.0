// Show menu when scrolling up and Hide Menu when scrolling down
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 185){
    document.getElementById("header").style.top = "0";
  } else if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "-37px";
  } else if (currentScrollPos >= 220) {
    document.getElementById("header").style.top = "-231px";
  }
  prevScrollpos = currentScrollPos;
}