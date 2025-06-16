/***********************************************************************
 Name of task: Learning to allow the user to exit the program by clicking cancel with Java Jcript
 Name: Reuben Holdsworth
 Date written: 15/6/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
/*
console.log("Running t16_cancel_and_exit.js");
/*********************************************************************** 
 Varibles
***********************************************************************/
/*
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
/*
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
/*
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

/***********************************************************************
 Name of task: Learning to get input from an HTML form with Java Jcript
 Name: Reuben Holdsworth
 Date written: 15/6/2025
 Purpose: Practicing with Java Script
 **********************************************************************/
console.log("get input from an HTML form");
/*********************************************************************** 
 Varibles
***********************************************************************/
//userName variable
let userName;
//userAge variables
let userAge;
const MINAGE = 0;
const MAXAGE = 130;
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
    if (userName == null) return;
    getUserAge();
    //Program cancels
    if (userAge == null) return;
    //Code to get old alert onto html page, links to measage area, += adding to the page, <br> making sure it doesnt end up on one line
    document.getElementById("messageArea").innerHTML += "In the store today we have 5 chocolate bars ranging from 1 - 10 dollars:<br>"
        + chocArray[1] + " for " + chocPriceArray[1] + " dollars.<br>"
        + chocArray[2] + " for " + chocPriceArray[2] + " dollars.<br>"
        + chocArray[3] + " for " + chocPriceArray[3] + " dollars.<br>"
        + chocArray[4] + " for " + chocPriceArray[4] + " dollars.<br>"
        + chocArray[5] + " for " + chocPriceArray[5] + " dollars.<br><br>";
    getPocketMoney();
    //Programs cancels
    if (pocketMoney == null) return;
    //Making pocket money to a number so the computer dosnt think its a string (word)
    pocketMoney = Number(pocketMoney);
    //Looking in arrays to see what the most expensive choclate bar the user can afford is
    for (let i = 1; i < chocPriceArray.length; i++) {
        if (pocketMoney >= chocPriceArray[i]) {
            chocolate = chocArray[i];
            price = chocPriceArray[i];
        }
    }
    //Code to get old alert onto html page, links to measage area, += adding to the page, <br> making sure it doesnt end up on one line
    document.getElementById("messageArea").innerHTML +=
        "With the $" + pocketMoney + " you have, you can afford " + chocolate + " for $" + price + ".<br>";
}
/***********************************************************************
 Functions
***********************************************************************/
function getUserName() {
    userName = prompt("What's your name?");
    //Program cancels
    if (userName == null) return;
    //Making sure the user is putting a correct name
    while (userName == "" || userName == " " || !isNaN(userName)) {
        userName = prompt("Invalid! You must enter a valid name please.");
        //Program cancels
        if (userName == null) return;
    }
    //Code to get old alert onto html page, links to measage area, += adding to the page, <br> making sure it doesnt end up on one line
    document.getElementById("messageArea").innerHTML += "Welcome " + userName + "!<br>";
}
function getUserAge() {
    //Making sure the user puts a correct age
    while (userAgeIsInvalid) {
        userAge = prompt("Please enter your age.");
        if (userAge == null) return;
        if (userAge == "" || userAge == " " || isNaN(userAge) || userAge < MINAGE || userAge > MAXAGE) {
            alert("Invalid! You must enter a valid age between " + MINAGE + " and " + MAXAGE);
        } else {
            userAgeIsInvalid = false;
        }
    }
    //Code to get old alert onto html page, links to measage area, += adding to the page, <br> making sure it doesnt end up on one line
    document.getElementById("messageArea").innerHTML +=
        "You are " + userAge + " years old, " + userName + ".<br><br>";
}
function getPocketMoney() {
    pocketMoney = prompt("How much pocket money do you have, " + userName + "?");
    if (pocketMoney == null) return;
    while (isNaN(pocketMoney) || pocketMoney < 1 || pocketMoney > 10) {
        alert("Invalid! Please enter an amount of pocket money between 1 and 10 dollars.");
        pocketMoney = prompt("How much pocket money do you have, " + userName + "?");
        if (pocketMoney == null) return;
    }
}