const slider = document.querySelector("input");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".numbers");
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



