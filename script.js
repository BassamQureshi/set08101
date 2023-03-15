const navbar = document.querySelector('.navbar');
const darkModeButton = document.querySelector('.dark-mode-button');

// Toggle dark mode
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
});

// Change navbar background color on scroll
/*window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});*/