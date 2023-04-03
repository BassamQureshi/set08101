let slideIndex = [1, 1, 1];
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
  let dots = document.getElementsByClassName("dot" + (no + 1).toString());
  if (n > slides.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[no] - 1].style.display = "block";
  timeoutId[no] = setTimeout(function() { showSlides(slideIndex[no] += 1, no); }, 3000);
}

const navbar = document.querySelector('.navbar');
const darkModeButton = document.querySelector('.dark-mode-button');

// Toggle dark mode
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  navbar.classList.toggle('dark-mode');
});

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



