

const slides = document.querySelectorAll(".slide");
const heroText = document.querySelector(".hero-text");
const title = document.getElementById("hero-title");
const description = document.getElementById("hero-description");

let currentSlide = 0;

if (slides.length && heroText && title && description) {
  heroText.classList.add("show");

  setInterval(() => {
    heroText.classList.remove("show");

    setTimeout(() => {
      slides.forEach(slide => slide.classList.remove("active"));
      currentSlide = (currentSlide + 1) % slides.length;

      const activeSlide = slides[currentSlide];
      activeSlide.classList.add("active");

      title.innerHTML = activeSlide.dataset.title;
      description.textContent = activeSlide.dataset.text;

      heroText.classList.add("show");
    }, 300);

  }, 5000);
}



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}



document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card");

  if (searchInput && productCards.length) {
    searchInput.addEventListener("input", () => {
      const value = searchInput.value.toLowerCase().trim();

      productCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(value) ? "" : "none";
      });
    });
  }
});


const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("formError");

    error.style.color = "red";

    if (name === "") {
      error.textContent = "Name cannot be empty.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      error.textContent = "Please enter a valid email address.";
      return;
    }

    if (message.length < 10) {
      error.textContent = "Message must be at least 10 characters long.";
      return;
    }

    error.style.color = "green";
    error.textContent = "Message sent successfully!";

    form.reset();
  });
}
