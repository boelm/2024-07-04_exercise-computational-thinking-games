//Stegen
console.log("%c--Stegen--", "font-weight:bold");

//Play single game if play=true
let play = false;
while (play) {
  let resultStegen = stegen();
  console.log(
      `%cGrattis du fick stege efter ${resultStegen} kast.`,
      "color:green;font-weight:bold"
    );
  play = confirm("Spela igen?");
}

//Test many rounds
let testLowScore = 1000;
for (let i = 0; i < 100; i++) {
  let score = stegen();
  if (score < testLowScore) {
    testLowScore = score;
  }
}
console.log(
  `%cPå 100 omgångar var ditt lägsta antal kast ${testLowScore} kast.`,
  "color:orange;font-weight:bold"
);

function stegen() {
  let goal = 1;
  let nbrOfThrows = 0;
  let dice = 0;
  while (goal < 7) {
    dice = Math.floor(Math.random() * 6 + 1); //slumpar fram tal mellan 1 och 6
    nbrOfThrows++;

    if (dice == goal) {
      goal++;
    }
  }
    
  return nbrOfThrows;
}

//Kod-skafferi

// let strDice = dice.toString();
//let trimmed = strDice.replace(/^\n+|\n+$/g, '');
//console.log(dice);


