$(document).ready(function (){
  
  setTimeout(function () {
    const input = document.querySelector('.cl-po--input input[type=file]');
    const log = document.querySelector('.cl-po--upload-files');

    input?.addEventListener('change', updateValue);

    function updateValue(e) {
      $('.cl-po--upload-files').addClass('success-icon');
    }
    
    document.querySelector('body').addEventListener('click', function(event) {
      if (event.target.tagName === "SPAN" && event.target.className === "cl-po--remove") {
      	$('.cl-po--upload-files').removeClass('success-icon');
      }
    });
    
  }, 1000);
});