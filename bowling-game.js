class BowlingGame {

  constructor() {
    this.scoreCard = []
  }

  addScore(score) {
    this.scoreCard.push(score);
  }

  getScoreCard() {
    return this.scoreCard;
  }

  total() {
    const sum = [scoreCard].flat(2).reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  }

}

module.exports = BowlingGame;