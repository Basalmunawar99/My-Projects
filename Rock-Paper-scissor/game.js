const choices = document.querySelectorAll('.choice');
const userChoiceText = document.getElementById('user-choice');
const computerChoiceText = document.getElementById('computer-choice');
const outcomeText = document.getElementById('outcome');

const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.getAttribute('data-choice');
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    userChoiceText.textContent = `Your Choice: ${userChoice}`;
    computerChoiceText.textContent = `Computer's Choice: ${computerChoice}`;
    outcomeText.textContent = `Result: ${result}`;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a Tie!';
  }

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
}
