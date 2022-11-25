const BowlingGame = require("./bowling-game");

describe('BowlingGame', () => {

  it('given a scorecard as an array of arrays, it sums the contents using the total function', () => {
    const game = new BowlingGame;
    scoreCard = [[5, 4], [3, 6], [2, 3], [5, 1], [3, 6], [7, 1], [8, 1], [2, 3], [5, 1], [3, 6]]
    expect(game.total(scoreCard)).toEqual(75)
  })

  it('uses addScore method to populate a scoreCard array, uses getScoreCard to return array', () => {
    const game = new BowlingGame;
    game.addScore([5, 4]);
    game.addScore([3, 4]);
    expect(game.getScoreCard()).toEqual([[5, 4], [3, 4]]);
  })

  it('uses frameNumber to return the current length of the getScoreCard array', () => {
    const game = new BowlingGame;
    game.addScore([5, 4]);
    game.addScore([3, 4]);
    game.addScore([3, 6]);
    expect(game.frameNumber()).toEqual(3);
  })

})