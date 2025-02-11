const guessField = document.getElementById("field");
const guessSubmit = document.getElementById("submit");
const generate = document.getElementById("generate");
let guess = document.getElementById("answer");
const spinner = document.getElementById("spinner");
const history = document.getElementById("history");
let historyList = document.getElementById("historyList");
let numberGenerated = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = document.getElementById("attempts");
let attemptsWord = "attempts";
let attempts = 5;

console.log(numberGenerated);

guess.innerHTML = "You have 5 attempts!";

generate.addEventListener("click", function () {
  showSpinner();
  setTimeout(() => {
    hideSpinner();

    guess.textContent = "New number generated! You have 5 attempts!";
  }, 1000);

  numberGenerated = Math.floor(Math.random() * 100) + 1;
  attempts = 5;

  attemptsLeft.textContent = attempts;
  historyList.innerHTML = "";
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  console.log(numberGenerated);
});

guessSubmit.addEventListener("click", function () {
  if (guessField.value === "") {
    alert("Please enter a number");
  } else {
    showSpinner();
    setTimeout(() => {
      checkGuess();
      hideSpinner();
    }, 1000); // Simulate a delay
  }
});

function checkGuess() {
  let userGuess = Number(guessField.value);
  attempts--;
  if (attempts === 0) {
    guess.textContent = `You have no more attempts left! The number was ${numberGenerated}.`;
    guessField.disabled = "true";
    guessSubmit.disabled = "true";
  } else if (userGuess < numberGenerated) {
    guess.textContent = "Too low! You have " + attempts + " attempts left!";
    attemptsLeft.textContent = attempts;
    guessField.value = "";
  } else if (userGuess > numberGenerated) {
    guess.textContent = "Too high! You have " + attempts + " attempts left!";
    attemptsLeft.textContent = attempts;
    guessField.value = "";
  } else {
    guessField.disabled = "false";
  }
  if (userGuess === numberGenerated) {
    guess.textContent =
      "Congratulations! You got it right! The number was " +
      numberGenerated +
      "!";
    guessField.disabled = "true";
    guessSubmit.disabled = "true";
  } else if (userGuess > numberGenerated) {
    attemptsLeft.textContent = attempts;
    if (userGuess > 100 || userGuess < 1) {
      guess.textContent = "Please enter a number between 1 and 100!";
    }
    guessField.value = "";
  }
}

function attemptsTaken() {
  if (guessSubmit) {
  }
}

function showSpinner() {
  spinner.style.display = "block";
}

// Hide the spinner
function hideSpinner() {
  spinner.style.display = "none";
}
