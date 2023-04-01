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
  