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
  var capsQ = prompt("Capital Letters? yes or no");
  var capsQlower = capsQ.toLowerCase()
    if(capsQlower === "yes"){
    options += caps;
  }
  var lowerQ = prompt("Lowercase Letters? yes or no");
  var lowerQlower = lowerQ.toLowerCase()
    if(lowerQlower === "yes") {
      options += lower;
    }
  var numbQ = prompt("Numbers? Yes or No");
  var numbQlower = numbQ.toLowerCase()
    if(numbQlower === "yes"){
      options += numb
    }
  var specialQ = prompt("Special characters? Yes or No");
  var specialQlower = specialQ.toLowerCase()
    if(specialQlower === "yes"){
      options += special
    }
  var passlength = prompt("How many characters?");
  var password = ""

  for (let index = 0; index < passlength; index++) {
  const chaos = Math.floor(Math.random() * options.length);
  password += options.substring(chaos, chaos +1);
  
}
return password

}




