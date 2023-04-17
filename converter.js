const convertBtn = document.getElementById("convert-btn");
const amountInput = document.getElementById("amount");
const unitFromSelect = document.getElementById("unit-from");
const unitToSelect = document.getElementById("unit-to");
const resultDiv = document.getElementById("result");

function convertAmount() {
  const amount = parseFloat(amountInput.value);
  const unitFrom = unitFromSelect.value;
  const unitTo = unitToSelect.value;

  if (isNaN(amount)) {
    resultDiv.innerText = "Please Enter A Valid Amount!";
    return;
  }

  const conversionFactors = {
    // Volume units
    tsp: {
      tbsp: 1 / 3,
      cup: 1 / 48,
      ml: 4.92892,
      l: 0.00492892,
      oz: 0.166667,
      pt: 0.0208333,
      qt: 0.0104167,
      gal: 0.00260417
    },
    tbsp: {
      tsp: 3,
      cup: 1 / 16,
      ml: 14.7868,
      l: 0.0147868,
      oz: 0.5,
      pt: 0.0625,
      qt: 0.03125,
      gal: 0.0078125
    },
    cup: {
      tsp: 48,
      tbsp: 16,
      ml: 236.588,
      l: 0.236588,
      oz: 8,
      pt: 1,
      qt: 0.5,
      gal: 0.125
    },
    ml: {
      tsp: 0.202884,
      tbsp: 0.067628,
      cup: 0.00422675,
      l: 0.001,
      oz: 0.033814,
      pt: 0.00422675,
      qt: 0.00211338,
      gal: 0.000528344
    },
    l: {
      tsp: 202.884,
      tbsp: 67.628,
      cup: 4.22675,
      ml: 1000,
      oz: 33.814,
      pt: 4.22675,
      qt: 2.11338,
      gal: 0.528344
    },
    oz: {
      tsp: 6,
      tbsp: 2,
      cup: 0.125,
      ml: 29.5735,
      l: 0.0295735,
      pt: 0.125,
      qt: 0.0625,
      gal: 0.015625
    },
    pt: {
      tsp: 96,
      tbsp: 32,
      cup: 2,
      ml: 473.176,
      l: 0.473176,
      oz: 16,
      qt: 0.5,
      gal: 0.125
    },
    qt: {
      tsp: 192,
      tbsp: 64,
      cup: 4,
      ml: 946.353,
      l: 0.946353,
      oz: 32,
      pt: 2,
      gal: 0.25
    },
    gal: {
      tsp: 768,
      tbsp: 256,
      cup: 16,
      ml: 3785.41,
      l: 3.78541,
      oz: 128,
      pt: 8,
      qt: 4
    },

    // Weight units
    g: {
      kg: 0.001,
      lb: 0.00220462,
      oz: 0.035274
    },
    kg: {
      g: 1000,
      lb: 2.20462,
      oz: 35.274
    },
    lb: {
      g: 453.592,
      kg: 0.453592,
      oz: 16
    },
    oz: {
      g: 28.3495,
      kg: 0.0283495,
      lb: 0.0625
    }

  };

  const convertedAmount = amount * conversionFactors[unitFrom][unitTo];

  resultDiv.innerText = `${amount} ${unitFrom} = ${convertedAmount.toFixed(2)} ${unitTo}`;
}

convertBtn.addEventListener("click", convertAmount);

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
  
    // Redirect the user to the recipe page if there is a match
    if (matchedRecipes.length > 0) {
      window.location.href = matchedRecipes[0].link;
    } else {
      // Display error message if there are no matches
      alert('No results found for "' + searchQuery + '". Please try again.');
    }
  });

