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
    resultDiv.innerText = "Please enter a valid amount";
    return;
  }

  const conversionFactors = {
    tsp: { tbsp: 1/3, cup: 1/48, ml: 4.92892, l: 0.00492892, oz: 0.166667, pt: 0.0208333, qt: 0.0104167, gal: 0.00260417 },
    tbsp: { tsp: 3, cup: 1/16, ml: 14.7868, l: 0.0147868, oz: 0.5, pt: 0.0625, qt: 0.03125, gal: 0.0078125 },
    cup: { tsp: 48, tbsp: 16, ml: 236.588, l: 0.236588, oz: 8, pt: 1, qt: 0.5, gal: 0.125 },
    ml: { tsp: 0.202884, tbsp: 0.067628, cup: 0.00422675, l: 0.001, oz: 0.033814, pt: 0.00422675, qt: 0.00211338, gal: 0.000528344 },
    l: { tsp: 202.884, tbsp: 67.628, cup: 4.22675, ml: 1000, oz: 33.814, pt: 4.22675, qt: 2.11338, gal: 0.528344 },
    oz: { tsp: 6, tbsp: 2, cup: 0.125, ml: 29.5735, l: 0.0295735, pt: 0.125, qt: 0.0625, gal: 0.015625 },
    pt: { tsp: 96, tbsp: 32, cup: 2, ml: 473.176, l: 0.473176, oz: 16, qt: 0.5, gal: 0.125 },
    qt: { tsp: 192, tbsp: 64, cup: 4, ml: 946.353, l: 0.946353, oz: 32, pt: 2, gal: 0.25 },
    gal: { tsp: 768, tbsp: 256, cup: 16, ml: 3785.41, l: 3.78541, oz: 128, pt: 8, qt: 4 }
  };

  const convertedAmount = amount * conversionFactors[unitFrom][unitTo];

  resultDiv.innerText = `${amount} ${unitFrom} = ${convertedAmount.toFixed(2)} ${unitTo}`;
}

convertBtn.addEventListener("click", convertAmount);

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