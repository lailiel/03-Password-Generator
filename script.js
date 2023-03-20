// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var characters = '';
  var password = '';

  var passwordLength = window.prompt("Enter password length. (8-128)")
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid length entry");
    return;
  }

  var lowercase = window.confirm("Include lower case letters?")
  var uppercase = window.confirm("Include upper case letters?")
  var numbers = window.confirm("Include numbers ?")
  var symbol = window.confirm("Include special characters?")

  var letterLC = "abcdefghijklmnopqrstuvwxyz";
  var letterUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersChar = "0123456789";
  var specChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  if (lowercase) {
    characters += letterLC;
  }
  if (uppercase) {
    characters += letterUC;
  }
  if (numbers) {
    characters += numbersChar;
  }
  if (symbol) {
    characters += specChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


