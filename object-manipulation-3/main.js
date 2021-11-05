console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Creating player object
var players = {
  player1: { name: 'Luigi', hand: [] },
  player2: { name: 'Mario', hand: [] },
  player3: { name: 'Yoshi', hand: [] },
  player4: { name: 'Wario', hand: [] }
};

// Create the 52 Card Deck
function createDeck() {
  // Traits of the cards
  var arrayRank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var arraySuit = ['clubs', 'diamonds', 'hearts', 'spades'];
  var deck = {};
  var count = 1;
  var tempObj = {};

  // Adding Suit and Rank for each Card
  for (let i = 0; i < arraySuit.length; i++) {
    for (let n = 0; n < arrayRank.length; n++) {
      tempObj.suit = arraySuit[i];
      tempObj.rank = arrayRank[n];
      deck[count] = tempObj;
      count++;
      tempObj = {};
    }
  }
  return deck;
}
var deck = createDeck();

// Shuffle Deck
var randomDeck = _.shuffle(deck);

// Start a game
function game(players, deck) {
  var player;
  var tempHand = [];

  // Give each player a card
  for (player in players) {
    tempHand.push(deck.pop());
    tempHand.push(deck.pop());
    players[player].hand = tempHand;
    tempHand = [];
  }
  var greatest = 0; // Holds the highest value
  var handCount = 0; // Adds up the total value in each hand and will be compared to the variable greatest
  var winner;

  // Evaluate which player has the highest value of cards in hand
  for (player in players) {
    for (let i = 0; i < players[player].hand.length; i++) {
      if (players[player].hand[i].rank === 'Ace') {
        handCount += 11;
      } else if (players[player].hand[i].rank === 'Jack' || players[player].hand[i].rank === 'Queen' || players[player].hand[i].rank === 'King') {
        handCount += 10;
      } else {
        handCount += players[player].hand[i].rank;
      }
    }
    if (handCount > greatest) {
      greatest = handCount;
      winner = players[player];
    }
    handCount = 0;
  }
  console.log(players);
  console.log('Winner: ', winner.name, ' Total Score: ', greatest);
}

game(players, randomDeck);
