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
    if (this.scoreCard.length === 10) {
      return this.scoreCard;
    } else {
      return `There are ${10 - this.scoreCard.length} frames to go!`
    }
    
  }

  frameNumber() {
    return this.scoreCard.length;
  }

  applyBonus() {
    for (let i = 0; i < (this.scoreCard.length); i++) {
      if (i === (this.scoreCard.length - 1) && this.scoreCard[i][0] === 10) { 
        let bonus = this.scoreCard[i][0] + this.scoreCard[i][1]
        this.scoreCard[i - 1].push(bonus)                                // STRIKE IN PENULTIMATE FRAME
      } else if ((i < (this.scoreCard.length - 2)) && this.scoreCard[i][0] === 10 && this.scoreCard[i + 1][0] === 10) {
        let bonus = this.scoreCard[i + 1][0] + this.scoreCard[i + 2][0]
        this.scoreCard[i].push(bonus)                                    // TWO STRIKES
      } else if ((i < (this.scoreCard.length - 2)) && this.scoreCard[i][0] === 10) {
        let bonus = this.scoreCard[i + 1][0] + this.scoreCard[i + 1][1]
        this.scoreCard[i].push(bonus)                                    // NORMAL STRIKE
      } else if ((i < (this.scoreCard.length - 2)) && this.scoreCard[i][0] + this.scoreCard[i][1] === 10) {
        let bonus = this.scoreCard[i + 1][0]
        this.scoreCard[i].push(bonus)                                    // NORMAL SPARE
      }
    }
  }

  total() {
    return [this.scoreCard].flat(2).reduce((partialSum, a) => partialSum + a, 0);
  }

}

module.exports = BowlingGame;