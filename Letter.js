
//for testing purposes
var inquirer = require("inquirer");


//constructor function
var Letter = function(letter){
    this.letterChar = letter;
    this.letterGuess = false;
    this.returnChar = function(){
        if(Letter.letterguess = false){
            letterChar = "_";
        }
        else{
            letterChar = letter;
        }
        console.log("\nletterChar: " + letterChar);
    }
    this.letterCheck = function(arg1){
        if(Letter.guess === arg1){
            console.log("\nYou've already guessed: " + Letter.guess);
            Letter.letterGuess = true;
        }
    }

}

inquirer.prompt(["Questions"]).then(answers => {

});