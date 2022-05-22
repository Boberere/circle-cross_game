// --------------------------------------------
// -- SELECTORS & VARIABLES
// --------------------------------------------
const boxes = document.querySelectorAll('.box')
const gameInfo = document.querySelector('.game-info')
const restartBtn = document.querySelector('.game-restart')
const gameArea = document.querySelector('.game-area')
// --------------------------------------------
// -- FUNCTIONS
// --------------------------------------------
const gameFunctions = e => {
	// verifies that boxes are empty
	if (!e.target.classList.contains('circle') && !e.target.classList.contains('cross')) {
		// verifies whose turn is now.
		setSymbol(e)
		// changes players turn after setting symbol
		turnHandle()
	}
}
const turnHandle = () => {
	if (gameInfo.textContent === "It's circle's turn") {
		gameInfo.textContent = "It's cross's turn"
		return
	} else if (gameInfo.textContent === "It's cross's turn") {
		gameInfo.textContent = "It's circle's turn"
		return
	}
}
const setSymbol = e => {
	if (gameInfo.textContent === "It's circle's turn") {
		e.target.classList.add('circle')
	} else if (gameInfo.textContent === "It's cross's turn") {
		e.target.classList.add('cross')
	}
	e.target.classList.add('symbol')
}
// It is for restart game button
const restartGame = () => {
	gameInfo.textContent = "It's circle's turn"
	boxes.forEach(box => {
		box.classList.remove('circle', 'cross', 'symbol')
	})
}
// verifies conditions for displaying game result
const resultInfo = () => {
	// there is a need to transform nodeList to array in order to use every() method
	const boxesArray = Array.prototype.slice.call(boxes)
	const winCombinations = [
		[boxesArray[0], boxesArray[1], boxesArray[2]],
		[boxesArray[3], boxesArray[4], boxesArray[5]],
		[boxesArray[6], boxesArray[7], boxesArray[8]],
		[boxesArray[0], boxesArray[3], boxesArray[6]],
		[boxesArray[1], boxesArray[4], boxesArray[7]],
		[boxesArray[2], boxesArray[5], boxesArray[8]],
		[boxesArray[2], boxesArray[4], boxesArray[6]],
		[boxesArray[0], boxesArray[4], boxesArray[8]],
	]
	for (let combination of winCombinations) {
		if (combination.every(x => x.classList.contains('circle'))) {
			gameInfo.textContent = 'Circle is the winner!'
			return
		} else if (combination.every(x => x.classList.contains('cross'))) {
			gameInfo.textContent = 'Cross is the winner!'
			return
		} 
	}
	if (boxesArray.every(x => x.classList.contains('symbol'))) {
		gameInfo.textContent = 'Draw!'
	}
}
// --------------------------------------------
// -- LISTENERS
// --------------------------------------------
restartBtn.addEventListener('click', restartGame)
boxes.forEach(box => {
	box.addEventListener('click', gameFunctions)
	box.addEventListener('click', resultInfo)
})
