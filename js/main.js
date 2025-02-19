const buttons = Array.from(document.querySelectorAll(".button"))
const calcReturn = document.querySelector(".calculator__return")

buttons.map((button) => {

    button.addEventListener("click", (e) => {

        switch (e.target.innerText) {

            case "CE":

                calcReturn.innerText = "0"

                break

            case "=":

                try {

                    calcReturn.innerText = eval(calcReturn.innerText)

                } catch {

                     calcReturn.innerText = "Ошибка!"
                    
                }

                break

            default:

                if (calcReturn.innerText === "0" && e.target.innerText !== ".") {

                    calcReturn.innerText = e.target.innerText
                    
                } else {

                   calcReturn.innerText += e.target.innerText 

                }

        }

    })

})