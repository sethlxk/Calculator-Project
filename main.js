const operators = ['/','x','-','+']
let input = ''


function selectValue(e){
    if(input.includes('.') && e.innerText === '.'){ //if there is already a decimal point included, cannot add anymore decimal
        return;
    }
    if(!operators.includes(e.innerText)){ //if the button is not an operator
        input += e.innerText;
    }
    displayValue(input);
}


function displayValue(e){
    document.getElementsByClassName('screen')[0].innerHTML = e; //innerHTML and innerText is the same
}


const operate = (x,y) => {
    
}