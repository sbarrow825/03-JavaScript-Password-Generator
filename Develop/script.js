// Assignment Code
var generateBtn = document.querySelector("#generate");
var passswordLength;
var characterTypes;
var inputLength;
var lowercase;
var uppercase;
var numeric;
var special;
var atLeastOne;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  passswordLength = getPasswordLength();
  characterTypes = getCharacterTypes();
}

function getPasswordLength() {
  inputLength = prompt("Please enter a number to choose the length of your password (Note: must be no less than 8 but no greater than 128)");
  if (inputLength > 128 || inputLength < 8) {
    alert("Invalid input, please enter a length no less than 8 but no greater than 128 for your password");
    return getPasswordLength();
  }
  else {
    return inputLength;
  }
}

function getCharacterTypes() {
  lowercase = confirm("Do you want to include lowercase letters in your password?");
  uppercase = confirm("Do you want to include uppercase letters in your password?");
  numeric = confirm("Do you want to include numbers in your password?");
  special = confirm("Do you want to include special characters in your password?");
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("Invalid inputs, at least one character type must be selected");
    return getCharacterTypes();
  }
  else {
    return [lowercase, uppercase, numeric, special];
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
