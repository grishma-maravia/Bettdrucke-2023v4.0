// Show menu when scrolling up and Hide Menu when scrolling down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 185){
    document.getElementById("header").style.top = "0px";
    document.getElementById("header").style.position = "relative";
  } else if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("header").style.position = "fixed";
  } else if (currentScrollPos >= 220) {
    document.getElementById("header").style.top = "-231px";
  }
  prevScrollpos = currentScrollPos;
}