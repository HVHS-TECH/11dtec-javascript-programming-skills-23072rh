/***********************************************************************
 Name of task: Learning how to use for loops with Java Jcript
 Name: Reuben Holdsworth
 Date written: 13/5/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
console.log("Running t09_functions.js");
/******** 
 Varibles
********/
var year = 2025;
/***********************************************************************
 Main code
***********************************************************************/
askUserName();
askUserAge();
askUserMoney();
/***********************************************************************
 Functions
***********************************************************************/
function askUserName() {
    askUserName = prompt("Whats your name?");
    alert("Hello " + askUserName + "!");
}
function askUserAge() {
    askUserAge = prompt("How old are you " + askUserName + "?");
    alert("You are " + askUserAge + " years old in " + year + ".");
}
function askUserMoney() {
    var pocketMoney = askUserMoney = prompt("How much pocket money do you have " + askUserName + "?");
    alert("So " + askUserName + " is" + askUserAge + " years old, and has " + pocketMoney + " dollars of pocket money as of " + year);
    if (pocketMoney >= 4) {
        alert("You CAN afford a chocolate bar");
    } else {
        alert("Sorry you CANT afford a chocolate bar");
    }
}