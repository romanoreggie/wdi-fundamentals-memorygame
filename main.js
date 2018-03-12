console.log("Up and running!")

var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2)

		if (cardsInPlay[0] === cardsInPlay[1]) { 
				console.log("You found a match!");
		} 	else {
				console.log("Sorry, try again.");
			}
};

var flipCard = function(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID])
	checkForMatch();
}



flipCard(0);
flipCard(2);