let doc1 = document.getElementById("1")
let doc2 = document.getElementById("2")
let doc3 = document.getElementById("3")

let random1
let random2

const result = document.getElementById("result")
const target = document.querySelector(".imgContain")

let restart = false

function playGame() {
    if (restart === false) {
        random1 = Math.floor(Math.random() * 3) + 1
        random2 = Math.floor(Math.random() * 3) + 1
        const gamePlay1 = document.createElement("img")
        const gamePlay2 = document.createElement("img")
    
        if (random1 === 1 && random2 === 1) {
            gamePlay1.src = "paper.png"
            gamePlay2.src = "paper.png"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Draw"
        } else if (random1 === 1 && random2 === 2) {
            gamePlay1.src = "paper.png"
            gamePlay2.src = "rock.jpeg"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Left Player wins"
        } else if (random1 === 1 && random2 === 3) {
            gamePlay1.src = "paper.png"
            gamePlay2.src = "scissors.jpeg"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Right player wins"
        } else if (random1 === 2 && random2 === 1) {
            gamePlay1.src = "rock.jpeg"
            gamePlay2.src = "paper.png"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Right player wins"
        } else if (random1 === 2 && random2 === 2) {
            gamePlay1.src = "rock.jpeg"
            gamePlay2.src = "rock.jpeg"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Draw"
        } else if (random1 === 2 && random2 === 3) {
            gamePlay1.src = "rock.jpeg"
            gamePlay2.src = "scissors.jpeg"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Left player wins"
        } else if (random1 === 3 && random2 === 1) {
            gamePlay1.src = "scissors.jpeg"
            gamePlay2.src = "paper.png"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Left player wins"
        } else if (random1 === 3 && random2 === 2) {
            gamePlay1.src = "scissors.jpeg"
            gamePlay2.src = "rock.jpeg"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Right player wins"
        } else if (random1 === 3 && random2 === 3) {
            gamePlay1.src = "scissors.jpeg"
            gamePlay2.src = "scissors.jpeg"

            gamePlay1.style.width = "100px"
            gamePlay1.style.height = "100px"
            gamePlay1.style.display = "block"
            gamePlay2.style.width = "100px"
            gamePlay2.style.height = "100px"
            gamePlay2.style.display = "block"
        
            target.appendChild(gamePlay1)
            target.appendChild(gamePlay2)

            result.value = "Draw"
        }
        restart = true
    } else {
        target.innerHTML = ""
        restart = false
        playGame()
    }
}
function restartGame() {
    target.innerHTML = ""
}

document.addEventListener("keydown", function(event) {
    const key = event.key

    if (key === "ArrowLeft") {
        playGame()
    }

    if (key === "ArrowRight") {
        restartGame()
    }
})