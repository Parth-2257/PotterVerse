let allChar = [];
let visibleCount = 21;

window.addEventListener("load", () => {
  fetchCharacters();
});

async function fetchCharacters() {
  try {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    allChar = await res.json();
    document.getElementById("spinner").style.display = "none";
    showCards(allChar);
  } catch (err) {
    document.getElementById("spinner").textContent = "Failed to load. Try again later.";
  }
}


function showCards(list) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No characters found.</p>";
    return;
  }

  const toShow = list.slice(0, visibleCount);

  toShow.forEach((char) => {
    if (!char.image) return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}" loading="lazy" />
      <div class="info">
        <h3>${char.name}</h3>
        <p>${char.house || "Unknown House"}</p>
        <p>🦌 ${char.patronus || "No patronus"}</p>
        <p>🪄 ${char.wand?.wood || "?"} / ${char.wand?.core || "?"}</p>
      </div>
    `;

    container.appendChild(card);
  });

  const oldBtn = document.getElementById("show-more");
  if (oldBtn) oldBtn.remove();

  if (visibleCount < list.length) {
    const btn = document.createElement("button");
    btn.id = "show-more";
    btn.textContent = "Show More";
    btn.addEventListener("click", () => {
      visibleCount += 21;
      showCards(list);
    });
    document.body.appendChild(btn);
  }
}