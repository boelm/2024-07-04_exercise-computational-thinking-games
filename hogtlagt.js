//Högt eller lågt
console.log("%c--Högt eller lågt--", "font-weight:bold");

//Play single game if play=true
play = false;
while (play) {
  let resultHogtLagt = hogtlagt();
  console.log(`%cThe magic number was: ${resultHogtLagt}`, "color:hotpink");
  play = confirm("Spela igen?");
}

//Test many rounds
//TODO
console.log(
  `%cTest in progress. Play "Högt eller lågt" by setting play to true :-)`,
  "font-weight:bold;color:orange"
);

function hogtlagt() {
  let magicNumber = 33;
  let userNbr = prompt("Guess a number between 1 and 100");
  while (userNbr != magicNumber) {
    if (userNbr > magicNumber) {
      console.log(
        `%cYou guessed ${userNbr}. You guessed too high`,
        "color:red"
      );
      userNbr = prompt(
        `You guessed ${userNbr}. You guessed too high. Make a new guess!`
      );
    } else {
      console.log(
        `%cYou guessed ${userNbr}. You guessed too low`,
        "color:blue"
      );
      userNbr = prompt(
        `You guessed ${userNbr}. You guessed too low. Make a new guess!`
      );
    }
  }

  return magicNumber;
}
