// Array of special characters to be included in password
const specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
const lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Array of uppercase characters to be included in password
const upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


let passwordButton = document.getElementById('generate');
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let checkedCharacters = document.querySelector("input").value;



function checkCharacterSet (passwordOptions) {
 const checkboxes = document.querySelectorAll('input[name="option"]:checked');
   
   checkboxes.forEach((checkbox) => {
    passwordOptions.push(checkbox.value);
   });
     return passwordOptions;
}

// console.log(checkedCharacters);

let possibleCharacters = {
  specialCharacters: false,
  numericCharacters: false,
  lowerCasedCharacters: false,
  upperCasedCharacters: false
}


// Output numerical value of range slider on page
output.textContent = slider.value;
slider.oninput = function() {
  output.textContent = this.value;
}


// Handle Generate Password Button Click
function passwordClick() {
  let passwordOptions = [];
  console.log("It's working");
  possibleCharacterSet = checkCharacterSet(passwordOptions)
  console.log(possibleCharacterSet);
}


//Event listener for password button
passwordButton.addEventListener("click", passwordClick);
