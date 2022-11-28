const BowlingGame = require("./bowling-game");

describe('BowlingGame', () => {

  it('uses addScore method to populate a scoreCard array, uses getScoreCard to return array', () => {
    const game = new BowlingGame;
    for (let i = 0; i < 10; i++) {
      game.addScore([5, 4]);
      }
    expect(game.getScoreCard()).toEqual([[5, 4], [5, 4], [5, 4], [5, 4], [5, 4], [5, 4], [5, 4], [5, 4], [5, 4], [5, 4]]);
  })

  it('when the scorecard method is called and less than 10 frames have been scored it returns a message confirming how many frames are remaining', () => {
    const game = new BowlingGame;
    for (let i = 0; i < 5; i++) {
      game.addScore([5, 4]);
      }
    expect(game.getScoreCard()).toEqual("There are 5 frames to go!");
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
    let scoreCardDouble = [[2, 4], [5, 3], [7, 1], [8, 1], [5, 0], [2, 4], [5, 3], [7, 1], [8, 1], [5, 0]]
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    expect(game.addScore([6, 3])).toEqual("Game Complete");
    expect(game.total()).toEqual(72);
  })

  it('adds a bonus score when the player gets a spare', () => {
    const game = new BowlingGame;
    let scoreCardDouble = [[5, 0], [5, 5], [5, 1], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0]] // bonus of 5
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    game.applyBonus();
    expect(game.total()).toEqual(61);
  })

  it('adds a bonus score when the player gets a strike', () => {
    const game = new BowlingGame;
    let scoreCardDouble = [[5, 0], [10, 0], [7, 1], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0]] // bonus of 8
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    game.applyBonus();
    expect(game.total()).toEqual(66);
  })

  it('when a strike follows another strike the bonus roll is carried over into the next frame', () => {
    const game = new BowlingGame;
    let scoreCardDouble = [[10, 0], [10, 0], [7, 1], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0], [5, 0]] // bonus of 17 and 8
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    game.applyBonus();
    expect(game.total()).toEqual(88);
  })

  it('the perfect game should score 300', () => {
    const game = new BowlingGame;
    let scoreCardDouble = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]] 
    for (let i = 0; i < scoreCardDouble.length; i++) {
    game.addScore(scoreCardDouble[i]);
    }
    game.applyBonus();
    expect(game.total()).toEqual(300);
  })

  it('generates random rolls for a 10 frame game', () => {
    const game = new BowlingGame;
    game.generate_rolls();
    expect(game.getScoreCard().length).toEqual(10);
  });

})
