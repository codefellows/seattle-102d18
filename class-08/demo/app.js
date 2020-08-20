'use strict'

// Wrap this code in a function
function askUserForName(){
    var userName = prompt('Please Enter your Name: ');
    alert('Hello ' + userName);
    return userName;
}

var userName1 = askUserForName();
var userName2 = askUserForName();

console.log(userName1);
console.log(userName2);

function checkMaster(){
    if (userName1 === 'Roger'){
        document.write('<h2>' + 'Welcome Master ' + userName1 + '</h2>')
    } else {
        document.write('<h2>' + 'Welcome ' + userName1 + '</h2>')
    }
}
checkMaster();



function askWhoWins(){
    var whoWon = prompt('Who will win the war Sith/Jedi');
    return whoWon;
    // Jedi
}
var askUserWhoWon = askWhoWins() // This is the string Jedi

//                            Jedi
function writeToWebPage(whoWonTheWar){
    document.write('<h3>' + whoWonTheWar + '</h3>');
}
//                  Jedi
writeToWebPage(askUserWhoWon)

