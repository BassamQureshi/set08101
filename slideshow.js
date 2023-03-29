const navbar = document.querySelector('.navbar');
const darkModeButton = document.querySelector('.dark-mode-button');

// Toggle dark mode
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
});

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 5000);
  }
  repeater();
}
repeat();



// Change navbar background color on scroll
/*window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});*/