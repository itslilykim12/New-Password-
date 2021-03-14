// Assignment Code]
const passwordDisplay = document.getElementById('password');
const symbols = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const length = document.getElementById('length');
const numbers = document.getElementById('numbers');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');

const passKeys = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '*!@#$%^&<>?'
}

// Write password to the #password input
function generatePassword(lowercase, uppercase, number, symbol, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", e => {
  e.preventDefault()
  const length = length.value
  const includeSymbols = includeSymbolsElement.checked
  const includeNums = numbers.checked
  const includeUpper = uppercase.checked
  const includerLower = lowercase.checked
  console.log(length,includeSymbols, includeNums, includeUpper, includerLower)
  const password = generatePassword(length, includeSymbols, includeNums, includeUpper, includerLower);
  passwordText.value = password;
}); 




