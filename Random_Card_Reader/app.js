window.onload = () => {
    document.querySelector(".top-suit").classList.add(generateRandomSuit());
    document.querySelector(".bottom-suit").classList.add(generateRandomSuit());
    document.querySelector(".numbers").classList.add(generateRandomNumber());
};

let generateRandomNumber = () => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let indexNumbers = Math.floor(Math.random() * numbers.length);

    return numbers[indexNumbers];

};

let generateRandomSuit = () => {
    let suits = ["diamonds", "spades", "heart", "club"];
    let indexSuit = Math.floor(Math.random() * suit.length);

    return suits[indexSuit];

};

