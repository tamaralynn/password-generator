// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

//length first
let length = parseInt(prompt("How long would you like to make you password? (8 to 128 characters)"));

//now character confirmations
let wantUppercase = confirm("Would you like to include uppercase letters? A, B, C, etc.");
let wantLowercase = confirm("Would you like to include lowercase letters? a, b, c, etc.");
let wantNumbers = confirm("Would you like to include numbers? 1, 2, 3, etc.");
let wantSymbols = confirm("Would you like to include symbols? (, ;, :, etc.");

//Set all available options for password in JSON
let allOptions = {
    numbers: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "!#$%&'()*+,-./:;<=>?@[\\\"]^_`{|}~",
};

//if length not 8-128, please no continue
if (length < 8 || length > 128) {
    alert("Please choose a length of 8-128.");
    setTimeout("location.reload(true);", 5);
};
//if no characters selected, no continue
if (!wantUppercase && !wantLowercase && !wantNumbers && !wantSymbols) {
    alert("Please choose at least one character type");
    setTimeout("location.reload(true);", 5);
};

//concat to one string of options
let passwordOptions = "";
if (wantNumbers) {
    passwordOptions += allOptions.numbers;
};
if (wantUppercase) {
    passwordOptions += allOptions.uppercase;
};
if (wantLowercase) {
    passwordOptions += allOptions.lowercase;
};
if (wantSymbols) {
    passwordOptions += allOptions.symbols;
};

//copy to clipboard function
function copyToClipboard() {
    // BONUS 
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

//Write password string
function generatePassword(passwordOptions, length) {
    //ADD to new string
    let password = "";
    for (let i = 0; i < length; i++) {
        password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
    }
    return password;
    console.log(password)
};

// Write password to the #password input
function writePassword(password) {

    console.log(password);
    let passwordEl = document.querySelector("#password");

    passwordEl.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

//generate event listener
generateBtn.addEventListener("click", function() {
    writePassword(generatePassword(passwordOptions, length))
});

document.getElementById("copy").addEventListener("click", function() {
    copyToClipboard();
});