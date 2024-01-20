//get user choice
const initGame = () => {
  const startGame = confirm("Shall we play rock, paper ,scissor?");
  startGame ? playGame() : nextTime();
};

//user don't want to play
const nextTime = () => {
  alert("Ok! maybe Next time :)");
};

//user accepts to play
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decideNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    let computerChoice = getComputerChoice();
    let result = decideWinner(playerChoice, computerChoice);
    displayResult(result);
    if (wantsToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

//to ask user whether he wants to play again
const wantsToPlayAgain = () => {
  return confirm("Want to Play Again?");
};

//to announce the winner
const displayResult = (result) => {
  alert(result);
};

//to determine the winner of the game
const decideWinner = (computer, player) => {
  if (player === computer) {
    return "Tie Game!!!";
  } else if (
    (computer === "scissor" && player === "paper") ||
    (computer === "rock" && player === "scissor") ||
    (computer === "paper" && player === "rock")
  ) {
    return `Player: ${player}\n Computer: ${computer}\n Computer Wins!`;
  } else {
    return `Player: ${player}\n Computer: ${computer}\n Player Wins!`;
  }
};

//to get the computer choice
const getComputerChoice = () => {
  return setComputerChoice(Math.floor(Math.random() * 3 + 1));
};

//to set the computer choice
const setComputerChoice = (computerChoice) => {
  let rpsArray = ["rock", "paper", "scissor"];
  return rpsArray[computerChoice];
};

//evaluate whether user entered the correct input value
const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissor"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

// executes if user doesn't execute the correct value
const invalidChoice = () => {
  alert("You entered wrong choice \nMake sure you enter correctly this time.");
};

// user doesn't want to play the game
const decideNotToPlay = () => {
  alert("OK! Maybe you changed your mind, Next time :)");
};

//giving a note of thanks for playing
const thanksForPlaying = () => {
  alert("Thanks for playing :)");
};

//to get user choice after accepting the game
const getPlayerChoice = () => {
  return prompt("Please enter rock, paper, scissor.");
};

//to get the correct format of the user input and cut down the waste spaces
const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

//here the game initiation starts
initGame();
