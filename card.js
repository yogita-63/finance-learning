var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
var value= 0;
function showSlides(n) {
  var i ;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  if(value<100){
    value+=20;
    move();
  };
}

var j = 0;
var width = 0;
function move() {
  if (j == 0) {
    j = 1;
    var elem = document.getElementById("myBar");
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= value) {
        clearInterval(id);
        j = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}