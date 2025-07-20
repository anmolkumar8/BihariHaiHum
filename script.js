const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const music = document.getElementById("bgMusic");

let isFestival = true;

themeToggle.addEventListener("click", () => {
  isFestival = !isFestival;
  if (isFestival) {
    body.classList.add("festival-theme");
    body.classList.remove("dark-theme");
    music.play();
  } else {
    body.classList.add("dark-theme");
    body.classList.remove("festival-theme");
    music.pause();
  }
});

// Simple Game Logic Examples
function startQuiz() {
  const question = confirm("Is Patna the capital of Bihar?");
  alert(question ? "Correct! 🎉" : "Oops! Try again.");
}

function startMonumentGuess() {
  const guess = prompt("Guess the monument: This dome-shaped structure stores grain and is in Patna.");
  if (guess.toLowerCase().includes("golghar")) {
    alert("Correct! That's Golghar.");
  } else {
    alert("Nope! It's Golghar.");
  }
}

function startFestivalMatch() {
  const ans = confirm("Is Chhath Puja celebrated in Bihar?");
  alert(ans ? "Correct! 🌞 Chhath is major in Bihar." : "Wrong! Chhath is very important.");
}

function startFolkTune() {
  alert("🎵 Game will match folk tunes to their regions – Coming soon!");
}
