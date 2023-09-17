var label = document.querySelector(".main .output") 

const operations_map = {
    "+": addition,
    "-": subtraction,
    "*": product,
    "/": divide
}

function addition(num1, num2){
    return num1+num2
}   

function subtraction(num1, num2){
    return num1 - num2
}

function product(num1, num2){
    return num1 * num2 
}

function divide(num1, num2){
    if (num2 === 0){
        return "zero division :("
    }
    else{
        return (num1/num2).toFixed(3) 
    }
}

function parseLabel(){

    let re = new RegExp("[+*\/-]")

    numbers = label.textContent.split(re) 
    num1 = parseFloat(numbers[0]) 
    num2 = parseFloat(numbers[1]) 
    operation = label.textContent.match(re) 
    
    label.textContent = executeExpression(num1, num2, operations_map[operation]) 
}

function executeExpression(arg1, arg2, func){
    console.log(func) 
    return func(arg1, arg2) 
}

function clearLabel(){
    label.textContent = ""; 
}

function keyPress(e){
    label.textContent = label.textContent + e.target.textContent; 
}


function main(){
    var keypad = document.querySelector(".main .keypad") 
    keypad.addEventListener('click', keyPress) 

    var operation_pad = document.querySelector(".main .operations") 
    operation_pad.addEventListener('click', keyPress) 

    var clear_button = document.querySelector(".button.clear") 
    clear_button.addEventListener('click', clearLabel) 

    var enter_button = document.querySelector(".button.enter") 
    enter_button.addEventListener('click', parseLabel) 
}

main() 