/***********************************************************************
 Name of task: Learning how to conditional statements (if/else) with Java Jcript
 Name: Reuben Holdsworth
 Date written: 8/5/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
 console.log("Running t07_if.js");
/******** 
 Varibles
********/
//Year 
var Year = 2025;
var Born = 2009;
//Numbers
var Age = 15;
var Num1 = 10;
var Num2 = 2;
var answer;
var Pocketmoney = 5;
/***********************************************************************
 Main code
***********************************************************************/
//Variable logs

//Code
console.log("Hi Reuben");
console.log("As of", Year, "You are", Age);
console.log("You were born in", Born);
answer = Age + Num1;
console.log("In 10 years you will be", answer, "years old")
console.log("You have", Pocketmoney, "dollars");
answer = Pocketmoney / Num2;
console.log("Half of you money is", answer);
//Alerts & Prompts
prompt("Hi ", "Bob");
alert("I predict you were born in " +Born);
alert("Your pocket money right now is " +Pocketmoney+ " dollars");
if(Pocketmoney >= 4) {
alert("You CAN afford a chocolate bar")
}else{
alert("Sorry you CANT afford a chocolate bar")
}



/***********************************************************************
 Functions
***********************************************************************/