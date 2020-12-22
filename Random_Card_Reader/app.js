window.onload = function() {
    document.querySelector(".top-suit").innerHTML = generateRandomSuit();
    document.querySelector(".bottom-suit").innerHTML = generateRandomSuit();
    document.querySelector(".numbers").innerHTML = generateRandomNumber();
};

function generateRandomNumber() {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    console.log(numbers[indexNumbers]);
    return numbers[indexNumbers];

};

function generateRandomSuit() {
    let suits = ["&diams;", "&spades;", "&hearts;", "&clubs;"];
    let indexSuit = Math.floor(Math.random() * suits.length);
    console.log(suits[indexSuit]);
    return suits[indexSuit];

};

