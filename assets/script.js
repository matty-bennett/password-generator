// Assignment code here
// array containing all possible lowercase characters
var lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// array containing all possible uppercase characters
var upLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// array containing numbers
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
// array containing special characters
var special = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

/* variables for randomizing arrays
var randomLowercase = Math.floor(Math.random() * lowLetters.length);
var randomUppercase = Math.floor(Math.random() * upLetters.lenght);
var randomNumber = Math.floor(Math.random() * numbers.length);
var randomUppercase = Math.floor(Math.random() * special.length); */

// function for prompting users
var userPrompts = function() {
  var promptLength = prompt("How long would you like your password? (between 8-128 characters)");
  if (promptLength >= 8 && promptLength <= 128) {

  var promptLowercase = confirm("Would you like your password to contain lowercase letters?");
  var promptUppercase = confirm("Would you like your password to contain uppercase letters?");
  var promptNumber = confirm("Would you like your password to contain numbers?");
  var promptSpecial = confirm("Would you like your password to contain special characters?");

  generatePassword(promptLength, promptLowercase, promptUppercase, promptNumber, promptSpecial);

  } else {
    alert("Please choose a valid number.");
    userPrompts(); // restarts function for valid input
  }
};

// this function is to store user input into an empty array
var generatePassword = function(promptLength, promptLowercase, promptUppercase, promptNumber, promptSpecial) {
  var userInput = [];
  var output = "";

  if (promptLength === false &&
     promptLowercase === false &&
     promptUppercase === false &&
    promptNumber === false &&
    promptSpecial === false) {
      alert("Please choose at least one character type!");
      userPrompts(); // restarts function for valid input
    };
  
  if (promptLowercase) {
    userInput.push(lowLetters); // push lowercase letters array into userInput array
    console.log(userInput);
  }
  if (promptUppercase) {
    userInput.push(upLetters); // push uppercase letters array into userInput array
    console.log(userInput);
  }
  if (promptNumber) {
    userInput.push(numbers); // push numbers array into userInput array
    console.log(userInput);
  }
  if (promptSpecial) {
    userInput.push(special); // push specials array into userInput array
    console.log(userInput);
  }

  var userInput2 = userInput.flat(); // combine chosen arrays into one array
  console.log(userInput2);

  for (let i = 0; i < promptLength; i++) { // loops as many times as chosen by user
    output = output + userInput2[Math.floor(Math.random() * userInput2.length)].toString(); //randomizes the created array into output
  }

  console.log(output);

  writePassword(output); // populates text area with output result
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(output) {
  var password = output;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", userPrompts);
