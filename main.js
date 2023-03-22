
const buttonNumbers = document.querySelectorAll(".number");
const inputText = document.querySelector("#inputText");
const multiply = document.querySelector(".multiplybtn");
const result = document.querySelector(".resultbtn");
const reset = document.querySelector(".resetbtn");
const division = document.querySelector(".divisionbtn");
const sum = document.querySelector(".sumbtn");
const rest = document.querySelector(".restbtn");
const operatorButtons = document.querySelectorAll(".operatorButtons");

let numberOne = '';
let numberTwo = '';
let operator = '';

const operations = {
    "*": function (a,b){
        return a*b;
    },

    "/": function(a,b){
        return a/b;
    },

    "+": function(a,b){
        return a+b;
    },
    "-": function(a,b){
        return a-b;
    }
}

for (var i = 0; i < buttonNumbers.length; i++) {
    const buttonNumber = buttonNumbers[i];

    clickButton(buttonNumber, function(e){
        const number = Number(e.target.innerText)
        inputText.value = number;
        if(numberOne===''){
            numberOne = number;
        }else{
            numberTwo = number;
        } 
    });
}


for (var i = 0; i <operatorButtons.length; i++){
    const operatorButton = operatorButtons[i];
    clickButton(operatorButton, function(e) {
        operator = e.target.innerText;
    });
}

function clickButton(listNumber, callback){
    listNumber.addEventListener("click", function(e){
        e.preventDefault();
        callback(e);
    })
}




result.addEventListener("click", function(e){
    e.preventDefault();
    const total = operations[operator](numberOne,numberTwo);
    inputText.value = total;
});


reset.addEventListener("click", function(e){
    e.preventDefault();
    inputText.value = "";
    numberOne = '';
    numberTwo = '';
    operator = '';
})