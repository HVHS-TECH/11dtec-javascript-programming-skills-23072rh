/***********************************************************************
 Name of task: Learning how to use a button to start code with Java Jcript
 Name: Reuben Holdsworth
 Date written: 15/5/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
console.log("Running t10_activate_via_button.js");
/******** 
 Varibles
********/
var year = 2025;
/***********************************************************************
 Main code
***********************************************************************/
var username;
var userAge;
/***********************************************************************
 Functions
***********************************************************************/
function start() {
    userName = askUserName;
    userAge = askUserAge;
    
        var askUserName = prompt("Whats your name?");
        alert("Hello " + askUserName + "!");
   
        var askUserAge = prompt("How old are you " + askUserName + "?");
        alert("You are " + askUserAge + " years old in " + year + ".");

        var pocketMoney = prompt("How much pocket money do you have " + askUserName + "?");
        alert("So " + askUserName + " is " + askUserAge + " years old, and has " + pocketMoney + " dollars of pocket money as of " + year + ".");
        if (pocketMoney >= 4) {
            alert("You CAN afford a chocolate bar " + askUserName + "!");
        } else {
            alert("Sorry you CANT afford a chocolate bar " + askUserName + ".");
        }
}