// Array of special characters to be included in password
var specialCharacters = [
   '@',
   '%',
   '+',
   '\\',
   '/',
   "'",
   '!',
   '#',
   '$',
   '^',
   '?',
   ':',
   ',',
   ')',
   '(',
   '}',
   '{',
   ']',
   '[',
   '~',
   '-',
   '_',
   '.'
 ];
 
 // Array of numeric characters to be included in password
 var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
 
 // Array of lowercase characters to be included in password
 var lowerCasedCharacters = [
   'a',
   'b',
   'c',
   'd',
   'e',
   'f',
   'g',
   'h',
   'i',
   'j',
   'k',
   'l',
   'm',
   'n',
   'o',
   'p',
   'q',
   'r',
   's',
   't',
   'u',
   'v',
   'w',
   'x',
   'y',
   'z'
 ];
 
 // Array of uppercase characters to be included in password
 var upperCasedCharacters = [
   'A',
   'B',
   'C',
   'D',
   'E',
   'F',
   'G',
   'H',
   'I',
   'J',
   'K',
   'L',
   'M',
   'N',
   'O',
   'P',
   'Q',
   'R',
   'S',
   'T',
   'U',
   'V',
   'W',
   'X',
   'Y',
   'Z'
 ];


var generateBtn = document.querySelector("#generate");
function userinputfunction() {
var passwordlength=prompt("How many characters would you like your password to be? Must be no less than 8, and no more than 128.")
if(passwordlength<8 || passwordlength>128){
  alert("This password length is invalid")
  return

} 
var Scharacters=confirm("Would you like to include any special characters?")
var UppercaseC=confirm("Would you like to include capital letters in your password?")
var LowercaseC=confirm("would you like to include lower cased letters in your password?")
var numeric=confirm("Would you like to add any numbers to your password?")
return {passwordlength:passwordlength,Scharacters:Scharacters,UppercaseC:UppercaseC,Lowercasec:LowercaseC,numeric:numeric}
}
function generatePassword(){    
  var userinput=userinputfunction()
  console.log(userinput) 

var possiblecharacters=[]
console.log (possiblecharacters)

if (userinput.Scharacters){
 possiblecharacters=possiblecharacters.concat(specialCharacters)
}
if (userinput.Uppercasec){
  
  possiblecharacters=possiblecharacters.concat(upperCasedCharacters)
}

if (userinput.LowercaseC){
  
  possiblecharacters=possiblecharacters.concat(lowerCasedCharacters)
}

if (userinput.numeric){
  
  possiblecharacters=possiblecharacters.concat(numericCharacters)
}

 console.log (possiblecharacters)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  Math.random().toString(36).slice(2)

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






/*
GIVEN I need a new, secure password 
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria ~
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters ~
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters~
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/

