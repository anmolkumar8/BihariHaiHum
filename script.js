/* =====================
   Bihari Culture Theme
   ===================== */

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Mukta:wght@500&family=Open+Sans&display=swap');

:root {
  --heritage-maroon: #800000;
  --tradition-yellow: #FFD700;
  --mithila-pink: #E75480;
  --earthy-sand: #F5F5DC;
  --royal-indigo: #4B0082;
  --text-dark: #2b2b2b;
  --card-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Global Styles */
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  background-color: var(--earthy-sand);
  color: var(--text-dark);
}

h1, h2, h3 {
  font-family: 'Mukta', sans-serif;
  color: var(--heritage-maroon);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

/* Header / Hero */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(128, 0, 0, 0.8)),
              url('bihar-heritage.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 80px 20px;
  border-bottom: 8px solid var(--tradition-yellow);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
}

/* Game Cards */
.games-section {
  margin: 40px 0;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(128, 0, 0, 0.3);
}

.card h3 {
  color: var(--royal-indigo);
  margin-top: 10px;
}

.card p {
  margin: 10px 0;
}

.card .start-btn {
  display: inline-block;
  background-color: var(--mithila-pink);
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.card .start-btn:hover {
  background-color: var(--royal-indigo);
}

/* Region Section */
.regions {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
}

.region-card {
  flex: 0 0 280px;
  background: white;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  padding: 20px;
  transition: transform 0.3s;
}

.region-card:hover {
  transform: scale(1.05);
}

.region-card h4 {
  color: var(--heritage-maroon);
}

/* Footer */
footer {
  background-color: var(--heritage-maroon);
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  font-size: 0.9rem;
}

/* Bonus: Animated Diya */
.diyaa {
  position: fixed;
  bottom: 10px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: radial-gradient(circle, var(--tradition-yellow), #fdd835);
  border-radius: 50%;
  box-shadow: 0 0 20px #ffd700, 0 0 40px #ffeb3b;
  animation: flicker 1s infinite ease-in-out;
}

@keyframes flicker {
  0%, 100% { box-shadow: 0 0 20px #ffd700, 0 0 40px #ffeb3b; }
  50% { box-shadow: 0 0 30px #ffe066, 0 0 50px #ffff00; }
}

/* Scroll animation (optional) */
[data-aos] {
  opacity: 0;
  transition: all 0.6s ease-in-out;
}

[data-aos].aos-animate {
  opacity: 1;
}
