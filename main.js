
const buttonNumbers = document.querySelectorAll(".number");
const inputText = document.querySelector("#inputText");
const multiply = document.querySelector(".multiplybtn");
const result = document.querySelector(".resultbtn");
const reset = document.querySelector(".resetbtn");
const division = document.querySelector(".divisionbtn");
const sum = document.querySelector(".sumbtn");
const rest = document.querySelector(".restbtn");




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
    const buttonNumber = buttonNumbers[i]
    buttonNumber.addEventListener("click", function(e){
        e.preventDefault();
        console.log(buttonNumber);
        const number = Number(e.target.innerText)
        inputText.value = number;
        if(numberOne===''){
            numberOne = number;
        }else{
            numberTwo = number;
        }
       


    })
}

multiply.addEventListener("click", function(e){
    e.preventDefault();
    operator = e.target.innerText;
});

division.addEventListener("click", function(e){
    e.preventDefault();
    operator = e.target.innerText;
});

sum.addEventListener("click", function(e){
    e.preventDefault();
    operator = e.target.innerText;
});

rest.addEventListener("click", function(e){
    e.preventDefault();
    operator = e.target.innerText;
});



result.addEventListener("click", function(e){
    e.preventDefault();
    const total = operations[operator](numberOne,numberTwo)
    inputText.value = total;
});




reset.addEventListener("click", function(e){
    e.preventDefault();
    inputText.value = " ";
})