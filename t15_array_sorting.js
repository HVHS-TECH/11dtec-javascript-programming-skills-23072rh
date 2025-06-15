/***********************************************************************
 Name of task: Learning to use the whole extent of an array with Java Jcript
 Name: Reuben Holdsworth
 Date written: 15/6/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
console.log("Running t15_array_sorting.js");
/*********************************************************************** 
 Varibles
***********************************************************************/
//userName variable
let userName;
//userAge variables
let userAge;
const MINAGE = 0; //Changed this because it's hardcoded
const MAXAGE = 130; //Changed this because it's hardcoded
let userAgeIsInvalid = true;
//Pocket money variables
let pocketMoney;
//Choclate bars array
let chocArray = ["Nothing", "The Mars bar", "The Moro bar", "The King size crunchy", "The Dairy milk block", "The Lindt block"];
//Users choice of chocolate
let chocolate;
//Choclate bars price array
let chocPriceArray = ["0", "2.00", "2.50", "3.00", "6.00", "7.00"];
//The price of chocolate
let price;
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
    if (userAge == null || userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE) {
      alert("Invalid input: you must enter a valid age between " + MINAGE + " and " + MAXAGE);
    } else {
      userAgeIsInvalid = false;
    }
  }
  userAge = alert("You are " + userAge + " years old " + userName + ".");
  //Telling the user the needed information about the chocolate bars at the store
  alert("In the store today we have 5 chocolate bars ranging from 1 - 5 dollars:\n");
  //Asking the user how much pocket money they have
  chocolate = prompt("How much pocket money do you have " + userName + "?");
  while (chocolate < 1 || chocolate > 5) {
    alert("Sorry we don't have any choclate bars for " + pocketMoney + " dollars.\nYou must have 1 - 5 dollars in order to by a choclate bar");
    chocolate = prompt("How much pocket money do you have " + userName + "?");
  }
  alert("You can afford " + chocArray[chocolate] + " from the store");
}