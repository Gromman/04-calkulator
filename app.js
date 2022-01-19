//var plus = document.getElementById("plus");
//var minus = document.getElementById("minus");
//var multiply = document.getElementById("multiply");
//var devide = document.getElementById("devide");

//var operationButtons = [plus, minus, multiply, devide];

var operationButtons = document.getElementsByClassName("operation-button");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function makeOpertion(operationCode) {
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);

	if (operationCode==="+") {
	var result = number1 + number2;
	} else if (operationCode==="-") {
	var result = number1 - number2;
	} else if (operationCode==="*") {
	var result = number1 * number2;
	} else if (operationCode==="/") {
	var result = number1 / number2;
	}
		window.alert(result);
}

function onOperationButtonClick (eventObject) {
	var clickedElement = eventObject.currentTarget;
	var operation = clickedElement.innerHTML;
	makeOpertion(operation);
}


for (var i=0; i< operationButtons.length; i++){
	var button = operationButtons[i];
	button.addEventListener("click", onOperationButtonClick);
}
