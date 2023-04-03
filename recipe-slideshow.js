let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"];
let timeoutId = [];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  clearTimeout(timeoutId[no]);
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
  clearTimeout(timeoutId[no]);
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName("dot" + (no+1).toString());
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex[no]-1].style.display = "block";
  timeoutId[no] = setTimeout(function() {showSlides(slideIndex[no] += 1, no);}, 3000);
}

const navbar = document.querySelector('.navbar');
const darkModeButton = document.querySelector('.dark-mode-button');

// Toggle dark mode
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
});
