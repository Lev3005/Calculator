const button = Array.from(document.querySelectorAll(".button"))
const calcReturn = document.querySelector(".calculator__return")
const calcCE = document.querySelector(".button__ce")
const calcPlus = document.querySelector(".button__plus")
const calcMinus = document.querySelector(".button__minus")
const calcMultiplication = document.querySelector(".button__multiplication")
const calcDivision = document.querySelector(".button__division")
const calcReturnText = document.querySelector(".calculator__return-text")

let num0 = undefined
let num1 = undefined
let num2 = undefined
let num3 = undefined
let num4 = undefined
let num5 = undefined
let num6 = undefined
let num7 = undefined
let num8 = undefined
let num9 = undefined

calcCE.addEventListener("click", function() {
    
    calcReturn.innerHTML = "0"

})

calcPlus.addEventListener("click", function() {

    calcReturn.innerHTML += " + "

})

calcMinus.addEventListener("click", function() {

    calcReturn.innerHTML += " - "

})

calcMultiplication.addEventListener("click", function() {

    calcReturn.innerHTML += " * "

})

calcDivision.addEventListener("click", function() {

    calcReturn.innerHTML += " / "

})

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click", function() {

        calcReturn.style = "display: flex;"
        calcReturnText.style = "display: none;"

        if (button[i].classList.contains("button__0")) {

            num0 = "0"

            calcReturn.innerHTML += num0

        } else if (button[i].classList.contains("button__1")) {

            num1 = "1"

            calcReturn.innerHTML += num1

        } else if (button[i].classList.contains("button__2")) {

            num2 = "2"

            calcReturn.innerHTML += num2

        } else if (button[i].classList.contains("button__3")) {

            num3 = "3"

            calcReturn.innerHTML += num3

        } else if (button[i].classList.contains("button__4")) {

            num4 = "4"

            calcReturn.innerHTML += num4

        } else if (button[i].classList.contains("button__5")) {

            num5 = "5"

            calcReturn.innerHTML += num5

        } else if (button[i].classList.contains("button__6")) {

            num6 = "6"

            calcReturn.innerHTML += num6

        } else if (button[i].classList.contains("button__7")) {

            num7 = "7"

            calcReturn.innerHTML += num7

        } else if (button[i].classList.contains("button__8")) {

            num8 = "8"

            calcReturn.innerHTML += num8

        } else if (button[i].classList.contains("button__9")) {

            num9 = "9"

            calcReturn.innerHTML += num9

        }

    })

}