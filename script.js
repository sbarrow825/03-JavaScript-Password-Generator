// Assignment Code
var generateBtn = document.querySelector("#generate");
var password;
var finalPassword;
var passwordText;
var passwordLength;
var characterTypes;
var getIncludedCharacters;
var includedCharacters;
var inputLength;
var lowercase;
var uppercase;
var numeric;
var special;
var randomIntInRange;
var specialCharactersArray =  ["\!", "\"", "\#", "\%", "\&", "\'", "\(", "\)", "\*", "\+", "\-", "\.", "\/", "\:", "\;", "\<", "\=", "\>", "\?", "\@", "\[", "\\", "\]", "\^", "\_", "\`", "\{", "\|", "\}", "\~"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allPossibleCharacters = [specialCharactersArray, numbersArray, lowercaseArray, uppercaseArray];

// Write password to the #password input
function writePassword() {
  finalPassword = generatePassword();
  passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Returns the random password fitting the user's specifications of password length and character types.
function generatePassword() {
  passwordLength = getPasswordLength();
  characterTypes = getCharacterTypes();
  includedCharacters = getIncludedCharacters(characterTypes);
  password = "";
  for (i = 0; i < passwordLength; i += 1) {
    randomIntInRange = getRandomInt(0, includedCharacters.length - 1)
    password = password.concat(includedCharacters[randomIntInRange]);
  }
  return password;
}

// Prompts the user to enter a password length >= 8 and <= 128. Continues to prompt the user until a valid input for length is given.
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

// Prompts the user to specify which character types they want in their password, and returns an array of boolean values representing
// the types of characters the user did and didn't want in the order of [special, numeric, lowercase, uppercase].
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
    return [special, numeric, lowercase, uppercase];
  }
}

// Using the array of boolean values from getCharacterTypes(), returns the array of all possible characters that fit the user's specifications
function getIncludedCharacters(characterTypes) {
  includedCharacters = [];
  for (i = 0; i < characterTypes.length; i += 1) {
    if (characterTypes[i]) {
      includedCharacters = includedCharacters.concat(allPossibleCharacters[i]);
    }
  }
  return includedCharacters;
}

// Generates a random integer >= min and <= max. Sourced from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
// used to pick out random characters from the list of all specified characters when writing the password
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
