var wins = 0, losses = 0;

var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if(cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		document.getElementById('wins').textContent = ++wins;
		document.getElementById('matchInfo').textContent = "You found a match!";
		} else {
		document.getElementById('losses').textContent = ++losses;
		document.getElementById('matchInfo').textContent = "Uhoh, those don't match. Try again!";
		}
	}
};

var flipCard = function () {
	if(cardsInPlay.length === 2) {
		document.getElementById('matchInfo').textContent = "Can you find a match?";
		resetBoard();
		return;
	};
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function () {
	for (var i=0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var resetBoard = function () {
	cardsInPlay = [];
	var imgs = document.getElementById('game-board').getElementsByTagName('img');
	for (i=0; i<cards.length; i++) {
		imgs[i].setAttribute('src', 'images/back.png');
	}
};

createBoard();
