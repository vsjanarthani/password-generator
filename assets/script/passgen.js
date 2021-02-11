// initialising variables
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Function to display prompt when generate password button is clicked in HTML
function promptDisplay() {
    window.prompt ("Hi There!");
}


// Function to get random uppercase
function uppperCase() {
    return upper [Math.floor(Math.random() * upper.length)];  
}
console.log(uppperCase());

// Function to get random lowercase
function lowerCase() {
    return lower [Math.floor(Math.random() * lower.length)];  
}
console.log(lowerCase());

// Function to get random number
function rdmNumber() {
    return number [Math.floor(Math.random() * number.length)];  
}
console.log(rdmNumber());

// Function to get random symbol
function rdmSymbol() {
    return symbol [Math.floor(Math.random() * symbol.length)];  
}
console.log(rdmSymbol());
