// Assignment Code
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numb = "0123456789"
var special = "!@#$%^&*"

var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//
function generatePassword(){
  var options = "";
  var capsQ = prompt("Capital Letters? Yes or No");
  var lowerQ = prompt("Lowercase Letters? Yes or No");
  var numbQ = prompt("Numbers? Yes or No");
  var specialQ = prompt("Special characters? Yes or No");
  var passlength = prompt("How many characters?");
  
  //if()
}




for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
return 
