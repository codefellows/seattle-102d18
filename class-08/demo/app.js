'use strict'

// Wrap this code in a function
// function askUserForName(){
//     var userName = prompt('Please Enter your Name: ');
//     alert('Hello ' + userName);
//     return userName;
// }

// var userName1 = askUserForName();
// var userName2 = askUserForName();

// console.log(userName1);
// console.log(userName2);

// function checkMaster(){
//     if (userName1 === 'Roger'){
//         document.write('<h2>' + 'Welcome Master ' + userName1 + '</h2>')
//     } else {
//         document.write('<h2>' + 'Welcome ' + userName1 + '</h2>')
//     }
// }
// checkMaster();



// function askWhoWins(){
//     var whoWon = prompt('Who will win the war Sith/Jedi');
//     return whoWon;
//     // Jedi
// }
// var askUserWhoWon = askWhoWins() // This is the string Jedi

//                            Jedi
// function writeToWebPage(whoWonTheWar){
//     document.write('<h3>' + whoWonTheWar + '</h3>');
// }
//                  Jedi
// writeToWebPage(askUserWhoWon)

// Create number guessing game 1-100
// give the user 5 chances to guess the correct number
// if they get the right answer tell them
// if they do not get the right answer tell high or low
// after 5 incorrect tries give them the answer

function numberGuessingGame() {
    var correctAnswer = 37;
    var playGame = prompt('Do you want to play a game?');
    while(playGame === 'yes'){
        for (var i = 0; i < 5; i = i + 1){
            var userGuess = parseInt(prompt("Please Enter a number 1-100"));
            if(userGuess === correctAnswer){
                alert('You guessed correct!')
                break;
            } else if (userGuess < correctAnswer){
                alert('You guessed to low')
            } else if (userGuess > correctAnswer){
                alert('You guessed to high')
            }
            if(i === 4){
                alert('The correct answer is ' + correctAnswer);
            }
        }
        playGame = prompt('Do you want to play another game?');
    }
}

numberGuessingGame();