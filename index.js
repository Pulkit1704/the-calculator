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

    result = executeExpression(num1, num2, operations_map[operation])

    if(result === 42){
        label.textContent = "The question remains unanswered ;)"
    }else{
        label.textContent = result; 
    }
}

function executeExpression(arg1, arg2, func){
    return func(arg1, arg2) 
}

function clearLabel(){
    label.textContent = ""; 
}

function keyPress(e){
    label.textContent = label.textContent + e.target.textContent; 
}

function handle_keystrokes(e){

    if(e.key >= 0 && e.key <= 9){
        label.textContent = label.textContent + String(e.key) 
        return 
    }

    switch (e.key){
        case "Enter":
            parseLabel()
            break
        case "Backspace":
            clearLabel()
            break
        case "+":
            label.textContent = label.textContent + "+"
            break 
        case "-":
            label.textContent = label.textContent + "-"
            break 
        case "*":
            label.textContent = label.textContent + "*"
            break 
        case "/": 
            label.textContent = label.textContent + "/"
            break 
        case ".":
            label.textContent = label.textContent + "."
            break 
        default: 
            return 
    }
}


function main(){

    window.addEventListener("keydown", handle_keystrokes) 

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