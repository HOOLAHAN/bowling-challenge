const BowlingGame = require("./bowling-game");

describe('BowlingGame', () => {
  it('given a scorecard as an array of arrays, it sums the contentsusing the total function', () => {
    const game = new BowlingGame();
    scoreCard = [[5, 4], [3, 6], [2, 3], [5, 1], [3, 6], [7, 1], [8, 1], [2, 3], [5, 1], [3, 6]]
    expect(game.total(scoreCard)).toEqual(75)
  })
})