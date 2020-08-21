function nameOfFunction(){
    var userNameInsideOfFunction = 'Roger'
    return userNameInsideOfFunction // this returns 'Roger'
}


//     'Roger'
var userNameOutsdieOfFunction = nameOfFunction();

for(var i = 10; i < 100; i = i + 1){
    console.log(i);
}

(5 === 5) true
(5 === '5') false
(5 == '5') true
((2 * 90) === (180) && (false)) false
((2 * 90) === (180) || (false)) true
(true && false) false
