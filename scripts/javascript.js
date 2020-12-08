// Javascript
// Adapted from https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
// Owner: Jessica Hobbins

// This scripts adds a slideshow to the page(s) that the functions are called to.

// Slideshow loads with first slide as visible
var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls on slide. When next or previous is clicked, the index position changes and the slide in that index position is displayed.
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls below main slide. When a thumbnail is selected, the slide in that corresponding index position is displayed.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// The slideshow itself, scripting when to hide and when to show images
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");           // Calling mySlides element, which contains the images
  var thumbnails = document.getElementsByClassName("opacity");        // Calling the opacity element, which reduces the opacity of the thumbnail not currently selected
  if (n > slides.length) {slideIndex = 1}                             // Displaying slide 1 as default
  if (n < 1) {slideIndex = slides.length}                             // slideIndex is equal to the length of the slides that have been coded in the HTML
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";                                 // Hiding the slides that are not currently selected
  }
  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");     // Displaying the slides that are currently selected
  }
  slides[slideIndex-1].style.display = "block";                       // Displaying as block level element
  thumbnails[slideIndex-1].className += " active";
}