//Easy Method
// const computerChoiceDisplay = document.getElementById("computer-choice");
// const userChoiceDisplay = document.getElementById("your-choice");
// const resultDisplay = document.getElementById("result");
// const possibleChoices = document.querySelectorAll("button");
// let userChoice;
// let computerChoice;
// let result;
// possibleChoices.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerText = userChoice;
//     generateComputerChoice();
//     getResult();
//   });
// });

// function generateComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
//   if (randomNumber === 1) {
//     computerChoice = "Rock";
//   }
//   if (randomNumber === 2) {
//     computerChoice = "Scissors";
//   }
//   if (randomNumber === 3) {
//     computerChoice = "Paper";
//   }
//   computerChoiceDisplay.innerText = computerChoice;
// }

// function getResult() {
//   if (computerChoice === userChoice) {
//     result = "It is a draw";
//   }
//   if (computerChoice === "Rock" && userChoice === "Paper") {
//     result = "You Win";
//   }
//   if (computerChoice === "Rock" && userChoice === "Scissors") {
//     result = "You Lost";
//   }
//   if (computerChoice === "Paper" && userChoice === "Scissors") {
//     result = "You Win";
//   }
//   if (computerChoice === "Paper" && userChoice === "Rock") {
//     result = "You Lost";
//   }
//   if (computerChoice === "Scissors" && userChoice === "Rock") {
//     result = "You Win";
//   }
//   if (computerChoice === "Scissors" && userChoice === "Paper") {
//     result = "You Lost";
//   }
//   resultDisplay.innerHTML = result;
// }

//Intermediate Method
// const userChoiceDisplay = document.createElement("h2");
// const computerChoiceDisplay = document.createElement("h2");
// userChoiceDisplay.classList.add("heading-container");
// computerChoiceDisplay.classList.add("heading-container");
// const resultDisplay = document.createElement("h1");
// resultDisplay.classList.add("result");
// const gameGrid = document.getElementById("game");
// gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

// const choices = ["Rock", "Paper", "Scissors"];
// let userChoice;
// let computerChoice;

// const handleClick = (e) => {
//   userChoice = e.target.id;
//   userChoiceDisplay.innerHTML = `User Choice: ${userChoice}`;
//   generateComputerChoice();
//   getResults();
// };

// const generateComputerChoice = () => {
//   computerChoice = choices[Math.floor(Math.random() * choices.length)];
//   computerChoiceDisplay.innerHTML = `Computer Choice: ${computerChoice}`;
// };

// for (let i = 0; i < choices.length; i++) {
//   const button = document.createElement("button");
//   button.classList.add("button-container");
//   button.id = choices[i];
//   button.innerHTML = choices[i];
//   button.addEventListener("click", handleClick);
//   gameGrid.appendChild(button);
// }

// const getResults = () => {
//   switch (userChoice + computerChoice) {
//     case "ScissorsPaper":
//     case "RockScissors":
//     case "PaperRock":
//       resultDisplay.innerHTML = "You Win";
//       break;

//     case "PaperScissors":
//     case "RockPaper":
//     case "ScissorsRock":
//       resultDisplay.innerHTML = "You Lose";
//       break;

//     case "PaperPaper":
//     case "RockRock":
//     case "ScissorsScissors":
//       resultDisplay.innerHTML = "It's a Draw";
//       break;
//   }
// };

const resultDisplay = document.getElementById("result");
const choicesDisplay = document.getElementById("choices");
const choices = ["Rock", "Paper", "Scissors"];

const handleClick = (e) => {
  getResults(
    e.target.innerHTML,
    choices[Math.floor(Math.random() * choices.length)]
  );
};
choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.classList.add("button-container");
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "ScissorsPaper":
    case "RockScissors":
    case "PaperRock":
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You Win!`;
      break;

    case "PaperScissors":
    case "RockPaper":
    case "ScissorsRock":
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You Lose!`;
      break;

    case "PaperPaper":
    case "RockRock":
    case "ScissorsScissors":
      resultDisplay.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. It's a Draw!`;
      break;
  }
};
