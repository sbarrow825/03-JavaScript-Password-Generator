// Assignment Code
var generateBtn = document.querySelector("#generate");
var password;
var passwordText;
var passswordLength;
var characterTypes;
var getIncludedCharacters;
var includedCharacters = [];
var inputLength;
var lowercase;
var uppercase;
var numeric;
var special;
var atLeastOne;
var specialCharactersArray =  ["\!", "\"", "\#", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allPossibleCharacters = [specialCharactersArray, numbersArray, lowercaseArray, uppercaseArray];

console.log(specialCharacters[0]);
// Write password to the #password input
function writePassword() {
  password = generatePassword();
  passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  passswordLength = getPasswordLength();
  characterTypes = getCharacterTypes();
  includedCharacters = getIncludedCharacters(characterTypes);

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

function getIncludedCharacters(characterTypes) {
  for (i = 0; i < characterTypes.length; i += 1) {
    if (characterTypes[i]) {
      includedCharacters.concat(allPossibleCharacters[i]);
    }
  }
  return includedCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
