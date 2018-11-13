var inquirer = require("inquirer");

function Letter(input){
    console.log("input: " + input);
    this.string = input;
    this.guessed = false;
    this.returnChar = function(){
        if(this.guessed === false){
            this.string = "_";
            return this.string;
        }
        else{
            return this.string;
        }
    }
    this.charCheck = function(inputCheck){
        // inputCheck = this.string;
        if(inputCheck === this.string){
            this.guessed = true;
            console.log("charCheck worked: " + inputCheck);
            return inputCheck;
        }
        else{
            return "You suck";
        }
    }
}

inquirer
    .prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "letterIn"
        }
    ])
    .then(function(inqInput){
        //uses the constructor to save the letter.
        var newLetter = new Letter(inqInput.letterIn);
        console.log("New letter: " + newLetter.string);
        console.log("New letter Return Check: " + newLetter.returnChar());
        console.log("New letter Char Check: " + newLetter.charCheck(inqInput.letterIn));
        console.log("Input letter: " + inqInput.letterIn);
    });