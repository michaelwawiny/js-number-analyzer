// ========================================
// PROJECT: NUMBER ANALYZER
// ========================================


// Function 1: Check if number is positive
function isPositive(number) {
    return number > 0;
}


// Function 2: Check if number is negative
function isNegative(number) {
    return number < 0;
}


// Function 3: Check if number is zero
function isZero(number) {
    return number === 0;
}


// Function 4: Check if number is even
function isEven(number) {
    return number % 2 === 0;
}


// Function 5: Describe the number
function describeNumber(number) {
    return {
        positive: isPositive(number),
        negative: isNegative(number),
        zero: isZero(number),
        even: isEven(number),
        odd: !isEven(number)
    };
}


// ========================================
// SAMPLE TESTS
// ========================================

console.log("NUMBER ANALYZER RESULTS");

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));


// ========================================
// EXPORT FUNCTIONS FOR BROWSER USE
// ========================================

if (typeof window !== "undefined") {
    window.describeNumber = describeNumber;
}