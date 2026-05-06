const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });

}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

/* ================= TYPING EFFECT ================= */

const typingElement = document.querySelector(".typing");

if (typingElement) {

  const text = [
    "AI Engineer",
    "ML Developer",
    "Autonomous Systems Builder",
    "Research & Deployment Enthusiast"
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type(){

    if(count === text.length){
      count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if(letter.length === currentText.length){

      count++;
      index = 0;

      setTimeout(type, 1600);

    }else{

      setTimeout(type, 70);

    }

  })();

}
/* ================= REVEAL ANIMATION ================= */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, { threshold: 0.15 });

reveals.forEach((el) => observer.observe(el));

/* ================= TYPING EFFECT ================= */

const typingElement = document.querySelector(".typing");

if (typingElement) {

  const text = [
    "AI Engineer",
    "ML Developer",
    "Autonomous Systems Builder",
    "Research & Deployment Enthusiast"
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type(){

    if(count === text.length){
      count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if(letter.length === currentText.length){

      count++;
      index = 0;

      setTimeout(type, 1600);

    }else{

      setTimeout(type, 70);

    }

  })();

}

/* ================= CUSTOM CURSOR GLOW ================= */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

/* ================= PARALLAX EFFECT ================= */

document.addEventListener("mousemove", (e) => {

  const cards = document.querySelectorAll(".project-card, .achievement-card");

  cards.forEach((card) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;

  });

});

/* ================= RESET CARD POSITION ================= */

document.querySelectorAll(".project-card, .achievement-card")
.forEach((card) => {

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;

  });

});

/* ================= NAVBAR SHADOW ON SCROLL ================= */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    nav.style.background = "rgba(5,8,22,0.82)";
    nav.style.boxShadow = "0 10px 40px rgba(0,0,0,0.35)";

  }else{

    nav.style.background = "rgba(5,8,22,0.55)";
    nav.style.boxShadow = "none";

  }

});

/* ================= FLOATING PARTICLES ================= */

const particleContainer = document.createElement("div");

particleContainer.classList.add("particles");

document.body.appendChild(particleContainer);

for(let i = 0; i < 20; i++){

  const particle = document.createElement("span");

  particle.classList.add("particle");

  particle.style.left = `${Math.random() * 100}%`;

  particle.style.animationDuration = `${8 + Math.random() * 10}s`;

  particle.style.animationDelay = `${Math.random() * 5}s`;

  particleContainer.appendChild(particle);

}
