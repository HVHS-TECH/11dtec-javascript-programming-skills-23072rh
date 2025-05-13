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
var pocketMoney = 5;
/***********************************************************************
 Main code
***********************************************************************/
askUserName(); 
askUserAge(); 
/***********************************************************************
 Functions
***********************************************************************/
function askUserName () {
    askUserName = prompt("Whats your name?");
    alert("Hello " +askUserName+ "!");
}
function askUserAge () {
    askUserAge = prompt("How old are you " +askUserName+ "?");
    alert("You are " +askUserAge+ " years old in " +year+ ".");
}