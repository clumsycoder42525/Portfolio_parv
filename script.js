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
