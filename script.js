function getHumanChoice() {
  let choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
  while (!['rock', 'paper', 'scissors'].includes(choice)) {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
      choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
  }
  return choice;
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return "It's a tie!";
  } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
             (userChoice === 'paper' && computerChoice === 'rock') ||
             (userChoice === 'scissors' && computerChoice === 'paper')) {
      return "You win!";
  } else {
      return "Computer wins!";
  }
}

function playGame() {
  const userChoice =  getHumanChoice();
  const computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);
}

playGame();
