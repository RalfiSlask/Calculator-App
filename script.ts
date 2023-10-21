const slider = document.querySelector("input");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display_container");
const body = document.querySelector("body");


slider?.addEventListener("change", () => {
    if(body) {
        body.className = "";
        if(Number(slider.value) === 2) {
            body?.classList.add("T2")
        } else if(Number(slider.value) === 3) {
            body?.classList.add("T3")
        }
    }
});

let displayArray: string[] = ["0"];
const lastIndex = displayArray.length;

operators.forEach(operator => {
    let isLastIndexAnOperator: boolean;
    if(operator.textContent) {
        isLastIndexAnOperator = displayArray[lastIndex - 1].includes(operator.textContent)
        console.log(isLastIndexAnOperator)
    }
    operator.addEventListener("click", () => {
        if(display?.textContent && operator.textContent) {
            if(isLastIndexAnOperator) {
                displayArray[lastIndex - 1] = operator.textContent;
            } else {
                displayArray.push(operator.textContent)
            }
            display.textContent = displayArray.join("");
        }
    })
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(display?.textContent && number.textContent) {
            if(displayArray[0] === "0") {
                displayArray[0] = number.textContent;
            } else {
                displayArray.push(number.textContent);
            }
            display.textContent = displayArray.join("");
        }   
    })
});
