const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainChances = document.querySelector(".chances");

window.addEventListener("load", () => {
  input.focus();
});

let randNum = Math.floor(Math.random() * 100);
console.log(randNum);

chance = 10;

checkButton.addEventListener("click", () => {
  chance--;

  let inputValue = input.value;

  if (inputValue == randNum) {
    [guess.textContent, input.disabled] = ["Congratulations, you won!", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "green"];
  } else if (inputValue > randNum && inputValue < 100 && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = [
      "Your guess is high",
      chance,
    ];
    guess.style.color = "#333";
  } else if (inputValue < randNum && inputValue > 0 && inputValue < 100) {
    [guess.textContent, remainChances.textContent] = [
      "Your guess is low",
      chance,
    ];
    guess.style.color = "#333";
  } else {
    [guess.textContent, remainChances.textContent] = [
      "Your guess is INVALID",
      chance,
    ];
    guess.style.color = "#De0611";
  }

  if (chance == 0) {
    [checkButton.textContent, input.disabled, inputValue] = [
      "Replay",
      true,
      "",
    ];
    [guess.textContent, guess.style.color] = ["You lost the game!!", "#de0611"];
  }

  if (chance < 0) {
    window.location.reload();
  }
});
