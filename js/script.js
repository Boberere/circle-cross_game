// --------------------------------------------
// -- SELECTORS
// --------------------------------------------
const boxes = document.querySelectorAll('.box')
const gameInfo = document.querySelector('.game-info')
const restartBtn = document.querySelector('.game-restart')
// --------------------------------------------
// -- FUNCTIONS
// --------------------------------------------
const setSymbols = e => {
	//It checks that game areas are empty
	if (!e.target.classList.contains('circle') && !e.target.classList.contains('cross')) {
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
		e.target.classList.toggle('circle')
	}
	if (gameInfo.textContent === "It's cross's turn") {
		e.target.classList.toggle('cross')
	}
}
//Restart game
const restartGame = () => {
	gameInfo.textContent = "It's circle's turn"
	boxes.forEach(box => {
		box.classList.remove('circle', 'cross')
	})
}
// --------------------------------------------
// -- LISTENERS
// --------------------------------------------
boxes.forEach(box => box.addEventListener('click', setSymbols))
restartBtn.addEventListener('click', restartGame)

const resultInfo = () => {
	if (
		(boxes[0].classList.contains('circle') &&
			boxes[1].classList.contains('circle') &&
			boxes[2].classList.contains('circle')) ||
		(boxes[3].classList.contains('circle') &&
			boxes[4].classList.contains('circle') &&
			boxes[5].classList.contains('circle')) ||
		(boxes[6].classList.contains('circle') &&
			boxes[7].classList.contains('circle') &&
			boxes[8].classList.contains('circle')) ||
		(boxes[0].classList.contains('circle') &&
			boxes[3].classList.contains('circle') &&
			boxes[6].classList.contains('circle')) ||
		(boxes[1].classList.contains('circle') &&
			boxes[4].classList.contains('circle') &&
			boxes[7].classList.contains('circle')) ||
		(boxes[2].classList.contains('circle') &&
			boxes[5].classList.contains('circle') &&
			boxes[8].classList.contains('circle')) ||
		(boxes[2].classList.contains('circle') &&
			boxes[4].classList.contains('circle') &&
			boxes[6].classList.contains('circle')) ||
		(boxes[0].classList.contains('circle') &&
			boxes[4].classList.contains('circle') &&
			boxes[8].classList.contains('circle'))
	) {
		gameInfo.textContent = "Circle is the winner!"
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
		gameInfo.textContent = "Cross is the winner!" 
	} else if (
		(boxes[0].classList.contains('circle') || boxes[0].classList.contains('cross')) &&
		(boxes[1].classList.contains('circle') || boxes[1].classList.contains('cross')) &&
		(boxes[2].classList.contains('circle') || boxes[2].classList.contains('cross')) &&
		(boxes[3].classList.contains('circle') || boxes[3].classList.contains('cross')) &&
		(boxes[4].classList.contains('circle') || boxes[4].classList.contains('cross')) &&
		(boxes[5].classList.contains('circle') || boxes[5].classList.contains('cross')) &&
		(boxes[6].classList.contains('circle') || boxes[6].classList.contains('cross')) &&
		(boxes[7].classList.contains('circle') || boxes[7].classList.contains('cross')) &&
		(boxes[8].classList.contains('circle') || boxes[8].classList.contains('cross'))
	) {
		gameInfo.textContent = 'Draw!'
	}
}
setInterval(resultInfo, 100)
