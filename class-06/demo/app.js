'use strict'

var userName = prompt('Please Enter your Name: ');

alert('Hello ' + userName);

if (userName === 'Roger'){
    document.write('<h2>' + 'Welcome Master ' + userName + '</h2>')
} else {
    document.write('<h2>' + 'Welcome ' + userName + '</h2>')
}

