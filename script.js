// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordLength = window.prompt("Enter password length. (8-128)")
  if (passwordLength < 8 || passwordLength > 128) {
    var invalid = window.confirm("Invalid length entry")
  
  }


  var letterLC = "abcdefghijklmnopqrstuvwxyz";
  var letterUC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbersChar = "0123456789";
  var specChar = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  
  var lowercase = window.confirm("Include lower case letters?")
  var uppercase = window.confirm("Include upper case letters?")
  var numbers = window.confirm("Include numbers ?")
  var symbol = window.confirm("Include special characters?")

  var includes= "";

  if (lowercase) {
    includes +=letterLC
  }
  if (uppercase) {
    includes +=letterUC
  }
  if (numbers) {
    includes +=numbersChar
  }
  if (symbol) {
    includes +=specChar
  }

  // figure out a way for the length to be equal to the of all icnluded character options.
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * (letterUC.length + letterLC.length + numbersChar.length + specChar.length).length);
    password += includes[randomChar];
  }


for (var i = 0; i < [passwordLength]; i++) {
    console.log(includes);
}

  var password = writePassword() 


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


