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

  function type() {

    const currentText = text[count];

    typingElement.textContent =
      currentText.slice(0, index++);

    if (index > currentText.length) {

      count = (count + 1) % text.length;

      index = 0;

      setTimeout(type, 1400);

    } else {

      setTimeout(type, 70);

    }

  }

  type();

}

/* ================= CURSOR GLOW ================= */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left = `${e.clientX}px`;

  glow.style.top = `${e.clientY}px`;

});

/* ================= CARD HOVER EFFECT ================= */

const cards = document.querySelectorAll(
  ".project-card, .achievement-card"
);

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY =
      ((x / rect.width) - 0.5) * 8;

    const rotateX =
      ((y / rect.height) - 0.5) * -8;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;

  });

});

/* ================= NAVBAR SCROLL ================= */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    nav.style.background =
      "rgba(6,8,22,0.82)";

    nav.style.boxShadow =
      "0 10px 40px rgba(0,0,0,0.35)";

  } else {

    nav.style.background =
      "rgba(6,8,22,0.55)";

    nav.style.boxShadow = "none";

  }

});

/* ================= FLOATING PARTICLES ================= */

const particleContainer =
  document.createElement("div");

particleContainer.classList.add("particles");

document.body.appendChild(particleContainer);

for (let i = 0; i < 20; i++) {

  const particle =
    document.createElement("span");

  particle.classList.add("particle");

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${8 + Math.random() * 8}s`;

  particle.style.animationDelay =
    `${Math.random() * 5}s`;

  particleContainer.appendChild(particle);

}
