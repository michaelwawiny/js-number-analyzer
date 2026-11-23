const numberInput = document.getElementById("numberInput");
const analyzeBtn = document.getElementById("analyzeBtn");

// RESULT ELEMENTS

const positiveResult = document.getElementById("positiveResult");
const negativeResult = document.getElementById("negativeResult");
const zeroResult = document.getElementById("zeroResult");
const evenResult = document.getElementById("evenResult");
const oddResult = document.getElementById("oddResult");

// ANALYZE BUTTON

analyzeBtn.addEventListener("click", analyzeNumber);

// ENTER KEY SUPPORT

numberInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        analyzeNumber();
    }
});

// ANALYZE FUNCTION

function analyzeNumber() {

    const input = numberInput.value;

    if (input.trim() === "") {
        alert("Please enter a number.");
        return;
    }

    const number = Number(input);

    if (!Number.isSafeInteger(number)) {
        alert("Please enter a valid whole number.");
        return;
    }

    const result = describeNumber(number);

    positiveResult.textContent = result.positive ? "YES" : "NO";
    negativeResult.textContent = result.negative ? "YES" : "NO";
    zeroResult.textContent = result.zero ? "YES" : "NO";
    evenResult.textContent = result.even ? "YES" : "NO";
    oddResult.textContent = result.odd ? "YES" : "NO";

}