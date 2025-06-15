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
let chocPriceArray = [0, 2, 2.50, 3, 6, 7];
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
      alert("Inavlid! You must enter a valid age between " + MINAGE + " and " + MAXAGE);
    } else {
      userAgeIsInvalid = false;
    }
  }
  userAge = alert("You are " + userAge + " years old " + userName + ".");
  //Telling the user the needed information about the chocolate bars at the store
  alert("In the store today we have 5 chocolate bars ranging from 1 - 10 dollars:\n"
    + chocArray[1] + " for " + chocPriceArray[1] + " dollars.\n"
    + chocArray[2] + " for " + chocPriceArray[2] + " dollars.\n"
    + chocArray[3] + " for " + chocPriceArray[3] + " dollars.\n"
    + chocArray[4] + " for " + chocPriceArray[4] + " dollars.\n"
    + chocArray[5] + " for " + chocPriceArray[5] + " dollars.\n");
  //Asking the user how much pocket money they have
  pocketMoney = prompt("How much pocket money do you have, " + userName + "?");
  while (isNaN(pocketMoney) || pocketMoney < 1 || pocketMoney > 10) {
    alert("Inavlid! Please enter an amount of pocket money between 1 and 10 dollars.");
    pocketMoney = prompt("How much pocket money do you have, " + userName + "?");
  }
//Made pocketMoney into a number so that the computer dosnt get confused thinking prices are words
  pocketMoney = Number(pocketMoney);

  let chocolate = "Nothing";
  let price = 0;

  for (let i = 1; i < chocPriceArray.length; i++) {
    if (pocketMoney >= chocPriceArray[i]) {
      //Made chocolate
      chocolate = chocArray[i];
      price = chocPriceArray[i];
    }
  }

  alert("You can afford" + pocketMoney + ", you can afford: " + chocolate + " which costs $" + price);
}
/*
 chocolate = prompt("How much pocket money do you have " + userName + "?");
 while (chocolate < 1 || chocolate > 5) {
   alert("Sorry we don't have any choclate bars for " + chocolate + " dollars.\nYou must have 1 - 10 dollars in order to by a choclate bar");
   chocolate = prompt("How much pocket money do you have " + userName + "?");
 }
 alert("You can afford " + chocArray[chocolate] + " for " + chocPriceArray[price] + " dollars.");
 */