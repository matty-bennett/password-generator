// Assignment code here
// array containing all possible lowercase characters
var lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// array containing all possible uppercase characters
var upLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// array containing numbers
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
// array containing special characters
var special = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

var passwordField = [];

var randomLowercase = Math.floor(Math.random() * lowLetters.length);
var randomUppercase = Math.floor(Math.random() * upLetters.lenght);
var randomNumber = Math.floor(Math.random() * numbers.length);
var randomUppercase = Math.floor(Math.random() * special.length);

// function for prompting users
var generatePassword = function() {
  var promptLength = prompt("How long would you like your password? (between 8-128 characters)");
  if (promptLength >= 8 || promptLength <= 128) {

  var promptLowercase = prompt("Would you like your password to contain lowercase letters?");
  var promptUppercase = prompt("Would you like your password to contain uppercase letters?");
  var promptNumber = prompt("Would you like your password to contain numbers?");
  var promptSpecial = prompt("Would you like your password to contain special characters?");
  }

  if (promptLength){

  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
