/***********************************************************************
 Name of task: Learning how to use while loops with Java Jcript
 Name: Reuben Holdsworth
 Date written: 27/5/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
console.log("Running t12_while_loop.js");
/*********************************************************************** 
 Varibles
***********************************************************************/

/***********************************************************************
 Main code
***********************************************************************/
/*
while (loop != "n"){
    var loop = prompt("Hello welcome to the loop\nWould you like to start the loop?");
    loop = alert("The loop will continue");
}
alert("The loop is now finished");
*/
var password = prompt("Speak 'friend' and enter");

while (password != "friend"){
    password = alert("That's not the password.\nSpeak 'friend' and enter");
}
alert("Welcome friend!");

/***********************************************************************
 Functions
***********************************************************************/
/*
function start() {
   var loop = prompt("Hello welcome to the loop\nWould you like to start the loop?");
while (loop !="n"){
    loop = alert("The loop will now continue.");
}
alert("The loop is now finished");
}
*/