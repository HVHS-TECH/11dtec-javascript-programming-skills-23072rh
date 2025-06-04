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
/*
//userAge variables
let userAge;
var minAge = 0;
var maxAge = 130;
let userAgeIsinvalid = true;
*/
//Debugging variables
const MINAGE = 0;
const MAXAGE = 130;
let userAge;
let userAgeIsInvalid = true;
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
  alert("You are " + userAge + " years old " + userName + ".");
}