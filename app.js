// ========================================
// DOM ELEMENTS
// ========================================

const numberInput = document.getElementById("numberInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const errorMessage = document.getElementById("errorMessage");


// ========================================
// ANALYZE NUMBER
// ========================================

function analyzeNumber() {

    const value = numberInput.value.trim();

    // Validate input
    if (value === "") {
        errorMessage.textContent = "Please enter a number.";
        return;
    }

    const number = Number(value);

    if (!Number.isFinite(number) || !Number.isInteger(number)) {
        errorMessage.textContent = "Please enter a valid integer.";
        return;
    }

    errorMessage.textContent = "";

    // Call the main function
    const result = describeNumber(number);

    // Display results
    displayResult("positive", result.positive);
    displayResult("negative", result.negative);
    displayResult("zero", result.zero);
    displayResult("even", result.even);
    displayResult("odd", result.odd);
}


// ========================================
// DISPLAY RESULTS
// ========================================

function displayResult(id, value) {

    const element = document.getElementById(id);

    element.textContent = value ? "TRUE" : "FALSE";

    element.classList.toggle("true", value);

}


// ========================================
// EVENT LISTENERS
// ========================================

analyzeBtn.addEventListener("click", analyzeNumber);

numberInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        analyzeNumber();
    }

});