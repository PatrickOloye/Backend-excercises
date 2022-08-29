/*const answer = ["", ""];

const inputEl1 = document.querySelector(".frstInput")
const inputEl2 = document.querySelector(".scndInput")

inputEl1.addEventListener("keydown",() => console.log(inputEl1.value));
inputEl2.addEventListener("keydown",() => console.log(inputEl2.value));*/

const answer = ["", ""];

const inputEl1 = document.querySelector(".frstInput")
const inputEl2 = document.querySelector(".scndInput")
const answerP = document.querySelector(".answerP")
const error = document.querySelector(".error")
const submit = document.querySelector(".submit")
const selector = document.querySelector('.selector')
// const para = document.querySelector("p")

inputEl1.addEventListener("keyup",() => answer[0] = parseFloat(inputEl1.value));
inputEl2.addEventListener("keyup",() => answer[1] = parseFloat(inputEl2.value));

submit.addEventListener("click", ()=> {
    // para.innerHTML = answer[0] + answer[1]
    if(isNaN(answer[0])){
        error.innerHTML = "i am busy"
        setTimeout(()=> {
            error.innerHTML = ""}, 3000)
            return;
        }
        
    
    if(isNaN(answer[1])){
        error.innerHTML = " whatever"
        setTimeout(()=> {
            error.innerHTML = ""}, 3000)
            return;
        }
       
    }

    switch(selector.value){
        case "+": 
        answerP.innerHTML = answer[0] + answer[1];
        break;

        case "-": 
        answerP.innerHTML = answer[0] - answer[1];
        break;

        case "*": 
        answerP.innerHTML = answer[0] * answer[1];
        break;

        case "/": 
        answerP.innerHTML = answer[0] / answer[1];
        break;

        default:
            answerP.innerHTML = "invalid selector";
            break;

    }
    
});

