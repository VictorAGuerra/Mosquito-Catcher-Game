var height;
var width;
var lives = 3;
var time = 10;
var level = window.location.search.replace('?', '')
var difficultyInterval = 1000

function updateGameDimensions() {
    height = window.innerHeight
    width = window.innerWidth
}

switch (Number(level)) {
    case 1:
        difficultyInterval = 1500
        time = 10
        break
    case 2:
        difficultyInterval = 1000
        time = 15
        break
    case 3:
        difficultyInterval = 850
        time = 20
        break
    case 4:
        difficultyInterval = 600
        time = 25
        break
    case 5:
        difficultyInterval = 10
        time = 999
        break
}



updateGameDimensions()

let chronometer = setInterval(function() {
    
    time -= 1

    if (time < 0) {

        clearInterval(mosquitoInterval)
        clearInterval(chronometer)
        window.location.href = 'you_win.html'
    } else {

        document.getElementById('time').innerHTML = time
    }


}, 1000)

function newMosquito() {

    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        lives -= 1

        switch (lives) {
            case 2:
                document.getElementById('life1').src = 'imagens/coracao_vazio.png'
                break

            case 1:
                document.getElementById('life2').src = 'imagens/coracao_vazio.png'
                break

            case 0:
                document.getElementById('life3').src = 'imagens/coracao_vazio.png'
                window.location.href = 'game_over.html'
                break
        }
    }

    let xPosition = Math.floor(Math.random() * width - 75)
    let yPosition = Math.floor(Math.random() * height - 75)

    xPosition = xPosition < 0? 0 : xPosition
    yPosition = yPosition < 0? 0 : yPosition

    let sizeOffset = 20
    let sizeDefault = 80

    let mosquito = document.createElement('img')

    mosquito.src = 'imagens/mosquito.png'
    mosquito.alt = 'mosquito'
    mosquito.id = 'mosquito'

    let size = (Math.random() * - sizeOffset) + sizeDefault + 'px'

    mosquito.style.width = size
    mosquito.style.height = size
    mosquito.style.transform = 'scaleX(' + ((Math.round(Math.random()) * 2) - 1) + ')'
    mosquito.style.position = 'absolute'
    mosquito.style.left = xPosition + 'px'
    mosquito.style.top = yPosition + 'px'

    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}