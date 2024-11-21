let navbar = document.querySelector(".navbar");
let openButton = document.querySelector(".baricon");
let closeButton = document.querySelector(".closebar");
let solutionPortfolio = document.querySelector(".solutionportfolio");
let solutionPages = document.querySelector(".solutionpages");
let companytab = document.querySelector(".company");
let companyPages = document.querySelector(".companypages");
console.log(companyPages);

openButton.addEventListener("click", function () {
  navbar.style.display = "block";
});
closeButton.addEventListener("click", function () {
  navbar.style.display = "none";
});
solutionPortfolio.addEventListener("mousemove", function () {
  solutionPages.style.display = "block";
});
solutionPages.addEventListener("mouseleave", function () {
  solutionPages.style.display = "none";
});

companytab.addEventListener("mousemove", function () {
  companyPages.style.display = "block";
});
companyPages.addEventListener("mouseleave", function () {
  companyPages.style.display = "none";
});

let slides = document.querySelectorAll(".slide");
// Access the next and prev buttons
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
// Access the indicators
let dots = document.querySelectorAll(".dot");

var counter = 0;

// Code for next button
next.addEventListener("click", slideNext);
function slideNext() {
  slides[counter].style.animation = "next1 0.5s ease-in forwards";
  if (counter >= slides.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slides[counter].style.animation = "next2 0.5s ease-in forwards";
  indicators();
}

// Code for prev button
prev.addEventListener("click", slidePrev);
function slidePrev() {
  slides[counter].style.animation = "prev1 0.5s ease-in forwards";
  if (counter == 0) {
    counter = slides.length - 1;
  } else {
    counter--;
  }
  slides[counter].style.animation = "prev2 0.5s ease-in forwards";
  indicators();
}

// Auto slideing
function autoSliding() {
  deletInterval = setInterval(timer, 3000);
  function timer() {
    slideNext();
    indicators();
  }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", function () {
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener("mouseout", autoSliding);

// Add and remove active class from the indicators
function indicators() {
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[counter].className += " active";
}

// Add click event to the indicator
function switchImage(currentImage) {
  currentImage.classList.add("active");
  var imageId = currentImage.getAttribute("attr");
  if (imageId > counter) {
    slides[counter].style.animation = "next1 0.5s ease-in forwards";
    counter = imageId;
    slides[counter].style.animation = "next2 0.5s ease-in forwards";
  } else if (imageId == counter) {
    return;
  } else {
    slides[counter].style.animation = "prev1 0.5s ease-in forwards";
    counter = imageId;
    slides[counter].style.animation = "prev2 0.5s ease-in forwards";
  }
  indicators();
}