let screen = document.getElementById("display");
let firstoperation;
let currentoperation;
let secondoperation;
let flag = document.querySelectorAll(".onex");
flag.forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("calculate").onclick = one_variable_calculations;
    });
});

function display(num){
  
    screen.value = screen.value + num;

}
function operation(op){
    firstoperation = parseFloat(screen.value);
    currentoperation = op;
    screen.value = '';
}

function calculate(){
    secondoperation = screen.value;
    switch (currentoperation){
        case '+':
            screen.value = parseFloat(firstoperation) + 
            parseFloat(secondoperation);
            break;
        case '-':  
            screen.value = parseFloat(firstoperation) - 
            parseFloat(secondoperation);
            break;
        case '*':
            screen.value = parseFloat(firstoperation) * 
            parseFloat(secondoperation);
            break;
        case '/':
            screen.value = parseFloat(firstoperation) / 
            parseFloat(secondoperation);
            break;
        case '^':
            screen.value = Math.pow(parseFloat(firstoperation),parseFloat(secondoperation));
            break;
        case "ncr":
            screen.value = factorial(firstoperation) / (factorial(secondoperation) * factorial(firstoperation - secondoperation));            
            break;
        case "npr":
            screen.value = factorial(firstoperation) / factorial(firstoperation - secondoperation);
            break;
        
            
    };
    firstoperation = null;
    secondoperation = null;


}

function one_variable_calculations(){
    switch(currentoperation){
        case "sin":
            screen.value = Math.sin(firstoperation);
            break;
        case "cos":
            screen.value = Math.cos(firstoperation);
            break;
        case "tan":
            screen.value = Math.tan(firstoperation);
            break;
        case "fact":
            let a=1;
            for(let i=1;i<=firstoperation;i++){
                a = a * i;
            }
            screen.value = a;
            break;
    }
    firstoperation = null
    document.getElementById("calculate").onclick = calculate;
}
function clearscreen(){
    firstoperation = null;
    secondoperation = null;
    screen.value = '';
}
function factorial(x){
    let a=1;
    for(let i=1;i<=x;i++){
        a = a * i;
    }
    return a;
}
