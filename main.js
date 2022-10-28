const btnsNum = document.querySelectorAll(".btn-num");
const input = document.querySelector(".input");
const btnClear = document.querySelector(".btn-clear");
const btnCencel = document.querySelector(".btn-cancel");
const btnEnter = document.querySelector(".btn-enter");
const btnHide = document.querySelector(".hide");
const btnShow = document.querySelector(".show")

btnsNum.forEach(item => {
    item.addEventListener("click", () => {
        input.value += item.innerHTML;
    })
})

btnCencel.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
})

btnClear.addEventListener("click", () => {
    input.value = "";
})

btnEnter.addEventListener("click", () => {
    alert(input.value)
})

btnHide.addEventListener("click", () => {
    input.type = "password";

})

btnShow.addEventListener("click", () => {
    input.type = "text";

})





