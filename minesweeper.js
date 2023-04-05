export const TILE_STATUSES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
  }
  function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y
  }
  
  function randomNumber(size) {
    return Math.floor(Math.random() * size)
  }
  
  function nearbyTiles(board, { x, y }) {
    const tiles = []
  
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      for (let yOffset = -1; yOffset <= 1; yOffset++) {
        const tile = board[x + xOffset]?.[y + yOffset]
        if (tile) tiles.push(tile)
      }
    }
  
    return tiles
  }
  export function createBoard(boardSize, numberOfMines) {
    const board = []
    const minePositions = getMinePositions(boardSize, numberOfMines)
  
    for (let x = 0; x < boardSize; x++) {
      const row = []
      for (let y = 0; y < boardSize; y++) {
        const element = document.createElement("div")
        element.dataset.status = TILE_STATUSES.HIDDEN
  
        const tile = {
          element,
          x,
          y,
          mine: minePositions.some(positionMatch.bind(null, { x, y })),
          get status() {
            return this.element.dataset.status
          },
          set status(value) {
            this.element.dataset.status = value
          },
        }
  
        row.push(tile)
      }
      board.push(row)
    }
  
    return board
  } 