let screen = document.getElementById("display");
let firstoperation;
let currentoperation;
let secondoperation;
function display(num){
    clr();
    screen.value = screen.value + num;

}
function operation(op){
    currentoperation = op;
    firstoperation = screen.value;
    screen.value = op;
    
}
function clr(){
    screen.value = "";
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
            break
        case '^':
            screen.value = Math.pow(parseInt(firstoperation),parseInt(secondoperation));
            break;
    };
    firstoperation = null;
    secondoperation = null;


}
function del(){
    firstoperation = null;
    secondoperation = null;
    currentoperation = null;
    screen.value = "";
}