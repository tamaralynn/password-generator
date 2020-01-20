// Assignment Code
var generateBtn = document.querySelector("#generate");
var howLong = prompt("How long would you like to make you password? (8 to 128 characters)");
var wantUppercase = confirm("Would you like to include uppercase letters? A, B, C, etc.");
var wantLowercase = confirm("Would you like to include lowercase letters? a, b, c, etc.");
var wantNumbers = confirm("Would you like to include numbers? 1, 2, 3, etc.");
var wantSymbols = confirm("Would you like to include symbols? (, ;, :, etc.")

userPassword = "";
passwordOptions = "";

//Function addToArray?
function addToOptions(wantNumbers, uppercaseInput, lowercaseInput, wantSymbols, numbers, uppercase, lowercase, symbols) {

    //check wantNumbers if yes, push to optionsArray
    if (wantNumbers.checked) {
        passwordOptions += numbers;
    }

    //check wantUppercase if yes, push to optionsArray
    if (uppercaseInput.checked) {
        passwordOptions += uppercase;
    }

    //check wantLowercase if yes, push to optionsArray
    if (lowercaseInput.checked) {
        passwordOptions += lowercase;
    }

    //check wantSymbols if yes, push to optionsArray
    if (wantSymbols.checked) {
        passwordOptions += symbols;
    }
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
    document.getElementById("copy").addEventListener("click", function() {
        copyToClipboardMsg(document.getElementById("password"), "msg");
    });
}

// Add event listener to generate button
generateBtn.addEventListener("click", );

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copy);

function copy() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}