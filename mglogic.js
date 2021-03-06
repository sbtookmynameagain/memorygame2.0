const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', flipCard);
});

let lockBoard = false;
let isCardFlipped = false;
let firstCard, secondCard;
let counter = 0;

function flipCard() {

    if (lockBoard) return;

    this.classList.add('flip');

    if (!isCardFlipped) {
        isCardFlipped = true;
        firstCard = this;

        return;
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatched = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatched) {
        disableCards();
    } else {
        unflipCards();
    }
}
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    counter = counter + 2;

    resetBoard();

}


function unflipCards() {

    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);

}

function resetBoard() {
    [isCardFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

    if (counter === cards.length) {
        setTimeout(() => {
            alert('Congratulations!You won!');
        }, 800);        
    }
}

function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * cards.length);
        card.style.order = randomPosition;
    });
}

shuffle();


