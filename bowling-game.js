class BowlingGame {

  constructor() {
    this.scoreCard = []
  }

  addScore(score) {
    if (this.scoreCard.length < 10) {
      return this.scoreCard.push(score);
    } else {
      return "Game Complete";
    }
  }

  getScoreCard() {
    return this.scoreCard;
  }

  frameNumber() {
    return this.scoreCard.length;
  }

  total() {
    return [this.scoreCard].flat(2).reduce((partialSum, a) => partialSum + a, 0);
  }

}

module.exports = BowlingGame;