//prompt for all options
let wantNumbersEl = document.getElementById("numbers")
let wantLowercaseEl = document.getElementById("lowercase")
let wantUppercaseEl = document.getElementById("uppercse");
let wantSymbolsEl = document.getElementById("symbols");
let howLong = parseInt(document.getElementById("number-input").value);
let generateButton = document.querySelector("generate-pass");
let copyButton = document.querySelector("copy-pass");
let passwordText = document.querySelector("generated-password")

//Set all available options for password in strings
const numbers = "0123456789";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!#$%&'()*+,-./:;<=>?@[\\\"]^_`{|}~";

//make sure length is actually a ******* number
console.log(typeof howLong);

// Listener Event for generate button
console.log(generateButton);

document.addEventListener("DOMContentLoaded", function() {
    generateButton.addEventListener("click", function() {
        let howLong = parseInt(document.getElementById("number-input").value);
        let wantNumbers = wantNumbersEl.checked;
        let wantLowercase = wantLowercaseEl.checked;
        let wantUppercase = wantUppercaseEl.checked;
        let wantSymbols = wantSymbolsEl.checked;
        passwordText.innerHTML = generatePassword(
            wantNumbers, wantLowercase, wantUppercase, wantSymbols
        );
    }),
});

// Generate Password Function
function generatePasssword(num, up, low, sym) {

    // declare/ initialize empty options & password
    let userPassword = "";
    let passwordOptions = "";

    //check wantNumbers if yes, add to optionsArray
    if (num) {
        passwordOptions += numbers;
    }
    //check wantUppercase if yes, add to optionsArray
    if (up) {
        passwordOptions += uppercase;
    }
    //check wantLowercase if yes, add to optionsArray
    if (low) {
        passwordOptions += lowercase;
    }
    //check wantSymbols if yes, add to optionsArray
    if (sym) {
        passwordOptions += symbols;
    }

    console.log(passwordOptions)

    //add random characters to userPassword
    for (let i = 0; i < howLong; i++) {
        userPassword += passwordOptions.charAt(
            Math.floor(Math.random() * passwordOptions.length)
        )
    }

    return userPassword;
}