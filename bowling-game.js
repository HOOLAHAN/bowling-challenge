class BowlingGame {

  constructor(game) {
    this.scoreCard = []
    this.frame = []
    this.game = game
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
      if (i === (this.scoreCard.length - 1) && this.scoreCard[i-1][0] === 10) { // STRIKE IN PENULTIMATE FRAME
        let bonus = this.scoreCard[i][0] + this.scoreCard[i][1]
        this.scoreCard[i - 1].push(bonus)                                
      } else if ((i < (this.scoreCard.length - 2)) && this.scoreCard[i][0] === 10 && this.scoreCard[i + 1][0] === 10) { // TWO STRIKES
        let bonus = this.scoreCard[i + 1][0] + this.scoreCard[i + 2][0]
        this.scoreCard[i].push(bonus)                                    
      } else if ((i < (this.scoreCard.length - 2)) && this.scoreCard[i][0] === 10) { // NORMAL STRIKE
        let bonus = this.scoreCard[i + 1][0] + this.scoreCard[i + 1][1]
        this.scoreCard[i].push(bonus)                                    
      } else if ((i < (this.scoreCard.length - 2)) && this.scoreCard[i][0] + this.scoreCard[i][1] === 10) { // NORMAL SPARE
        let bonus = this.scoreCard[i + 1][0]
        this.scoreCard[i].push(bonus)                                    
      } 
    }
  }

  total() {
    return [this.scoreCard].flat(2).reduce((partialSum, a) => partialSum + a, 0);
  }

  generate_rolls() {
    this.scoreCard = [];
    for (let i = 0; i < 10; i++) {
      this.frame = [];
      let roll1 = Math.floor(Math.random() * 11);
      this.frame.push(roll1);
      if (i === 9 && (roll1 === 10)) { // STRIKE IN FINAL FRAME
        let roll2 = Math.floor(Math.random() * 11);
        this.frame.push(roll2);
        let roll3 = Math.floor(Math.random() * (11 - roll2));
        this.frame.push(roll3);
      } else if (i < 9) {
        let roll2 = Math.floor(Math.random() * (11 - roll1));
        this.frame.push(roll2);
      }
      if (i === 9 && (roll1 != 10)) { 
        let roll2 = Math.floor(Math.random() * (11 -roll1));
        this.frame.push(roll2);
        if (i === 9 && (roll1 + roll2 === 10)) { // SPARE IN FINAL FRAME
          let roll3 = Math.floor(Math.random() * 11);
          this.frame.push(roll3);
        }
      }
      this.scoreCard.push(this.frame);
      }
    return this.scoreCard;
  }

  displayScorecard() {
    let i = 0;
    console.log('\nBowling Game Scorecard: \n-----------------------------------')
    while (i < this.scoreCard.length) {
      if (this.scoreCard[i].length === 2) {
        console.log(`Frame ${i + 1}: \nRoll 1 = ${this.scoreCard[i][0]}, Roll 2 = ${this.scoreCard[i][1]}\n-----------------------------------`);
      } else {
        console.log(`Frame ${i + 1}: \nRoll 1 = ${this.scoreCard[i][0]}, Roll 2 = ${this.scoreCard[i][1]}, Bonus = ${this.scoreCard[i][2]}\n-----------------------------------`);
      }
    i++;
    }
  }

  runGame() {
    game.generate_rolls();
    game.applyBonus();
    game.displayScorecard();
    console.log(`TOTAL: ${game.total()}`);
  }

}

module.exports = BowlingGame;

const game = new BowlingGame;
game.runGame();
