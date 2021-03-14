// Assignment Code]
var generate = document.querySelector('generate')
var inputLength = document.querySelector('input[name="length"]');
var num = document.querySelector('input[name="number"]');
var sym = document.querySelector('input[name="symbol"]');
var upper = document.querySelector('input[name="uppercase"]')
var lower = document.querySelector('input[name="lowercase"]')

const passKeys = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: '*!@#$%^&<>?',
 };

// Add event listener to generate button
generate.addEventListener("click", () => {
  var length = +inputLength.value; 
  var activeLower = lower.checked; 
  var activeUpper = upper.checked; 
  var activeNumber = num.checked; 
  var activeSymbol = sym.checked; 

  generatePassword(activeLower, activeUpper, activeNumber, activeSymbol, length);
}); 
 
  
// Write password to the #password input
function generatePassword(lower, upper, num, sym, length) {
  let main = ""; 
  let finalPassword = ""; 

  const passOptions = {
    lowercase: lower, 
    uppercase: upper, 
    number: num, 
    symbol: sym,
  };

  for (i=0;i<Object.keys(passOptions).length; i++) {
    main += (object.values(passOptions)[i]) ? passKeys[Object.keys(passOptions)[i]] : "";
  }
  if (main = ! "" && length > 0){
    for (i=0;i<length;i++){
      finalPassword +=main[Math.floor(Math.random()* main.length)];
    }
  }     
}