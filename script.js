const models = [
  "models/lobbydraft.glb"
];

let currentIndex = 0;
const viewer = document.getElementById("viewer");

function showModel(index) {
  viewer.src = models[index];
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