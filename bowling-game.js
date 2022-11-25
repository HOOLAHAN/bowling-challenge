class BowlingGame {

  constructor() {
    this.scoreCard = []
  }

  total(scoreCard) {
    const sum = [scoreCard].flat(2).reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  }

}

module.exports = BowlingGame;