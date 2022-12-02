
var number1 = parseInt(document.getElementById("demo").innerText);

function addFunc(){
    number1 +=1;
    document.getElementById("demo").innerText=number1;
}

function sub(){
    number1 = number1-1;
    document.getElementById("demo").innerText=number1;
}