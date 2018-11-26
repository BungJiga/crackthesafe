// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

var input1 = Math.floor(Math.random() * (4 - 1)) + 1;
var input2 = Math.floor(Math.random() * (4 - 1)) + 1;
var input3 = Math.floor(Math.random() * (4 - 1)) + 1;
var input4 = Math.floor(Math.random() * (4 - 1)) + 1;


console.log(input1);
console.log(input2);
console.log(input3);
console.log(input4);

var numberGuess1 ;
var numberGuess2 ;
var numberGuess3 ;
var numberGuess4 ;
var numbersCorrect = 0;
var numbersInPlace = 0;

$("#verify").click(function(){

numberGuess1 = $("#number1").val();
numberGuess2 = $("#number2").val();
numberGuess3 = $("#number3").val();
numberGuess4 = $("#number4").val();
var combination = numberGuess1 + numberGuess2 + numberGuess3+ numberGuess4;

console.log(combination);

$("#userChoice").text(combination);

numbersCorrect + 1;

if (numberGuess1 = input1){

numbersCorrect + 1;

}

else if (numberGuess2 = input2){

numbersCorrect + 1;

}

else if (numberGuess3 = input3){

numbersCorrect + 1;

}

else if (numberGuess4 = input4){

numbersCorrect + 1;

}






console.log("Correct:" + numbersCorrect);





});



if (numbersCorrect == 1){

$("#results").text("You have" + numbersCorrect + "wrong")

}

else if (numbersCorrect == 2){

$("#results").text("You have" + numbersCorrect + "wrong")

}

else if (numbersCorrect == 3){

$("#results").text("You have" + numbersCorrect + "wrong")

}






// DOCUMENT READY FUNCTION BELOW
