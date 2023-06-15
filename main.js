const operators = ['/','x','-','+']
let input = '';
let temp1;
let operator;

function selectValue(e){
    if(input.includes('.') && e.innerText === '.'){ //if there is already a decimal point included, cannot add anymore decimal
        return;
    }
    if(!operators.includes(e.innerText) && e.innerText != '='){ //if the button is not an operator and its not equal
        input += e.innerText;
        displayValue(input);
    }
    else if(operators.includes(e.innerText)){ //if the button is an operator, i want to store the current value and the operator sign
        temp1 = input;
        operator = e.innerText;
        displayValue(input);
        input = '';
    }
    else{   //if it is an equal button
        operate(temp1,input,operator);
    }
}


function displayValue(e){
    document.getElementsByClassName('screen')[0].innerHTML = e; //innerHTML and innerText is the same
}


const operate = (x,y,z) => { //x and y are the operands. z is the operator
    x = parseFloat(x); 
    y = parseFloat(y);
    let result;
    switch(z) {
        case '+':
            result = x+y;
            break;
        case '-':
            result = x-y;
            break;
        case 'x':
            result = x*y;
            break;
        case '/':
            result = x/y;
            break;
    }
    displayValue(result);
}