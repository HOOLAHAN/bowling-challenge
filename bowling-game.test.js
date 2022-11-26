const BowlingGame = require("./bowling-game");

describe('BowlingGame', () => {

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

  it('returns the sum of the scorecard', () => {
    const game = new BowlingGame;
    game.addScore([5, 4]);
    game.addScore([3, 4]);
    expect(game.total()).toEqual(16);
  })

  it('returns the sum of the scorecard for a 10 frame game with no spares or strikes', () => {
    const game = new BowlingGame;
    let scoreCardDouble = [[2, 4], [5, 3], [7, 1], [8, 1], [5, 0], [2, 4], [5, 3], [7, 1], [8, 1], [5, 0]]
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    expect(game.total()).toEqual(72);
  })

  it('does not allow further scores to be added past the 10th frame', () => {
    const game = new BowlingGame;
    let scoreCardDouble = [[2, 4], [5, 3], [7, 1], [8, 1], [5, 0], [2, 4], [5, 3], [7, 1], [8, 1], [5, 0], [6, 3]]
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    expect(game.addScore([6, 3])).toEqual("Game Complete");
    expect(game.total()).toEqual(72);
  })

  it('adds a bonus score when the player gets a spare', () => {
    const game = new BowlingGame;
    let scoreCardDouble = [[2, 4], [5, 5], [7, 1]] // bonus of 7
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    game.applyBonus();
    expect(game.total()).toEqual(31);
  })

})