const p1 = {
    score: 0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset')
const scoreSelect = document.querySelector('#playto')

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if(!isGameOver) {
        player.score +=1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}


p1.button.addEventListener('click', function() {
    updateScore(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})

resetButton.addEventListener('click', reset)

scoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

function reset () {
    isGameOver = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}