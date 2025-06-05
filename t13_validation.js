/***********************************************************************
 Name of task: Learning how to validate code with Java Jcript
 Name: Reuben Holdsworth
 Date written: 28/5/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
console.log("Running t13_validation.js");
/*********************************************************************** 
 Varibles
***********************************************************************/
//userName variable
let userName;
//userAge variables
let userAge;
const minAge = 0;
const maxAge = 130;
let userAgeIsInvalid = true;
//Pocket money variables
let pocketMoney;
/***********************************************************************
 Main code
***********************************************************************/
/* 
<div class="w3-container">
    <h1>Java script button</h1>
    <button class="w3 button" type="button" onclick="start();">START</button>
  </div>
*/
/***********************************************************************
 Functions
***********************************************************************/
function start() {
  //Asking the user what their name is
  userName = prompt("What's your name?")
  while (userName == null || userName == "" || userName == " " || !isNaN(userName)) {
    userName = prompt("Inavlid! You must enter a valid name please.");
  }
  alert("Welcome " + userName + "!");
  //Asking the user how old they are
  while (userAgeIsInvalid) {
    userAge = prompt("Please enter your age.");
    if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < minAge || userAge > maxAge) {
      alert("Invalid input: you must enter a valid age between " + minAge + " and " + maxAge);
    } else {
      userAgeIsInvalid = false;
    }
  }
  alert("You are " + userAge + " years old " + userName + ".");
  //Telling the user the needed information about the chocolate bars at the store
  alert("In the store today we have 5 chocolate bars ranging from 1 - 5 dollars:\nMars bar-$1\nMoro bar-$2\nKing Size Crunchy-$3\nDairy Milk Block-$4\nLindt Block-$5");
  //Asking the user how much pocket money they have
  pocketMoney = prompt("How much pocket money do you have " + userName + "?");
  alert("So " + userName + " has " + pocketMoney + " dollars.");
}