/***********************************************************************
 Name of task: Learning how to make alerts and prompts pop up in Java Script
 Name: Reuben Holdsworth
 Date written: 2/5/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
 console.log("Running t01_alerts_prompts.js");
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
//Prompts

/***********************************************************************
 Main code
***********************************************************************/
//Variable logs
console.log (Year);
console.log (Age);
console.log (Pocketmoney);
//Alerts & Prompts variables
var userName = prompt("Welcome to my Alerts & Prompts page!\nPlease enter your name.", "Bob")
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
prompt("Welcome to my program " +userName+ "!\nHow old are you?", 15);
prompt("Thats great " +userName+ "!\nHow much pocket money do you have?", "5 dollars");
alert("So if I'm not mistaken")
alert("As of " +Year+ " you are " +Age+ " years old\nYou were born in 2009\nIn 10 years you will be 25 years old\nYou have " +Pocketmoney+ " dollars\nHalf of your pocket money is 2.5 dollars");
/***********************************************************************
 Functions
***********************************************************************/