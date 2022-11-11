/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */

const getDeck = () => {
  const suits = ['hearts','spades','clubs','diamonds']; //store suits in an array
  const deck = [] //push cards to deck array

  for (let index = 0; index < suits.length; index++){ //loop over each suit
    for (let j = 1; j<= 13; j++){
    //console.log(j)
    //console.log(j === 2)
    //console.log(suits[index])
    let displayValStore = 'None';
    let card;
    switch (j) {
      case (j == '1'):
        displayValStore = "Ace";
        break;
      case j >1 && j<=10:
        displayValStore = j;
        break;
      case j == '11':
        displayValStore = "Jack";
        break;
      case j == '12':
        displayValStore = "Queen";
        break;
      case j == '13':
        displayValStore = "King";
        break;
      default:
   
        displayValStore = "Undefined"}
    if (displayValStore === "Ace"){
      card.val = 11}
    debugger;
          //for each loop, push a card object to the deck
    card = {
      val : j,
      displayVal : displayValStore,
      suit : suits[index],
     };
      deck.push(card)

  }

}
  return deck;
  //console.log(deck.length)
  //console.log(deck)
}

// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);
