let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const result = document.querySelector("#result");

const score = document.createElement('div');
score.classList.add("score");
result.appendChild(score);


/*function writeResult(text) {
  resultDiv.innerText = 
};*/

function getComputerChoice() {
  const r = Math.random();
  if (r < 0.33) return 'Pizza';
  if (r < 0.67) return 'Sushi';
  return 'Steak';
}

/*function showResult(playerChoice, computerChoice, outcomeMessage) {
  resultDiv.innerText = `
    <strong>You:</strong> ${playerChoice} &nbsp;
    <strong>Computer:</strong> ${computerChoice} <br>
    <strong>Result:</strong> ${outcomeMessage} <br>
    <strong>Score:</strong> You ${humanScore} — Computer ${computerScore}
  `;
}*/

function updateDisplay(playerChoice, computerChoice, outcomeMessage) {
  score.innerText = `You: ${playerChoice}
Computer: ${computerChoice}
Result: ${outcomeMessage}
Score: You ${humanScore} — Computer ${computerScore};
Rounds: ${roundsPlayed}/${maxRounds}`;
}


function endGame() {
  const final =
    humanScore > computerScore ? 'You win the game!'
    : humanScore < computerScore ? 'Computer wins the game!'
    : "The game is a tie!";
  score.innerText += `\nFinal score — You: ${humanScore}, Computer: ${computerScore}. ${final}`;

  document.querySelectorAll('#pizza,#sushi,#steak').forEach(b => b.disabled = true);
}

function playRound(playerSelection) {
  if (roundsPlayed >= maxRounds) return;
  const humanChoice = playerSelection;
  const computerChoice = getComputerChoice();
  if (!humanChoice) return;
  
  roundsPlayed++;

  if (humanChoice === computerChoice) {
    updateDisplay(humanChoice, computerChoice, "It's a tie");
  } else {
    const wins = { pizza: 'Sushi', sushi: 'Steak', steak: 'Pizza' };
    let outcomeMessage;
    if (wins[humanChoice] === computerChoice) {
      humanScore++;
      outcomeMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      outcomeMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    updateDisplay(humanChoice, computerChoice, outcomeMessage);
  }

  if (roundsPlayed >= maxRounds) endGame();
}

function playGame(rounds = 5) {
  for (let i = 1; i <= rounds; i++) {
    const result = playRound();
    if (typeof result === 'string') {
      // playRound returned the invalid-choice string
      outcomeMessage = `Round ${i}: ${result}`;
    } else {
      // playRound used console.log for messages; still show score per round
      outcomeMessage =`Round ${i}: Score: You ${humanScore}, Computer ${computerScore}`;
    }
  }

  const final =
    humanScore > computerScore ? 'You win the game!'
    : humanScore < computerScore ? 'Computer wins the game!'
    : "The game is a tie!";
  outcomeMessage =`Final score — You: ${humanScore}, Computer: ${computerScore}. ${final}`;
  return { humanScore, computerScore, final };
}

playGame(5);
// attach after DOM loaded (place script before </body> or use DOMContentLoaded)

document.getElementById("pizza")?.addEventListener("click", () => playRound('pizza'));
document.getElementById("sushi")?.addEventListener("click", () => playRound('sushi'));
document.getElementById("steak")?.addEventListener("click", () => playRound('steak'));

/*const pizza = document.getElementById("pizza");
const sushi = document.getElementById("sushi");
const steak = document.getElementById("steak");

[pizza, sushi, steak].forEach(btn => {
  if (!btn) return; // defensive in case element missing
  btn.addEventListener("click", () => {
    playRound(btn.id); // pass "pizza", "sushi" or "steak"
  });
});*/















/*function playRound(playerSelection) {
  console.log("playRound called with:", playerSelection);
  // your game logic here
}

// run after DOM is loaded (put script at end of body or use DOMContentLoaded)

const pizza = document.getElementById("pizza");
const sushi = document.getElementById("sushi");
const steak = document.getElementById("steak");


pizza.addEventListener("click", e => console.log(e));
sushi.addEventListener("click", e => console.log(e));
steak.addEventListener("click", e => console.log(e));
/*buttons.forEach(btn => {
  if (!btn) return;
  btn.addEventListener("click", () => {
    const selection = btn.id; // "rock", "paper", or "scissors"
    console.log("button clicked:", selection);
    playRound(selection);
  });
});

 
 
 
 let humanScore = 0;
 let computerScore = 0;

function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) return 'pizza';
  if (random < 0.67) return 'sushi';
  return 'steak';
}

function getHumanChoice() {
  const choice = (window.prompt("Choose: Pizza, Sushi or Steak") || '').toLowerCase();
  if (choice === 'pizza' || choice === 'sushi' || choice === 'steak') return choice;
  return null;
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  if (!humanChoice) return `Invalid choice. Score: You ${humanScore}, Computer ${computerScore}`;

  if (humanChoice === 'pizza') {
    if (computerChoice === 'sushi') {
      humanScore++;
      console.log("You win! Pizza beats sushi");
    } else if (computerChoice === 'steak') {
      computerScore++;
      console.log("You lose! Steak beats pizza");
    } else {
      console.log("It's a tie");
    }
  } else if (humanChoice === 'steak') {
    if (computerChoice === 'sushi') {
      computerScore++;
      console.log("You lose! Sushi beats steak");
    } else if (computerChoice === 'pizza') {
      humanScore++;
      console.log("You win! Steak beats pizza");
    } else {
      console.log("It's a tie!");
    }
  } else if (humanChoice === 'sushi') {
    if (computerChoice === 'steak') {
      humanScore++;
      console.log("You win! Sushi beats steak");
    } else if (computerChoice === 'pizza') {
      computerScore++;
      console.log("You lose! Pizza beats sushi");
    } else {
      console.log("It's a tie");
    }
  }


}




/*function playGame(rounds = 5) {
  for (let i = 1; i <= rounds; i++) {
    const result = playRound();
    if (typeof result === 'string') {
      // playRound returned the invalid-choice string
      console.log(`Round ${i}: ${result}`);
    } else {
      // playRound used console.log for messages; still show score per round
      console.log(`Round ${i}: Score: You ${humanScore}, Computer ${computerScore}`);
    }
  }

  const final =
    humanScore > computerScore ? 'You win the game!'
    : humanScore < computerScore ? 'Computer wins the game!'
    : "The game is a tie!";
  console.log(`Final score — You: ${humanScore}, Computer: ${computerScore}. ${final}`);
  return { humanScore, computerScore, final };
}*/

//playGame(5);
