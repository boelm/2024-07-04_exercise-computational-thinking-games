//Söka efter likheter mellan ord
console.log("%c--Söka efter likheter mellan ord--", "font-weight:bold");

//Play single game if play=true
play = true;
while (play) {
  let result = ordlikheter();
  console.log(result);
  play = confirm("Spela igen?");
}

//Test many rounds
//TODO
console.log(
  `%cTest in progress. Play Ordlikheter by setting play to true :-)`,
  "font-weight:bold;color:orange"
);

function ordlikheter(){
    return "blahablaha";
}