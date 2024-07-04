//Going to Boston
console.log("%c--Going to Boston--", "font-weight:bold");

//Play single game if play=true
play = false;
while (play) {
  let resultBoston = boston();
  console.log("result: "+resultBoston);
  play = confirm("Spela igen?");
}

//Test many rounds
let testHighScore = 0;
for (let ti = 0; ti < 2; ti++) {
  let score = boston();
  if (score > testHighScore) {
    testHighScore = score;
  }
}
console.log(
  `%cPå 100 omgångar var ditt högsta reultat ${testHighScore} poäng av max 18.`,
  "color:orange;font-weight:bold"
);

function boston() {
  let result = 0;
  for (let i = 2; i >= 0; i--) {
    let dices = [];
    for (let k = i; k >= 0; k--) {
      dices[k] = Math.floor(Math.random() * 6 + 1); 
    } 
    dicesSorted = dices.sort();
    result += dicesSorted[i];
    
    // console.log(dicesSorted);
    // console.log(dicesSorted[i]);
    // console.log(result);
  }
  return result;
}
