// Get the display element
const display = document.getElementById('display');

// Function to append a value to the display
function appendValue(value) {
  display.value += value;
}

// Function to calculate the result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}