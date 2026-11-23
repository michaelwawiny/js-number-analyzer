// BOOLEAN HELPER FUNCTIONS

function isPositive(number) {
    return number > 0;
}

function isNegative(number) {
    return number < 0;
}

function isZero(number) {
    return number === 0;
}

function isEven(number) {
    return number % 2 === 0;
}

// MAIN NUMBER DESCRIPTION FUNCTION

function describeNumber(number) {

    return {
        positive: isPositive(number),
        negative: isNegative(number),
        zero: isZero(number),
        even: isEven(number),
        odd: !isEven(number)
    };

}

// SAMPLE TESTS

console.log("NUMBER ANALYZER RESULTS");

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));

// MAKE FUNCTION AVAILABLE TO OTHER SCRIPTS

window.describeNumber = describeNumber;