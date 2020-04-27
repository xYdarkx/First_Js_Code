
function addToEquation(eleObj) {
    document.getElementById("Equation").value += eleObj.value;
}

function AlertResult(){
    alert(eval(document.getElementById("Equation").value));
}
