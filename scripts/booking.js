/**
 * ****** create variables ********
 *
 * @format
 */

// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let NumberOfDaysSelected = 0;
const days = document.querySelectorAll(".blue-hover");
const calculatedCost = document.getElementById("calculated-cost");
let dailyRate = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
days.forEach((day) => {
  day.addEventListener("click", () => {
    if (!day.classList.contains("clicked")) {
      day.classList.add("clicked");
      NumberOfDaysSelected++;
      calculateCost();
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  NumberOfDaysSelected = 0;
  days.forEach((day) => day.classList.remove("clicked"));
  calculatedCost.innerHTML = 0;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const half = document.getElementById("half");
const full = document.getElementById("full");

half.addEventListener("click", () => {
  dailyRate = 20;
  half.classList.add("clicked");
  full.classList.remove("clicked");
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", () => {
  dailyRate = 35;
  full.classList.add("clicked");
  half.classList.remove("clicked");
  calculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
  let result = dailyRate * NumberOfDaysSelected;
  console.log(result);
  calculatedCost.innerHTML = `${result}`;
}
