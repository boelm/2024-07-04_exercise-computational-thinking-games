//Sten, sax och påse
console.log("%c--Sten, sax och påse--", "font-weight:bold");

//Play single game if play=true
play = false;
while (play) {
  let resultStenSaxPase = stenSaxPase("Duck#1", "Duck#2", play);
  console.log("The winner is: " + resultStenSaxPase);
  play = confirm("Spela igen?");
}

//Test many rounds
let winner = 0;
let nbrTestRounds = 100;
for (let i = 0; i < nbrTestRounds; i++) {
  winner += stenSaxPase(0, 1, false);
}
console.log(`%cP1 won ${winner} and P2 won ${nbrTestRounds-winner} rounds`,'color:orange;font-weight:bold');

//returns the winner of sten-sax-påse either name1 or name2. Log to console: true/false
function stenSaxPase(name1, name2, consoleLog) {
  let player1 = { name: name1, wins: 0, hand: 0, handName: "no hand" };
  let player2 = { name: name2, wins: 0, hand: 0, handName: "no hand" };

  while (player1.wins < 3 && player2.wins < 3) {
    player1.hand = Math.floor(Math.random() * 3);
    player2.hand = Math.floor(Math.random() * 3);
    //Tänk hand: 0=sten, 1=sax, 2=påse
    switch (player1.hand) {
      case 0:
        player1.handName = "sten";
        break;
      case 1:
        player1.handName = "sax";
        break;
      case 2:
        player1.handName = "påse";
        break;
      default:
        player1.handName = "not a hand";
    }
    switch (player2.hand) {
      case 0:
        player2.handName = "sten";
        break;
      case 1:
        player2.handName = "sax";
        break;
      case 2:
        player2.handName = "påse";
        break;
      default:
        player2.handName = "not a hand";
    }
    let logMsg = String(
      player1.name +
        player1.handName +
        " " +
        player2.name +
        player2.handName +
        " "
    );

    //Om p1's hand +1 (mod3) är lika med p2's hand, så vinner p1!
    isPlayer1Winner = (player1.hand + 1) % 3 == player2.hand;
    if (player1.hand == player2.hand) {
      logMsg += "No";
    } else if (isPlayer1Winner) {
      player1.wins++;
      logMsg += player1.name;
    } else {
      player2.wins++;
      logMsg += player2.name;
    }
    logMsg += " winner!";
    if (consoleLog) {
      console.log(logMsg);
    }
  }
  if (player1.wins > player2.wins) {
    return name1;
  } else {
    return name2;
  }
}

//kod-skafferi
//     const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }
