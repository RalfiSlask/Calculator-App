const slider = document.querySelector("input");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display_container");
const body = document.querySelector("body");
const deleteButton = document.querySelector(".delete");
const resetButton = document.querySelector(".reset");
const equalButton = document.querySelector(".equal")

let displayArray: string[] = ["0"];
const operatorArray = ["+", "-", "x", "/"];

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

const displayContent = () => {
    if(display) {
        display.textContent = displayArray.join("");
    }
};

deleteButton?.addEventListener("click", () => {
    displayArray.pop();
    displayContent();
});

resetButton?.addEventListener("click", () => {
    displayArray = ["0"];
    displayContent();
});

equalButton?.addEventListener("click", () => {
    // if the last element is an operator do nothing
    if(getLastElementInArrayIsAnOperator(displayArray)) return;
    const calc = 52 + 45;
    console.log(calc)
    const hej = displayArray.join("");
});

const getLastElementInArrayIsAnOperator = (array: string[]) => {
    const lastIndex = array.length - 1;
    return operatorArray.includes(array[lastIndex])
};

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        const isLastIndexAnOperator = getLastElementInArrayIsAnOperator(displayArray)
        if(operator.textContent) {
            if(isLastIndexAnOperator) {
                displayArray[displayArray.length - 1] = operator.textContent;
            } else {
                displayArray.push(`${operator.textContent}`)
            }
            displayContent();
        }
    })
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(number.textContent) {
            // if the starting number displayed is a zero, replace with number pressed
            if(displayArray.length === 1 && displayArray[0] === "0") {
                displayArray[0] = number.textContent;
            } else {
                displayArray.push(number.textContent);
            }
            displayContent();
        }   
    })
});


