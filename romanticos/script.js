const frases = [
  "Contigo los días se vuelven mágicos ✨",
  "Eres mi lugar favorito ❤️",
  "Cada segundo contigo vale oro 💫",
  "Gracias por existir en mi mundo 💖",
  "Te elijo una y otra vez, Ketty 🌹"
];

let indice = 0;
let intervalo;

function empezarMagia() {
  // Reproducir música tras el primer clic
  const musica = document.getElementById("bgMusic");
  musica.play().catch(() => {
    alert("Haz clic para activar la música 🎵");
  });

  document.getElementById("mensajeFinal").innerText = "¡Te amo con todo mi corazón, Ketty! 💌";

  intervalo = setInterval(() => {
    indice = (indice + 1) % frases.length;
    document.getElementById("frase").innerText = frases[indice];
  }, 4000);
}

function contarDias() {
  const inicio = new Date("2025-04-20");
  const hoy = new Date();
  const diferencia = hoy - inicio;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  document.getElementById("dias").innerText = dias;
}

contarDias();

function crearPetalos() {
  for (let i = 0; i < 30; i++) {
    const petalo = document.createElement("div");
    petalo.classList.add("flor");
    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.animationDuration = 6 + Math.random() * 4 + "s";
    petalo.style.opacity = Math.random();
    document.body.appendChild(petalo);
  }
}

window.onload = crearPetalos;


