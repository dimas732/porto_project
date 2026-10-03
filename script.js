// Typing Animation Effect
const words = ["Web Developer", "Frontend Designer", "UI/UX Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1500; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

// Contact Form Handler
document.addEventListener("DOMContentLoaded", () => {
  typeEffect();

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Terima kasih, ${name}! Pesan Anda telah berhasil dikirim.`);
    form.reset();
  });
});