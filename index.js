const display= document.getElementById('display');

function appendToDisplay(input) {
display.value += input;
}

function clearDispaly(){
display.value = '';
}


function calcule(){
    display.value = eval(display.value);

}