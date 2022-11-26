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

  applyBonus() {
    for (let i = 0; i < this.scoreCard.length; i++) {
      if (this.scoreCard[i][0] === 10) {
        let bonus = this.scoreCard[i + 1][0] + this.scoreCard[i + 1][1]
        this.scoreCard[i].push(bonus)
      } else if (this.scoreCard[i][0] + this.scoreCard[i][1] === 10) {
        let bonus = this.scoreCard[i + 1][0]
        this.scoreCard[i].push(bonus)
      }
    }
  }

  total() {
    return [this.scoreCard].flat(2).reduce((partialSum, a) => partialSum + a, 0);
  }

}

module.exports = BowlingGame;