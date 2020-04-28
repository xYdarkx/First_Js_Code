
function addToEquation(eleObj) {
    document.getElementById("Equation").value += eleObj.value;
}

function AlertResult(){
    document.getElementById("Equation").value = eval(document.getElementById("Equation").value);
}
