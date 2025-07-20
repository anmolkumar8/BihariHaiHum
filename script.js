const themeToggle = document.getElementById('theme-toggle');
const music = document.getElementById('festival-music');
let themes = ['light', 'dark', 'festival'];
let current = 0;

function setTheme(index) {
  document.body.className = themes[index];
  themeToggle.textContent = index === 0 ? '🌞' : index === 1 ? '🌙' : '🪔';
  if (themes[index] === 'festival') music.play(); else music.pause();
}

themeToggle.addEventListener('click', () => {
  current = (current + 1) % themes.length;
  setTheme(current);
});

setTheme(current);

// Game Logic
function startQuiz() {
  const container = document.getElementById('game-container');
  container.innerHTML = `
    <h3>🧠 Bihar Quiz</h3>
    <p>Q1: What is the capital of Bihar?</p>
    <button onclick="alert('Correct!')">Patna</button>
    <button onclick="alert('Wrong!')">Gaya</button>
    <p>Q2: Famous festival celebrated in Bihar?</p>
    <button onclick="alert('Correct!')">Chhath Puja</button>
    <button onclick="alert('Wrong!')">Baisakhi</button>
  `;
}

function startMonumentGame() {
  const container = document.getElementById('game-container');
  container.innerHTML = `
    <h3>🏛️ Guess the Monument</h3>
    <img src="assets/golghar.jpg" alt="Monument" style="width:100%; max-width:300px;">
    <p>Guess the name of this monument:</p>
    <button onclick="alert('Correct!')">Golghar</button>
    <button onclick="alert('Wrong!')">Qutub Minar</button>
  `;
}

function startMusicMatch() {
  const container = document.getElementById('game-container');
  container.innerHTML = `
    <h3>🎵 Match the Folk Tune</h3>
    <audio controls>
      <source src="assets/bihar-song.mp3" type="audio/mpeg">
    </audio>
    <p>Which song is this?</p>
    <button onclick="alert('Correct!')">Ho Gaini Dhin</button>
    <button onclick="alert('Wrong!')">Kala Chashma</button>
  `;
}
