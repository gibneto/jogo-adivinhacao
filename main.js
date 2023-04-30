const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1


// função callback
function handleTrylick(event) {
  event.preventDefault()  // não faça o padrão do evento (não envie o formulário)

    const inputNumber = document.querySelector("#inputNumber")
    
      if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentiva(s)`
        
      }

  inputNumber.value = ""
  xAttempts++
}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

// função callback
btnTry.addEventListener('click', handleTrylick)


btnReset.addEventListener('click', function() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
})