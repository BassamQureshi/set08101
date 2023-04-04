const navbar = document.querySelector('.navbar');
const darkModeButton = document.querySelector('.dark-mode-button');

// Load dark mode preference from localStorage
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark-mode');
  navbar.classList.add('dark-mode');
}

// Toggle dark mode and save preference to localStorage
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
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
    }, 3000);
  }
  repeater();
}
repeat();

// Define recipe names and links
const recipes = [  
  {name: 'Fluffy Scrambled Eggs & Avocado Slices On Toast', link: 'recipe1.html'},  
  {name: 'Mini Chicken Meatball, Pasta, & Vegetable Soup', link: 'recipe2.html'},  
  {name: 'Teriyaki Chicken & Vegetable Rice Bowl', link: 'recipe3.html'},  
  {name: 'American Pancakes', link: 'recipe4.html'},  
  {name: 'Prawn & Harissa Spaghetti', link: 'recipe5.html'},  
  {name: 'Crispy Japanese-Style Chicken Burgers', link: 'recipe6.html'},  
  {name: 'French Toast', link: 'recipe7.html'},  
  {name: 'Vegetarian Lasagne', link: 'recipe8.html'}, 
  {name: 'One-Pan Roast Dinner', link: 'recipe9.html'}];
  
  const searchForm = document.querySelector('.search-form');
  
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the search query from the input element
    const searchInput = document.querySelector('#search-input');
    const searchQuery = searchInput.value.trim();
  
    // Check if the search query matches a recipe name
    const matchedRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
    // Redirect to recipe page if there is a match
    if (matchedRecipes.length > 0) {
      window.location.href = matchedRecipes[0].link;
    } else {
      // Display error message if there are no matches
      alert('No results found for "' + searchQuery + '". Please try again.');
    }
  });
  