// INPUT ELEMENTS

const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");

const compareBtn = document.getElementById("compareBtn");

const comparisonResult = document.getElementById("comparisonResult");

// COMPARE NUMBERS

compareBtn.addEventListener("click", compareNumbers);

// ENTER KEY SUPPORT

firstNumberInput.addEventListener("keydown", handleEnter);
secondNumberInput.addEventListener("keydown", handleEnter);

function handleEnter(event) {

    if (event.key === "Enter") {
        compareNumbers();
    }

}

// MAIN COMPARISON FUNCTION

function compareNumbers() {

    const firstInput = firstNumberInput.value;
    const secondInput = secondNumberInput.value;

    if (firstInput.trim() === "" || secondInput.trim() === "") {

        comparisonResult.innerHTML = `
            <h3>Input Error</h3>
            <p>Please enter both numbers.</p>
        `;

        return;
    }

    const first = Number(firstInput);
    const second = Number(secondInput);

    if (!Number.isFinite(first) || !Number.isFinite(second)) {

        comparisonResult.innerHTML = `
            <h3>Invalid Input</h3>
            <p>Please enter valid numbers.</p>
        `;

        return;
    }

    const difference = Math.abs(first - second);

    let message;

    if (first > second) {

        message = `${first} is greater than ${second}.`;

    } else if (first < second) {

        message = `${second} is greater than ${first}.`;

    } else {

        message = "Both numbers are equal.";

    }

    comparisonResult.innerHTML = `
        <h3>${message}</h3>
        <p>Difference: ${difference}</p>
    `;

    console.log("NUMBER COMPARISON");
    console.log("First Number:", first);
    console.log("Second Number:", second);
    console.log("Difference:", difference);

}