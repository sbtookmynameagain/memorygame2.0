const cards= document.querySelectorAll('.card');

//click
cards.forEach(card=>{
    card.addEventlistener("click", flipCard);
    })

//check if cards are flipped
let iscardFlipped=false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
    if(!iscardFlipped){
        iscardFlipped = true;
        firstCard=this;
        return;
    }else{
        secondCard=this;
        checkForMatch();
    }
}

//check if cards are a match
function checkForMatch(){
   let isMatched = firstCard.dataset.framework === secondCard.dataset.framework;
   if(!isMatched){
       unflipCards();
   }else{
       disableCards();
   }
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

}

function unflipCards(){
 
 setTimeout(()=>{
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
},1000)

 }



function shuffle(){
    cards.forEach(card => {
        let randomPosition= Math.floor(Math.random() * cards.length);
        cards.style.order = randomPosition;
    })
}

shuffle();
