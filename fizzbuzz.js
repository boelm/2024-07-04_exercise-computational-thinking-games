//Fizzbuzz
console.log("%c--Fizzbuzz--", "font-weight:bold");

//Play single game if play=true
play = false;
while (play) {
  let result = fizzbuzz();
  console.log(result);
  play = confirm("Spela igen?");
}

//Test many rounds
//TODO
console.log(
  `%cTest in progress. Play FizzBuzz by setting play to true :-)`,
  "font-weight:bold;color:orange"
);

function fizzbuzz() {
  let logMsg = "";
  for (let i = 1; i <= 100; i++) {
    logMsg += i + ": ";
    if (i % 3 == 0) {
      logMsg += "Fizz";
    }
    if (i % 5 == 0) {
      logMsg += "Buzz";
    }
    logMsg += "\n";
  }
  return logMsg;
}

// Loopa igenom hundra nummer och om:

// Numret är dividerbart med 3, skriv ut "Fizz"
// Numret är dividerbart med 5, skriv ut "Buzz"
// Numret är dividerbart med 3 och 5, skriv ut "FizzBuzz"
