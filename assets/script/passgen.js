// initialising variables
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", lower = "abcdefghijklmnopqrstuvwxyz", number = "0123456789", symbol = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";


// Function to display prompt when generate password button is clicked in HTML
function promptDisplay() {
    var element = document.getElementById("display");
    element.classList.add("active");
  }

// Function to remove prompt after submit button is clicked
function removeDisplay() {
    var element = document.getElementById("display");
    element.classList.remove("active");
}

function getInput() {

//   DOM elements in hidden form

    const passlength = document.getElementById("passLen").value;
    const passlength1= parseInt(passlength);
    console.log(passlength1);
    const checkedUc = document.getElementById("uppercase").checked;
    const checkedLc = document.getElementById("lowercase").checked;
    const checkedNo = document.getElementById("numbers").checked;
    const checkedSl = document.getElementById("symbols").checked;

    valInputAndGenPass(passlength1, checkedUc, checkedLc, checkedNo, checkedSl);
    removeDisplay()

}

// Function to validate min checked boxes, if true (boolean) add to the countChecks
function countCheckbox(checkedUc, checkedLc, checkedNo, checkedSl) {
    var countChecks = 0;
    if (checkedUc) {
        countChecks++;
    }
    if (checkedLc) {
        countChecks++;
    }
    if (checkedNo) {
        countChecks++;
    }
    if (checkedSl) {
        countChecks++;
    }
    return countChecks;
}

// Function to validate the input.
function valInputAndGenPass(passlength1, checkedUc, checkedLc, checkedNo, checkedSl) {
    var countChecks = countCheckbox(checkedUc, checkedLc, checkedNo, checkedSl);
    if (countChecks < 2 || passlength1 < 8 || passlength1 > 128 || isNaN(passlength1)) {
        window.alert("Minimum 2 options should be selected. Enter a number between 8 and 128.");
    } else {
        genPass(passlength1, checkedUc, checkedLc, checkedNo, checkedSl);
    }
}

// Function to generate passowrd
function genPass(passlength1, checkedUc, checkedLc, checkedNo, checkedSl) {
    var checkedChar = "";
    if (checkedUc) {
        checkedChar = checkedChar + upper;
    }
    if (checkedLc) {
        checkedChar = checkedChar + lower;
    }
    if (checkedNo) {
        checkedChar = checkedChar + number;
    }
    if (checkedSl) {
        checkedChar = checkedChar + symbol;
    }
    var displayPassword = "";
    for (i=0; i<passlength1; i++) {
        displayPassword = displayPassword + checkedChar[Math.floor(Math.random() * checkedChar.length)];  
    }
    document.getElementById("password").innerText = displayPassword;
    
}


