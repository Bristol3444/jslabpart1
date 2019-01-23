'use strict';
//starting variables of wins and player health
let wins = 0;
let grantHP = 10;
let userHP = 40;

let questionOne = prompt("Want to play?"); //first prompt
if (questionOne === "yes") {
    let two = prompt("What is your name?"); //second prompt
    while (wins <= 3) { //repeat the loop as long as a player does not have 3 wins
        console.log(`${two} has ${userHP} left, grant has ${grantHP} left.`);
        if (userHP >= 1) {
            userHP -= Math.floor(Math.random() * 2) + 1;
            grantHP -= Math.floor(Math.random() * 2) + 1;
            if (grantHP <= 0 && wins >= 2) { //if grant's HP is 0 and the user has reached two or more wins, then user wins completely
                console.log(`${two} wins and has defeated grant!`);
                wins++; //incrementing the number of wins until more than 2 is reached.
                break;
            } else if (grantHP <= 0) { // once grant's HP hits zero, mark that the user has won a game (wins++) and play again
                grantHP = 10;
                wins++;
                console.log(`${two} wins`);
            }
        } 
    }
} else { //if the user does not want to play
    console.log("lame.");
    }   