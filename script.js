let data = [];
let favs = new Set();

const grid = document.getElementById('grid');
const srch = document.getElementById('srch');
const hse = document.getElementById('hse');
const srt = document.getElementById('srt');
const fcnt = document.getElementById('fav-count');
const tbtn = document.getElementById('theme-btn');

async function init() {
  const res = await fetch('https://hp-api.onrender.com/api/characters');
  const raw = await res.json();
  data = raw.filter(c => c.image !== "");
  render();
}

function render() {
  const q = srch.value.toLowerCase();
  const h = hse.value;
  const s = srt.value;

  const filtered = data
    .filter(c => c.name.toLowerCase().includes(q))
    .filter(c => h === 'all' || c.house === h)
    .sort((a, b) => s === 'az' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  grid.innerHTML = filtered.length ? filtered.map(c => `
    <div class="card">
      <div class="heart ${favs.has(c.name) ? 'active' : ''}" onclick="toggleFav('${c.name.replace(/'/g, "\\'")}')">
        ${favs.has(c.name) ? '❤️' : '♡'}
      </div>
      <img src="${c.image}" alt="${c.name}">
      <div class="info">
        <h3>${c.name}</h3>
        <p>${c.house || 'Unknown'}</p>
      </div>
    </div>
  `).join('') : '<p>No characters found.</p>';
}

function toggleFav(name) {
  favs.has(name) ? favs.delete(name) : favs.add(name);
  fcnt.innerText = `❤️ ${favs.size}`;
  render();
}

tbtn.onclick = () => {
  document.body.classList.toggle('dark');
  tbtn.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
};

[srch, hse, srt].forEach(el => el.oninput = render);

init();