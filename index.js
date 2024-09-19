const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function calculate(){
    display.value = eval(display.value) //fun thatntakes values and evaluate
}
function clearDisplay(){
    display.value = "";
}