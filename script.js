let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let decimal = document.getElementById('decimal');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let equals = document.getElementById('equals');
let back = document.getElementById('back');
let clear = document.getElementById('clear');
let current = document.getElementById('current');

let firstNum = [];
let secondNum = [];
let operator = [];
let display1 = ""
let display2 = ""
let firstJoined = firstNum.join('');
let secondJoined = secondNum.join('');
let result;

function updateScreen() {
    if (firstNum.length > 0 && operator.length > 0) {
        current.textContent = secondJoined;
    } else {
        current.textContent = firstJoined;
    }
    console.log(parseFloat(firstNum.join('')))
  };

function pushToArrays(num) {
    if (secondNum.length === 0 && operator.length === 0 && firstNum.length < 9) {
        if (firstNum.length === 1 && firstNum[0] === 0) {
            firstNum.pop();
            firstNum.push(num);
        } else {
            firstNum.push(num);
        }
      firstJoined = firstNum.join('');
    } else if (operator.length > 0 && secondNum.length === 1 && secondNum[0] === 0){
        secondNum.pop()
        secondNum.push(num)
        secondJoined = secondNum.join('');
        } else if (operator.length > 0 && secondNum.length < 9) {
      secondNum.push(num);
      secondJoined = secondNum.join('');
    }
    updateScreen();
  };

  function pushDecimal() {
    if (secondNum.length === 0 && operator.length === 0 && firstNum.length < 9) {
      if (firstNum.length === 0) {
        firstNum.push(0);
        firstNum.push('.');
      } else if (!firstNum.includes('.')) {
        firstNum.push('.');
      }
      firstJoined = firstNum.join(''); // Update firstJoined variable
    } else if (operator.length > 0 && secondNum.length < 9) {
        if (secondNum.length === 0) {
            secondNum.push(0);
            secondNum.push('.');
          } else if (!secondNum.includes('.')) {
            secondNum.push('.');
          }
          secondJoined = secondNum.join(''); //update secondJoined
    }
    updateScreen();
  }

  function delAll() {
    firstNum = [0];
    secondNum = [];
    operator = [];
    firstJoined = firstNum.join(''); // Update firstJoined variable
    secondJoined = secondNum.join(''); // Update secondJoined variable
    updateScreen();
  }

  function backSpace() {
    if (secondNum.length === 0 && operator.length === 0) {
        firstNum.pop();
        firstJoined = firstNum.join('');
      } else {
        secondNum.pop();
        secondJoined = secondNum.join('');
      }
      updateScreen();
    };

  function pushZero() {
    if (secondNum.length === 0 && operator.length === 0 && firstNum.length < 9) {
        if ((firstNum.length > 0 && firstNum[0] !== 0) || firstNum[1] == "." || firstNum.length === 0) {
            firstNum.push(0);
        }
        firstJoined = firstNum.join('');
      } else if (operator.length > 0 && secondNum.length < 9) {
        if ((secondNum.length > 0 && secondNum[0] !== 0) || secondNum[1] == "." || secondNum.length === 0) {
            secondNum.push(0);
      }
      secondJoined = secondNum.join('');
    }
      updateScreen();
  }

function pushToOperator(op) {
if (operator.length > 0 && firstNum.length > 0 && secondNum.length > 0) {
    operate(parseFloat(firstNum.join('')), parseFloat(secondNum.join('')), operator[0]);
    operator.pop();
    operator.push(op);
}
else if (operator.length === 0 && firstNum.length > 0) {
    operator.push(op);
} else if (operator.length > 0 && firstNum.length > 0 && secondNum.length == 0) {
    operator.pop();
    operator.push(op);
}
}

function operate(num1, num2, sign) {
    if (isNaN(num2) || typeof num2 === 'undefined') {
        num2 = num1;
    }
    if (sign === '+') {
        result = num1 + num2;
    } else if (sign === '-') {
       result = num1 - num2;
    } else if (sign === '*') {
        result = num1 * num2;
    } else if (sign === '/') {
        if (num2 <= 0 || isNaN(num2)) {
            alert("You know you cant do that!");
            return;
        } else {
            result = num1 / num2;
        }
    }
    result = result.toString().substring(0, 9);
    secondNum = [...result.toString()].map(char => char === '.' ? char : parseInt(char));
    secondJoined = secondNum.join('');
    updateScreen();
    firstNum = secondNum;
    secondNum = [];
}

one.addEventListener('click', function() { pushToArrays(1); });
two.addEventListener('click', function() { pushToArrays(2); });
three.addEventListener('click', function() { pushToArrays(3); });
four.addEventListener('click', function() { pushToArrays(4); });
five.addEventListener('click', function() { pushToArrays(5); });
six.addEventListener('click', function() { pushToArrays(6); });
seven.addEventListener('click', function() { pushToArrays(7); });
eight.addEventListener('click', function() { pushToArrays(8); });
nine.addEventListener('click', function() { pushToArrays(9); });
zero.addEventListener('click', function() { pushZero(); });
decimal.addEventListener('click', function() { pushDecimal(); });
clear.addEventListener('click', function() { delAll(); });
back.addEventListener('click', function() { backSpace(); });
plus.addEventListener('click', function() { pushToOperator('+'); });
minus.addEventListener('click', function() { pushToOperator('-'); });
multiply.addEventListener('click', function() { pushToOperator('*'); });
divide.addEventListener('click', function() { pushToOperator('/'); });
equals.addEventListener('click', function() { operate(parseFloat(firstNum.join('')), parseFloat(secondNum.join('')), operator[0]); });