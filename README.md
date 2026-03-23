# ⚡ PotterVerse

### Harry Potter Explorer

A simple and responsive web app built with vanilla HTML, CSS, and JavaScript that lets you explore Harry Potter characters and spells using real data from the HP API.

---

## Purpose

PotterVerse is built for anyone who wants to explore the wizarding world in a fun and interactive way. You can search for your favourite characters, filter them by Hogwarts house, browse through spells, and sort everything alphabetically — all in a clean dark-themed interface inspired by the wizarding world.

---

## API Used

**HP API**

| Detail         | Info                                      |
| -------------- | ----------------------------------------- |
| Base URL       | https://hp-api.onrender.com/api           |
| Documentation  | https://hp-api.onrender.com               |
| Free Tier      | Yes (no API key required)                 |
| Data Provided  | Character names, houses, patronus, wand details, images, roles, and spell names with descriptions |

---

## Planned Features

### Core Features

- **API Integration** — Fetch character and spell data directly from the HP API using `fetch`
- **Character Cards** — Display each character's image, name, house, patronus, and wand info
- **Loading States** — Show a loading indicator while data is being fetched
- **Fully Responsive** — Works properly on mobile, tablet, and desktop
- **Search** — Search characters or spells by name in real time
- **Filter** — Filter characters by Hogwarts house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)
- **Sort** — Sort characters alphabetically A-Z or Z-A
- **Dark / Light Mode** — Toggle between dark and light themes

### Bonus Features (Optional)

- **Favourites** — Save your favourite characters locally
- **Local Storage** — Keep your favourites and theme preference saved even after closing the browser
- **Debounced Search** — Avoid unnecessary filtering on every single keystroke
- **Spell Explorer** — Separate section to browse and search all spells

---

## Technologies

- HTML, CSS, JavaScript
- HP API + Fetch API
- localStorage (for favourites and theme preference)

---

## Setup & Run

1. Clone or download this repository
2. Open `index.html` in your browser
3. That's it — no API key needed, no setup, just open and use