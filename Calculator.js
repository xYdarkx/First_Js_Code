// I have never coded in JS before so I did some research and I used my intuation xD
// Test functions area
var A,B,Op;
function OperatorTest(Op,A,B){
    var result;
    if (Op == '+'){
        result = A + B;
    }
    else if (Op == '-'){
        result = A - B;
    }
    else if (Op == '*'){
        result = A * B;
    }
    else if (Op == '/'){
        result = A / B;
    }
    console.log("The result is "+ result);
}
function Welcome_and_input(){
    console.log('Hello,I am your calculator');
     A = prompt("Give me the first number");
     A = parseInt(A);
     B = prompt("Give me the second number");
    B = parseInt(B);
     Op = prompt("What is the operator needed?");
}
function Power(A,B){
    var i; var p =1;
    for (i=1;i<=B; i++){
        p= p*A;
    }
    console.log(A+" Power "+B+ " = "+ p);
}

function Calculator(){
    Welcome_and_input();
    OperatorTest(Op,A,B);
    Power(A,B);
    Power(B,A);
}

function addToEquation(objButton) {
    document.getElementsByName("Equation").value += objButton.value;
}
function AlertResult(){
    Alert(eval(document.getElementsByName("Equation").value));
}

