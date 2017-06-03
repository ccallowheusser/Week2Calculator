// this uses old style javascript ES5

var leftHand = '';
var operator = '';
var rightHand = '';
var result = '';
var equation = '';

var clearButton = document.getElementById('clear_button');
var equalButton = document.getElementById('equal_button');
var numberButton = document.getElementsByClassName('number_button');
var operatorButton = document.getElementsByClassName('op_button');
var screen = document.getElementById('screen');

// TODO: wire up clear button event listener

// TODO: setscreen should probably know how to set teh screen to the result
// HINT: pass an argument to this function
function setScreen(txt) {
	screen.innerText = txt;
}

for (var i = 0; i < operatorButton.length; i++) {
	var button = operatorButton[i];
	button.addEventListener('click', function() {
		if (leftHand && rightHand) {
			alert('Do the Math!');
		} else if (leftHand) {
			operator = this.innerText;
			setScreen(leftHand + ' ' + operator);
		} else {
			alert('Enter a number first.');
		}
	});
	
}

for (var i = 0; i < numberButton.length; i++) {
	var button = numberButton[i];
	button.addEventListener('click', function() {
		if (operator.length) {
			rightHand += this.innerText;
			setScreen(leftHand + ' ' + operator + ' ' + rightHand);
		} else {
			leftHand += this.innerText;
			setScreen(leftHand)
		}
	});
}

equalButton.addEventListener('click', function() {
	if(leftHand && operator && rightHand) {
		switch(operator) {
			case '+':
				result = parseFloat(leftHand) + parseFloat(rightHand);
				break;
			case '-':
				result = parseFloat(leftHand) - parseFloat(rightHand);
				break;
			case '*':
				result = (parseFloat(leftHand) * parseFloat(rightHand)).toPrecision(8);
				break;
			case '/':
				if (rightHand != 0) {
					result = (parseFloat(leftHand) / parseFloat(rightHand)).toPrecision(8);
				} else {
					alert('Oops! You cannot divide by 0! Clear and try again.');
				}
				break; 
			default: 
				alert('Invalid Operator');
		}
		setScreen(leftHand + ' ' + operator + ' ' + rightHand + ' = ' + result);
	} else {
		// Tell the user what is missing
		equation = 'Oops, get it right! Enter a valid equation!\n';
		equation = equation + "You've entered:\t" + leftHand + operator + rightHand + "\n";
		if (!leftHand) {
			equation = equation + 'You need to enter a number to the left of the operator.\n';
		};
		if (!operator) {
			equation = equation + 'You need to enter an operator.\n';
		};
		if (!rightHand) {
			equation = equation + 'You need to enter a number to the right of the operator.';
		};
		alert(equation);
	}
});

clearButton.addEventListener('click', function() {
	leftHand = '';
	operator = '';
	rightHand = '';
	result = '';
	screen.innerText = 'Enter an Expression';
});