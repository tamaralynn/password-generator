let wantUppercase = true;
let wantLowercase = false;
let wantNumbers = true;
let wantSymbols = true;

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

console.log(concatSymbols)
console.log(concatNumbers)
console.log(concatNumbers)
console.log(concatUppercase)

//concat to one string of options
let passwordOptions = concatNumbers.concat(concatLowercase, concatUppercase, concatSymbols)