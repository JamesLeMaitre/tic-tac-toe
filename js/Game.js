class Game {
  constructor() {
    this.turn = "X"
    this.board = new Array(9).fill(null)
  }

  nextTurn() {
    if (this.turn == "X") {
      this.turn = "O"
    } else {
      this.turn = "X"
    }
  }

  makeMove(i) {
    if (this.endOfGame()) {
      return
    }
    if (this.board[i]) {
      return
    }
    this.board[i] = this.turn
    let winningCombiantion = this.findWinningCombinations()
    if (!winningCombiantion) {
      this.nextTurn()
    }
  }

  findWinningCombinations() {
    const winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]

    for (const combination of winningCombination) {
      const [x, y, z] = combination

      if (this.board[x] &&
        (this.board[x] === this.board[y]
          && this.board[x] === this.board[z])) {
        return combination
      }

    }
    return null
  }

  endOfGame() {
    let winningCombination = this.findWinningCombinations()
    if (winningCombination) {
      return true
    } else {
      return false
    }
  }
}

export default Game