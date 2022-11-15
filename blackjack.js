//const blackjackDeck = getDeck();

const cardDeck = [
  { val: 2, displayVal: '2', suit: 'hearts' },
  { val: 3, displayVal: '3', suit: 'hearts' },
  { val: 4, displayVal: '4', suit: 'hearts' },
  { val: 5, displayVal: '5', suit: 'hearts' },
  { val: 6, displayVal: '6', suit: 'hearts' },
  { val: 7, displayVal: '7', suit: 'hearts' },
  { val: 8, displayVal: '8', suit: 'hearts' },
  { val: 9, displayVal: '9', suit: 'hearts' },
  { val: 10, displayVal: '10', suit: 'hearts' },
  { val: 10, displayVal: 'Jack', suit: 'hearts' },
  { val: 10, displayVal: 'Queen', suit: 'hearts' },
  { val: 10, displayVal: 'King', suit: 'hearts' },
  { val: 11, displayVal: 'Ace', suit: 'hearts' },
  { val: 2, displayVal: '2', suit: 'diamonds' },
  { val: 3, displayVal: '3', suit: 'diamonds' },
  { val: 4, displayVal: '4', suit: 'diamonds' },
  { val: 5, displayVal: '5', suit: 'diamonds' },
  { val: 6, displayVal: '6', suit: 'diamonds' },
  { val: 7, displayVal: '7', suit: 'diamonds' },
  { val: 8, displayVal: '8', suit: 'diamonds' },
  { val: 9, displayVal: '9', suit: 'diamonds' },
  { val: 10, displayVal: '10', suit: 'diamonds' },
  { val: 10, displayVal: 'Jack', suit: 'diamonds' },
  { val: 10, displayVal: 'Queen', suit: 'diamonds' },
  { val: 10, displayVal: 'King', suit: 'diamonds' },
  { val: 11, displayVal: 'Ace', suit: 'diamonds' },
  { val: 2, displayVal: '2', suit: 'clubs' },
  { val: 3, displayVal: '3', suit: 'clubs' },
  { val: 4, displayVal: '4', suit: 'clubs' },
  { val: 5, displayVal: '5', suit: 'clubs' },
  { val: 6, displayVal: '6', suit: 'clubs' },
  { val: 7, displayVal: '7', suit: 'clubs' },
  { val: 8, displayVal: '8', suit: 'clubs' },
  { val: 9, displayVal: '9', suit: 'clubs' },
  { val: 10, displayVal: '10', suit: 'clubs' },
  { val: 10, displayVal: 'Jack', suit: 'clubs' },
  { val: 10, displayVal: 'Queen', suit: 'clubs' },
  { val: 10, displayVal: 'King', suit: 'clubs' },
  { val: 11, displayVal: 'Ace', suit: 'clubs' },
  { val: 2, displayVal: '2', suit: 'spades' },
  { val: 3, displayVal: '3', suit: 'spades' },
  { val: 4, displayVal: '4', suit: 'spades' },
  { val: 5, displayVal: '5', suit: 'spades' },
  { val: 6, displayVal: '6', suit: 'spades' },
  { val: 7, displayVal: '7', suit: 'spades' },
  { val: 8, displayVal: '8', suit: 'spades' },
  { val: 9, displayVal: '9', suit: 'spades' },
  { val: 10, displayVal: '10', suit: 'spades' },
  { val: 10, displayVal: 'Jack', suit: 'spades' },
  { val: 10, displayVal: 'Queen', suit: 'spades' },
  { val: 10, displayVal: 'King', suit: 'spades' },
  { val: 11, displayVal: 'Ace', suit: 'spades' }
];

//console.log(cardDeck[0])

/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */

class CardPlayer {
    constructor(name){
      this.name = name
      this.hand = []
    }
    drawCard(){
      let valueDrawn;
      let hand; 
      let cardDrawn;
      let randomNumber = Math.floor(Math.random() * 52)
      cardDrawn = cardDeck[randomNumber]
      //console.log(this.name, "is drawing a", randomNumber)
      //console.log(cardDrawn.val)
      this.hand.push(cardDrawn)
    }  
};


// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer("Marge")
const player = new CardPlayer("Chris")

/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft
 */
const calcPoints = (hand) => {
  //console.log(dealer.hand)
  //console.log(dealer.value)
  const scores = Object.values(hand);
  handArray = hand
  aceFiltered = handArray.filter((hand) => hand.displayVal == "Ace")
  scoresArray = []
  let totalTemporary;
  //console.log(aceFiltered)
  for (let score of scores){
    scoresArray.push(score.val)
  }
  const totalScore = scoresArray.reduce(
    (accum,val) => accum + val, 0);
  //console.log(hand)
  //console.log(totalScore)
  if(aceFiltered.length == 1){ // ^^ if score is less than 21 and there is an Ace present, it has a value of 11
    totalTemporary = totalScore
    isSoft = true 
    //console.log("Below 21: score AND Ace present ",totalScore)
  } else if(aceFiltered.length < 1){ 
    totalTemporary = totalScore
    isSoft = false
  } else {
    totalTemporary = totalScore - 10
    isSoft = false
    //console.log("Below 21: score AND No Ace present ",totalScore)
  }
  //console.log("Total score ",totalTemporary)
  pointsResults = {
    total : totalTemporary,
    isSoft : isSoft}
  //console.log(pointsResults)
  return pointsResults
}  

calcPoints(dealer.hand)
/**
 * Determines whether the dealer should draw another card.
 * 
 * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
 * @returns {boolean} whether dealer should draw another card
 */



const dealerShouldDraw = (dealerHand) => {
    runningTotalMap = dealerHand.map(item=> item.val)
    runningTotal = runningTotalMap.reduce((accum, val) => accum + val, 0)
    console.log(dealerHand)
    console.log("ACE present counting as 11 points? ", pointsResults.isSoft, " Total score", pointsResults.total )
    
    if (pointsResults.total <= 16){
      console.log("Less than 16: Dealer must draw")
      return true;
    } else if (pointsResults.total == 17 && pointsResults.isSoft == "true") {
      console.log("17 with an ACE: Dealer must draw")
      return true; 
    } else {
      console.log("Dealer must hold")
      return false
    }
 }

dealerShouldDraw(dealer.hand)

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
  if(playerScore > dealerScore){
      console.log("Player wins")
  } else if(playerScore == dealerScore){
      console.log("Draw")
  } else {
      console.log("Dealer wins")

  }
  // CREATE FUNCTION HERE
}


/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

/**
 * Logs the player's hand to the console
 * @param {CardPlayer} player 
 */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
 const startGame = function() {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}
console.log(startGame());

var playerCardsSuit = player.hand.map(item=> item.suit);
var playerCardsVal = player.hand.map(item=> item.displayVal);
var dealerCardsSuit = dealer.hand.map(item=> item.suit);
var dealerCardsVal = dealer.hand.map(item=> item.displayVal);


let  playerList = document.getElementById("playerList");

let playerResults = playerCardsSuit.forEach((suit, index) => {
  let cardValue = playerCardsVal[index];
  var li = document.createElement("li");
  li.innerText = cardValue +" " +  suit
  playerList.appendChild(li);
  //console.log(suit, cardValue);
});

let dealerList = document.getElementById("dealerList");

let dealerResults = dealerCardsSuit.forEach((suit, index) => {
  let cardValue = dealerCardsVal[index];
  var li = document.createElement("li");
  li.innerText = cardValue +" " +  suit
  dealerList.appendChild(li);
  //console.log(suit, cardValue);
});

