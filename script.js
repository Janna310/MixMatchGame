// possibly adding in audio for background music, "victory", and "loser"


//running the game function
class MixOrMatch{
    constructor(totalTime, cardsArray){ //cards Array Parameter not reading
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips')
    }
    startGame(){
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
    }
    flipCard(card){ //function to flip cards over and apply pre-created visible style
        if(this.canFlipCard(card)) {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible')
        }

    }
    canFlipCard(card) {
        return true
        // return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck
    }
}



//removing overlay screens (class =overlay-text)
function ready(){
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let card = Array.from(document.getElementsByClassName('cards'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {
        overlays.addEventListener('click', () => {
            overlay.classList.remove('visible')
            game.startGame(card);
        });
    });

    cards.forEach( card => {
        cards.addEventListener('click', () => {
            //game.flipCard(card);
        });
    });
}