// ========================
// 1. Guess the Monument
// ========================
document.getElementById("start-monument-quiz").addEventListener("click", function () {
  const questions = [
    {
      question: "Which monument is located in Bodh Gaya?",
      options: ["Mahabodhi Temple", "Golghar", "Nalanda Ruins", "Vikramshila"],
      answer: "Mahabodhi Temple"
    },
    {
      question: "Where is the ancient university of Nalanda located?",
      options: ["Patna", "Gaya", "Nalanda", "Vaishali"],
      answer: "Nalanda"
    }
  ];

  let score = 0;
  let current = 0;

  function askQuestion() {
    const q = questions[current];
    const userAnswer = prompt(`${q.question}\nOptions:\n${q.options.join("\n")}`);
    if (userAnswer && userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer was ${q.answer}`);
    }
    current++;
    if (current < questions.length) {
      askQuestion();
    } else {
      alert(`Quiz Over! Your score is ${score}/${questions.length}`);
    }
  }

  askQuestion();
});

// =============================
// 2. Festival Match Challenge
// =============================
document.getElementById("start-festival-match").addEventListener("click", function () {
  const festivals = {
    "Chhath Puja": "Sun God Worship",
    "Sama-Chakeva": "Brother-Sister Bond",
    "Sonepur Mela": "Cattle Fair",
    "Durga Puja": "Goddess Worship"
  };

  let score = 0;
  let keys = Object.keys(festivals);
  keys = keys.sort(() => Math.random() - 0.5); // Shuffle

  keys.forEach((festival) => {
    const answer = prompt(`What is "${festival}" known for?`);
    if (answer && answer.toLowerCase().includes(festivals[festival].toLowerCase())) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! Correct: ${festivals[festival]}`);
    }
  });

  alert(`You matched ${score} out of ${keys.length} festivals correctly!`);
});

// ===========================
// 3. Folk Song Audio Match
// ===========================
document.getElementById("start-folk-song").addEventListener("click", function () {
  const songs = [
    { src: "audio/bidesia.mp3", name: "Bidesia" },
    { src: "audio/jhijhiya.mp3", name: "Jhijhiya" },
    { src: "audio/sohar.mp3", name: "Sohar" }
  ];

  const random = songs[Math.floor(Math.random() * songs.length)];
  const audio = new Audio(random.src);
  audio.play();

  const guess = prompt("Guess the folk song being played (Bidesia, Jhijhiya, Sohar):");

  if (guess && guess.toLowerCase() === random.name.toLowerCase()) {
    alert("Correct!");
  } else {
    alert(`Wrong! It was ${random.name}`);
  }

  audio.pause();
});
