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
/***********************************************************************
 Functions
***********************************************************************/

function start() {
    var loop = prompt("Hello welcome to the loop\nWould you like to start the loop?");

    while (loop != "no") {
        alert("The loop will continue");
        prompt("Hello welcome to the loop\nWould you like to continue the loop?");
    }
    alert("The loop is now finished");
}
