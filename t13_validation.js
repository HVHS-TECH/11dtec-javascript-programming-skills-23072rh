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

/***********************************************************************
 Main code
***********************************************************************/
var userName;

userName = prompt("What's your name?")
If ((!isNaN(userName)) || userName == null || userName =="" || userName == " ") {
userName = prompt("Inavlid! You must enter a valid name please.");
} else {
alert("Welcome " + userName + " !");
}
/***********************************************************************
 Functions
***********************************************************************/
function start() {


}
