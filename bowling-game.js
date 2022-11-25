class BowlingGame {

  constructor(scoreCard) {
    this.scoreCard = []
  }

  addScore(score) {
    this.scoreCard.push(score);
  }

  getScoreCard() {
    return this.scoreCard;
  }

  frameNumber() {
    return this.scoreCard.length;
  }

  total(scoreCard) {
    return [scoreCard].flat(2).reduce((partialSum, a) => partialSum + a, 0);
  }

}

module.exports = BowlingGame;