// --------------------------------------------
// -- SELECTORS
// --------------------------------------------
const boxes = document.querySelectorAll('.box')
const gameInfo = document.querySelector('.game-info')
const result = document.querySelector('.result')
const restartBtn = document.querySelector('.game-restart')
// --------------------------------------------
// -- FUNCTIONS
// --------------------------------------------
const setSymbols = e => {
	//It checks that game areas are empty
	if (!e.target.classList.contains('round') && !e.target.classList.contains('cross')) {
		turnChecker(e)
		turnHandle()
	}
}
// This function changes turn after setting symbol
const turnHandle = () => {
	if (gameInfo.textContent === "It's circle's turn") {
		gameInfo.textContent = "It's cross's turn"
		return
	}
	if (gameInfo.textContent === "It's cross's turn") {
		gameInfo.textContent = "It's circle's turn"
		return
	}
}
//These two ifs in lower function, check that whose turn is.
const turnChecker = e => {
	if (gameInfo.textContent === "It's circle's turn") {
		e.target.classList.toggle('round')
	}
	if (gameInfo.textContent === "It's cross's turn") {
		e.target.classList.toggle('cross')
	}
}
//Restart game
const restartGame = () => {
	gameInfo.textContent = "It's circle's turn"
	boxes.forEach(box => {
		box.classList.remove('round', 'cross')
	})
}
// --------------------------------------------
// -- LISTENERS
// --------------------------------------------
boxes.forEach(box => box.addEventListener('click', setSymbols))
restartBtn.addEventListener('click', restartGame)

const resultInfo = () => {
	if (
		(boxes[0].classList.contains('round') &&
			boxes[1].classList.contains('round') &&
			boxes[2].classList.contains('round')) ||
		(boxes[3].classList.contains('round') &&
			boxes[4].classList.contains('round') &&
			boxes[5].classList.contains('round')) ||
		(boxes[6].classList.contains('round') &&
			boxes[7].classList.contains('round') &&
			boxes[8].classList.contains('round')) ||
		(boxes[0].classList.contains('round') &&
			boxes[3].classList.contains('round') &&
			boxes[6].classList.contains('round')) ||
		(boxes[1].classList.contains('round') &&
			boxes[4].classList.contains('round') &&
			boxes[7].classList.contains('round')) ||
		(boxes[2].classList.contains('round') &&
			boxes[5].classList.contains('round') &&
			boxes[8].classList.contains('round')) ||
		(boxes[2].classList.contains('round') &&
			boxes[4].classList.contains('round') &&
			boxes[6].classList.contains('round')) ||
		(boxes[0].classList.contains('round') &&
			boxes[4].classList.contains('round') &&
			boxes[8].classList.contains('round'))
	) {
		gameInfo.textContent = 'Circle is the Winner!'
	} else if (
		(boxes[0].classList.contains('cross') &&
			boxes[1].classList.contains('cross') &&
			boxes[2].classList.contains('cross')) ||
		(boxes[3].classList.contains('cross') &&
			boxes[4].classList.contains('cross') &&
			boxes[5].classList.contains('cross')) ||
		(boxes[6].classList.contains('cross') &&
			boxes[7].classList.contains('cross') &&
			boxes[8].classList.contains('cross')) ||
		(boxes[0].classList.contains('cross') &&
			boxes[3].classList.contains('cross') &&
			boxes[6].classList.contains('cross')) ||
		(boxes[1].classList.contains('cross') &&
			boxes[4].classList.contains('cross') &&
			boxes[7].classList.contains('cross')) ||
		(boxes[2].classList.contains('cross') &&
			boxes[5].classList.contains('cross') &&
			boxes[8].classList.contains('cross')) ||
		(boxes[2].classList.contains('cross') &&
			boxes[4].classList.contains('cross') &&
			boxes[6].classList.contains('cross')) ||
		(boxes[0].classList.contains('cross') &&
			boxes[4].classList.contains('cross') &&
			boxes[8].classList.contains('cross'))
	) {
		gameInfo.textContent = 'Cross is the Winner!'
	} else if (
		(boxes[0].classList.contains('round') || boxes[0].classList.contains('cross')) &&
		(boxes[1].classList.contains('round') || boxes[1].classList.contains('cross')) &&
		(boxes[2].classList.contains('round') || boxes[2].classList.contains('cross')) &&
		(boxes[3].classList.contains('round') || boxes[3].classList.contains('cross')) &&
		(boxes[4].classList.contains('round') || boxes[4].classList.contains('cross')) &&
		(boxes[5].classList.contains('round') || boxes[5].classList.contains('cross')) &&
		(boxes[6].classList.contains('round') || boxes[6].classList.contains('cross')) &&
		(boxes[7].classList.contains('round') || boxes[7].classList.contains('cross')) &&
		(boxes[8].classList.contains('round') || boxes[8].classList.contains('cross'))
	) {
		gameInfo.textContent = 'Draw!'
	}
}
setInterval(resultInfo, 500)
