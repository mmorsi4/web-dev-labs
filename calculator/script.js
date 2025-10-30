let number1 = null;
let number2 = null;
let screenNumber = document.getElementById("screendigits");

list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
object = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}

for(let x in list){
    document.getElementById(list[x]).addEventListener("click", () => {

    if(screenNumber.textContent == '0'){
        screenNumber.textContent = object[list[x]];
    }
    else{
        screenNumber.textContent += object[list[x]];
    }

});
}

document.getElementById('plus').addEventListener("click", () => {
    if(number1 === null){
        number1 = screenNumber.textContent;
        screenNumber.textContent = 0;
    }
    else if(number2 === null){
        number2 = screenNumber.textContent;
        screenNumber.textContent = parseInt(number1) + parseInt(number2);
        number1 = null;
        number2 = null;
    }
});

document.getElementById('minus').addEventListener("click", () => {
    if(number1 === null){
        number1 = screenNumber.textContent;
        screenNumber.textContent = 0;
    }
    else if(number2 === null){
        number2 = screenNumber.textContent;
        screenNumber.textContent = parseInt(number1) - parseInt(number2);
        number1 = null;
        number2 = null;
    }
});

document.getElementById('multiply').addEventListener("click", () => {
    if(number1 === null){
        number1 = screenNumber.textContent;
        screenNumber.textContent = 0;
    }
    else if(number2 === null){
        number2 = screenNumber.textContent;
        screenNumber.textContent = parseInt(number1) * parseInt(number2);
        number1 = null;
        number2 = null;
    }
});

document.getElementById('divide').addEventListener("click", () => {
    if(number1 === null){
        number1 = screenNumber.textContent;
        screenNumber.textContent = 0;
    }
    else if(number2 === null){
        number2 = screenNumber.textContent;

        if(number2 != 0){
            screenNumber.textContent = parseInt(number1) / parseInt(number2);
        }
        else{
            screenNumber.textContent = 0;
            let h4 = document.createElement("h4");
            h4.textContent = "Cannot divide by 0";
            calculator = document.getElementById("id");
            document.body.appendChild(h4);
        }
        number1 = null;
        number2 = null;
    }
});

document.getElementById("reset").addEventListener("click", () => {
    number1 = null;
    number2 = null;
    screenNumber.textContent = 0;
});

document.getElementById("back").addEventListener("click", () => {
    if(screenNumber.textContent.length == 1){
        screenNumber.textContent = 0
    }
    else{
        screenNumber.textContent = screenNumber.textContent.slice(0, screenNumber.textContent.length-1);
    }
});

document.getElementById("calculator").addEventListener("click", () => {
    document.querySelector("h4").remove();
}, true);