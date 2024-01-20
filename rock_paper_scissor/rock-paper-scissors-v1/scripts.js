let playGame = confirm("Shall we play game?");
if (playGame) {
  let playerChoice = prompt("Please enter rock, paper or scissor!!!");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissor"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computerOne =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissor";
      if (playerOne === computerOne) {
        alert("Tie Game!!!");
      } else if (playerOne === "rock" && computerOne === "paper") {
        alert(
          `player: ${playerChoice}\nComputer: ${computerOne}\n Computer wins!`
        );
      } else if (playerOne === "paper" && computerOne === "scissor") {
        alert(
          `player: ${playerChoice}\nComputer: ${computerOne}\n Computer wins!`
        );
      } else if (playerOne === "scissor" && computerOne === "rock") {
        alert(
          `player: ${playerChoice}\nComputer: ${computerOne}\n Computer wins!`
        );
      } else {
        alert(
          `player: ${playerChoice}\nComputer: ${computerOne}\n Player wins!`
        );
      }
      let playAgain = confirm("Do you want to play again?");
      if (playAgain) {
        location.reload();
      } else {
        alert("Ok, Thanks for playing :)");
      }
    } else {
      alert("You didn't enter rock, paper or scissor :(");
      location.reload();
    }
  } else {
    alert("I Guess you changed your mind!, Maybe next Time!");
  }
} else {
  alert("Ok, Maybe Next Time :)");
}
