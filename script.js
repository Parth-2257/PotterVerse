let allCharacters = [];

window.addEventListener("load", () => {
  fetchCharacters();
});

async function fetchCharacters() {
  try {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    allCharacters = await res.json();
    document.getElementById("spinner").style.display = "none";
    showCards(allCharacters);
  } catch (err) {
    document.getElementById("spinner").textContent = "Failed to load. Try again later.";
  }
}

function showCards(list) {
  const container = document.getElementById("cards");
  container.innerHTML = "";

  list.forEach((char) => {
    const houseClass = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"].includes(char.house)
      ? char.house
      : "other";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${char.image || "https://via.placeholder.com/200x210/16213e/f0c040?text=🧙"}" alt="${char.name}" loading="lazy" />
      <div class="info">
        <h3>${char.name}</h3>
        <span class="house-badge ${houseClass}">${char.house || "Unknown"}</span>
        <p>🦌 ${char.patronus || "No patronus"}</p>
        <p>🪄 ${char.wand?.wood || "?"} / ${char.wand?.core || "?"}</p>
      </div>
    `;

    container.appendChild(card);
  });
}