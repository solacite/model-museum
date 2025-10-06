const models = [
  "models/coin.glb",
  "models/claw_machine.glb"
];

const subtitles = [
  "wk 5: coin",
  "wk 5: coin [slot]"
];

let currentIndex = 0;
const viewer = document.getElementById("viewer");
const subtitleDiv = document.querySelector('.subtitle');

function showModel(index) {
  viewer.src = models[index];
  subtitleDiv.textContent = subtitles[index];
}

document.getElementById("prev").onclick = function() {
  currentIndex = (currentIndex - 1 + models.length) % models.length;
  showModel(currentIndex);
};
document.getElementById("next").onclick = function() {
  currentIndex = (currentIndex + 1) % models.length;
  showModel(currentIndex);
};

// init w/ first model
showModel(currentIndex);