//Söka efter likheter mellan ord
console.log("%c--Söka efter likheter mellan ord--", "font-weight:bold");

//Play single game if play=true
play = false;
while (play) {
  let result = ordlikheter();
  console.log(`%c${result} letters in common`, "color:green;font-weight:bold");
  play = confirm("Spela igen?");
}

//Test many rounds
//TODO
console.log(
  `%cTest in progress. Play Ordlikheter by setting play to true :-)`,
  "font-weight:bold;color:orange"
);

function ordlikheter() {
  let word1 = prompt("one word, please!");
  let word2 = prompt("one last word, please!");
  let lettersInCommon = 0;
  let minWordLength = word1.length;
  if (word2.length < minWordLength) {
    minWordLength = word2.length;
  }
  for (let i = 0; i < minWordLength; i++) {
    if (word1[i] == word2[i]) {
      lettersInCommon++;
    }
  }
  return lettersInCommon;
}
