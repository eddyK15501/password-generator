// Variables
let charArr = [];
let charLength = 8;

const specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '|', ':', ';', '<', '>', '?', '/'];
const lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const writePassword = () => {
  const correctPrompts = getPrompts();
  const passwordText = document.querySelector("#password");
  
  if (correctPrompts === true) {
    const password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = '';
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate a password
const generatePassword = () => {
  let newPassword = "";

  for(let i = 0; i < charLength; i++) {
    let randomIndex = Math.floor(Math.random() * charArr.length);
    newPassword += charArr[randomIndex];
  }
  return newPassword;
}

// Confirm prompts needed for password
const getPrompts = () => {
  charArr = [];

  charLength = parseInt(prompt("Number of characters? (8 - 128 characters)"));

  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Please enter a number between 8 - 128 characters.");
    return false;
  }

  if (confirm("Would you like lowercase letters in your password?")) {
    charArr = charArr.concat(lowerCaseArr);
  }

  if (confirm("Would you like uppercase letters in your password?")) {
    charArr = charArr.concat(upperCaseArr);
  }

  if (confirm("Would you like special characters in your password?")) {
    charArr = charArr.concat(specialCharArr);
  }

  if (confirm("Would you like numbers in your password?")) {
    charArr = charArr.concat(numArr);
  }

  return true;
}

// Cite Source: https://www.youtube.com/watch?v=v2jfGo7ztm8