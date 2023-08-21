// Assignment Code provided
var generateBtn = document.querySelector("#generate");

// Function used to generate a random password between 8-128 characters
function createPassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var minLength = 8;
  var maxLength = 128;
  
  var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  
  var password = "";
  
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  
  return password;
}

// Function to write password to the password variable
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener added to generate a random passward when the "generate" button is clicked
generateBtn.addEventListener("click", writePassword);
