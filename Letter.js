
//for testing purposes
var inquirer = require("inquirer");


//constructor function
var Letter = function(inputChar){
    this.letterChar = inputChar;
    this.letterGuess = true;
    this.returnChar = function(){
        var letter1 = "j";
        if(Letter.letterguess = false){
            Letter.letterChar = "_";
        }
        else{
            Letter.letterChar = "j";
            Letter.letterCheck(letterChar);
        }
        console.log("\nletterChar: " + letterChar);
    }
    this.letterCheck = function(arg1){
        if(Letter.letterChar === arg1){
            console.log("\nYou've already guessed: " + Letter.guess);
            Letter.letterGuess = true;
        }
    }
}

inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "letterTest"
        }
    ])
    .then(function(input){
        Letter.returnChar(input.letterTest);
        Letter.letterCheck(input.letterTest);
        console.log("Input letter: " + input.letterTest);
    });


