const DecrementButton = document.getElementById("Decrement");
const IncrementButton = document.getElementById("Increment");
const ClearButton = document.getElementById("Clear");
const display = document.getElementById("counter");
const error = document.querySelector(".error-message");

let count = 1;

function updateDisplay() {
  display.textContent = count;
  DecrementButton.disabled = count === 0 ? true : false;
  error.style.display = count > 0 ? "none" : "block";
  console.log(error);
  ClearButton.style.display = count === 0 ? "none" : "block";
}
function IncrementCount() {
  count++;
  updateDisplay();
}
function DecrementCount() {
  if (count > 0) {
    count--;
    updateDisplay();
  } else {
    error.style.display = "block";
  }
}
function clrDisplay() {
  count = 0;  
  updateDisplay();
}
IncrementButton.addEventListener("click", IncrementCount);
DecrementButton.addEventListener("click", DecrementCount);
ClearButton.addEventListener("click", clrDisplay);

updateDisplay();