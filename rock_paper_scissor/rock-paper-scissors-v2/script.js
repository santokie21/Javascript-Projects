let playGame = confirm("Shall we play rock, paper or scissors?");
if (playGame) {
  while (playGame) {
    let playerChoice = prompt("Please enter rock, paper, scissor ;)");
    if (playerChoice || playerChoice === "") {
      let playerOne = playerChoice.trim().toLowerCase();
      if (
        playerOne === "rock" ||
        playerOne === "paper" ||
        playerOne === "scissor"
      ) {
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let repArray = ["rock", "paper", "scissor"];
        let computerOne = repArray[computerChoice];
        if (computerOne === playerOne) {
          alert("Tie Game!!!");
        } else if (
          (computerOne === "rock" && playerOne === "scissor") ||
          (computerOne === "paper" && playerOne === "rock") ||
          (computerOne === "paper" && playerOne === "scissor")
        ) {
          alert(
            `Player: ${playerOne}\nComputer: ${computerOne}\nComputer Wins!`
          );
        } else {
          alert(`Player: ${playerOne}\nComputer: ${computerOne}\nPlayer Wins!`);
        }
        playGame = confirm("Shall we play again?");
        if (!playGame) alert("OK, Thanks for playing");
        continue;
      } else {
        alert("You entered wrong value :( \nPlease Change it this time");
        continue;
      }
    } else {
      alert("Oops! you changed your mind, Maybe next time :)");
      break;
    }
  }
} else {
  alert("OK! Maybe next time :)");
}
