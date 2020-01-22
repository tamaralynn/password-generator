// Assignment Code
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy")

//length first
let howLong = prompt("How long would you like to make you password? (8 to 128 characters)");
let length = parseInt(howLong)
let wantUppercase = confirm("Would you like to include uppercase letters? A, B, C, etc.");
let wantLowercase = confirm("Would you like to include lowercase letters? a, b, c, etc.");
let wantNumbers = confirm("Would you like to include numbers? 1, 2, 3, etc.");
let wantSymbols = confirm("Would you like to include symbols? (, ;, :, etc.");

//if length not 8-128, please no continue
if (length < 8 || length > 128) {
    alert("Please choose a length of 8-128.")
    setTimeout("location.reload(true);", 5)
}

//if no characters selected, no continue
if (!wantUppercase && !wantLowercase && !wantNumbers && !wantSymbols) {
    alert("Please choose at least one character type")
    setTimeout("location.reload(true);", 5)
}

//Set all available options for password in JSON
let allOptions = {
    numbers: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "!#$%&'()*+,-./:;<=>?@[\\\"]^_`{|}~",
};

//set letiables to know what to concat to an all options string
if (wantNumbers) {
    concatNumbers = allOptions.numbers;
} else {
    concatNumbers = ""
}
if (wantUppercase) {
    concatUppercase = allOptions.uppercase;
} else {
    concatUppercase = ""
}
if (wantLowercase) {
    concatLowercase = allOptions.lowercase;
} else {
    concatLowercase = ""
}
if (wantSymbols) {
    concatSymbols = allOptions.symbols;
} else {
    concatSymbols = ""
}

//concat to one string of options
let passwordOptions = concatNumbers.concat(concatLowercase, concatUppercase, concatSymbols)
console.log(passwordOptions);

//generate event listener
generateBtn.addEventListener("click", function() {
    // Write password to the #password input
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
});

function generatePassword(passwordOptions, length) {
    //ADD to new string
    let passwordOut = "";
    for (let i = 0; i < length; i++) {
        passwordOut += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
    }
    return passwordOut;
    console.log(passwordOut)
}



function copyToClipboard() {
    // BONUS 
    document.getElementById("copy").addEventListener("click", function() {
        copyToClipboardMsg(document.getElementById("password"));
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value)
    });
}


// BONUS EVENT LISTENER
//copyBtn.addEventListener("click", copy);