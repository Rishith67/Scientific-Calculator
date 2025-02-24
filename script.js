let screen = document.getElementById("display");
let firstoperation;
let currentoperation;
let secondoperation;

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
            screen.value = parseInt(firstoperation) + 
            parseInt(secondoperation);
            break;
        case '-':  
            screen.value = parseInt(firstoperation) - 
            parseInt(secondoperation);
            break;
        case '*':
            screen.value = parseInt(firstoperation) * 
            parseInt(secondoperation);
            break;
        case '/':
            screen.value = parseInt(firstoperation) / 
            parseInt(secondoperation);
            break;
        case '^':
            screen.value = Math.pow(parseInt(firstoperation),parseInt(secondoperation));
            break;
    };
    firstoperation = null;
    secondoperation = null;


}
function clearscreen(){
    firstoperation = null;
    secondoperation = null;
    screen.value = '';
}
