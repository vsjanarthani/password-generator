// initialising variables
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", lower = "abcdefghijklmnopqrstuvwxyz", number = "0123456789", symbol = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Function to display prompt when generate password button is clicked in HTML
function promptDisplay() {
    var element = document.getElementById("display");
    element.classList.add("active");
  }

// //   Function to remove prompt after submit button is clicked
// function removeDisplay() {
//     var element = document.getElementById("display");
//     element.classList.remove("active");
//   }

//   Function to check if passlen is >=8 and <=128
function getInput() {
    var passlength = document.getElementById("passLen").value;
    passlength1= parseInt(passlength);
    console.log(passlength1);
    // console.log(typeof(passlength1));
    var checkedUc = document.getElementById("uppercase").checked;
    console.log(checkedUc);
    var checkedLc = document.getElementById("lowercase").checked;
    console.log(checkedLc);
    var checkedNo = document.getElementById("numbers").checked;
    console.log(checkedNo);
    var checkedSl = document.getElementById("symbols").checked;
    console.log(checkedSl);

    // if (passlength1 < 8 || > 128) {
    //   console.log ("bad choice");
    // } else {
    //     console.log("Your password will ge generated soon");
    // }
    // removeDisplay();
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
