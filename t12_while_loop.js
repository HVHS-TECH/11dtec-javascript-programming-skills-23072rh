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
var loop = prompt("Hello welcome to the loop\nWould you like to start the loop?");
/***********************************************************************
 Main code
***********************************************************************/
while (loop != "n") {
    alert("The loop will continue");
    prompt("Hello welcome to the loop\nWould you like to continue the loop?");
}
alert("The loop is now finished");
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