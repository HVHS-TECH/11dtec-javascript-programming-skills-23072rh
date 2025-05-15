/***********************************************************************
 Name of task: Learning how to create functions to sort code with Java Jcript
 Name: Reuben Holdsworth
 Date written: 14/5/2025
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
let userName;
let userAge;
let userMoney;
start();

/***********************************************************************
 Functions
***********************************************************************/
function start () {
    userName = askUserName();
    userAge = askUserAge();
    userMoney = askMoney();
}
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
    alert("So " + askUserName + " is " + askUserAge + " years old, and has " + pocketMoney + " dollars of pocket money as of " + year + ".");
    if (pocketMoney >= 4) {
        alert("You CAN afford a chocolate bar " + askUserName + "!");
    } else {
        alert("Sorry you CANT afford a chocolate bar " + askUserName + ".");
    }
}