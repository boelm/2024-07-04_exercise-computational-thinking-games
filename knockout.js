//Knock out
console.log("%c--Knock out--", "font-weight:bold");

//Play single game if play=true
play = false;
while (play) {
  let knockoutNumber = prompt("Välj knockout nummer (6,7,8 eller 9)");
  let maxScore = prompt("Vid vilken poäng är spelet slut?");
  knockout(knockoutNumber, maxScore);
  play = confirm("Spela igen?");
}

//Test many rounds
let testRounds = 100;
let testMax = 40;
let testloggMsg = "";
testLowScore = 1000;
for (let knockoutNbr = 6; knockoutNbr <= 9; knockoutNbr++) {
  for (let i = 0; i < testRounds; i++) {
    let score = knockout(knockoutNbr, testMax);
    if (score < testLowScore) {
        testLowScore = score;
    }
  }
  testloggMsg += testLowScore+"("+knockoutNbr+") ";
//   console.log(
//     `%cLägst ${testLowScore} kast (knockout ${knockoutNbr})`,
//     "color:orange;font-weight:bold"
//   );
}
console.log(`%c${testRounds} omgångar med maxpoäng ${testMax}:`, "font-weight:bold;color:orange");
console.log(testloggMsg);

function knockout(knockoutNumber, maxScore) {
  let score = 0;
  let nbrOfThrows = 0;
  while (score < maxScore) {
    let dice1 = (dice = Math.floor(Math.random() * 6 + 1));
    let dice2 = (dice = Math.floor(Math.random() * 6 + 1));
    sum = dice1 + dice2;
    if (sum == knockoutNumber) {
      score -= sum;
      //   console.log("Knock out number!");
    } else {
      score += sum;
    }
    nbrOfThrows++;
    //console.log(dice1 + " " + dice2 + " = " + sum + " -> score: " + score);
  }
  return nbrOfThrows;
}
