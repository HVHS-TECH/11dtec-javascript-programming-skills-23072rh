/***********************************************************************
 Name of task: Learning to allow the user to exit the program by clicking cancel with Java Jcript
 Name: Reuben Holdsworth
 Date written: 15/6/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
console.log("Running t16_cancel_and_exit.js");
/*********************************************************************** 
 Varibles
***********************************************************************/
//userName variable
let userName;
//userAge variables
let userAge;
const MINAGE = 0; //Changed this because it's hardcoded
const MAXAGE = 130; //Changed this because it's hardcoded
let userAgeIsInvalid = true;
//Pocket money variables
let pocketMoney;
//Choclate bars array
let chocArray = ["nothing", "The Mars bar", "The Moro bar", "The King size crunchy", "The Dairy milk block", "The Lindt block"];
//Users choice of chocolate
//Chocolate is "Nothing" because we don't know how much pocket money the user has, and what they can afford
let chocolate = "nothing";
//Choclate bars price array
//The contents of the array doesn't have strings because prices are numbers not words
let chocPriceArray = [0, 2, 2.50, 3, 6, 7];
//The price of chocolate
//Price is zero because we don't know how much pocket money the user has, and what they can afford
let price = 0;
/***********************************************************************
 Main code
***********************************************************************/
function start() {
    getUserName();
    //Program cancels
    if (userName == null) {
        return;
    }
    getUserAge();
    //Program cancels
    if (userAge == null) {
        return;
    }
    //Telling the user the needed information about the chocolate bars at the store
    alert("In the store today we have 5 chocolate bars ranging from 1 - 10 dollars:\n"
        + chocArray[1] + " for " + chocPriceArray[1] + " dollars.\n"
        + chocArray[2] + " for " + chocPriceArray[2] + " dollars.\n"
        + chocArray[3] + " for " + chocPriceArray[3] + " dollars.\n"
        + chocArray[4] + " for " + chocPriceArray[4] + " dollars.\n"
        + chocArray[5] + " for " + chocPriceArray[5] + " dollars.\n");
    getPocketMoney();
    //Program cancels
    if (pocketMoney == null) {
        return;
    }
    //Made pocketMoney into a number so that the computer doesnt get confused thinking prices are words
    pocketMoney = Number(pocketMoney);
    //Using the loop to go through arrays to see what the user can afford
    for (let i = 1; i < chocPriceArray.length; i++) {
        if (pocketMoney >= chocPriceArray[i]) {
            //Made chocolate and price have the values of the arrays
            chocolate = chocArray[i];
            price = chocPriceArray[i];
        }
    }
    alert("With the " + pocketMoney + " dollars you have, you can afford " + chocolate + " for " + price + " dollars.");
}
/***********************************************************************
 Functions
***********************************************************************/
function getUserName() {
    //Asking the user what their name is
    userName = prompt("What's your name?")
    //Program cancels
    if (userName == null) {
        return;
    }
    while (userName == "" || userName == " " || !isNaN(userName)) {
        userName = prompt("Inavlid! You must enter a valid name please.");
    }
    alert("Welcome " + userName + "!");
}
function getUserAge() {
    let userAgeIsInvalid = true;
    //Asking the user how old they are
    while (userAgeIsInvalid) {
        userAge = prompt("Please enter your age.");
        //Program cancels
        if (userAge == null) {
            return;
        }
        if (userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE) {
            alert("Inavlid! You must enter a valid age between " + MINAGE + " and " + MAXAGE);
            userAge = prompt("Please enter your age.");
            //Program cancels
            if (userAge == null) {
                return;
            }
        } else {
            userAgeIsInvalid = false;
        }
    }
    alert("You are " + userAge + " years old " + userName + ".");
}
function getPocketMoney() {
    //Asking the user how much pocket money they have
    pocketMoney = prompt("How much pocket money do you have, " + userName + "?");
    //Program cancels
    if (pocketMoney == null) {
        return;
    }
    while (isNaN(pocketMoney) || pocketMoney < 1 || pocketMoney > 10) {
        alert("Inavlid! Please enter an amount of pocket money between 1 and 10 dollars.");
        pocketMoney = prompt("How much pocket money do you have, " + userName + "?");
        //Program cancels
        if (pocketMoney == null) {
            return;
        }
    }
}