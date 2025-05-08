/***********************************************************************
 Name of task: Learning how to conditional statements (if/else) with Java Jcript
 Name: Reuben Holdsworth
 Date written: 8/5/2025
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
//Arrays
let Chocoarray = ["Chocolate is yuck.", "Chocolate is meh.", "Chocolate is pretty good.", "Chocolate is the best thing ever!!!"];
let choice = prompt("Pick a number from 0 to 3");
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

//Alerts & Prompts
prompt("Welcome to my program " +userName+ "!\nHow old are you?", 15);
prompt("Thats great " +userName+ "!\nHow much pocket money do you have?", "5 dollars");
alert("So if I'm not mistaken")
alert("As of " +Year+ " you are " +Age+ " years old\nYou were born in 2009\nIn 10 years you will be 25 years old\nYou have " +Pocketmoney+ " dollars\nHalf of your pocket money is 2.5 dollars");
alert("Your chosen number was " +choice+ ". \nYou think " +Chocoarray[choice]);
/***********************************************************************
 Functions
***********************************************************************/