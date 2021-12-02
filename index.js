// console.log("hello world");

// Grab up button using query selector
const buttonUp = document.querySelector("#up-button");
// Grab down button using query selector
const buttonDown = document.querySelector("#down-button");
// Grab reset button
const resetButton = document.querySelector("#reset");

// Access paragraph from html to display value of countee
let counterParagraph = document.querySelector(".counter");

// value to increment or decreament depending on what button is clicked.
let counter = 0;

// Add event listener so when up button is clicked counter is incremented, then update
// the html with this value.
buttonUp.addEventListener("click", (event) => {
  counter++;
  counterParagraph.innerHTML = counter;
});

// Add event listener so when up button is clicked counter is decremented, then update
// the html with this value.
buttonDown.addEventListener("click", (event) => {
  counter--;
  counterParagraph.innerHTML = counter;
});

// Add event listener to reset button, when clicked - resets count to 0
resetButton.addEventListener("click", (event) => {
  counter = 0;
  counterParagraph.innerHTML = counter;
});
