const products = [
  { name: "Smart Watch", price: "$199" },
  { name: "Wireless Headphones", price: "$149" },
  { name: "Gaming Mouse", price: "$79" },
  { name: "Bluetooth Speaker", price: "$99" },
  { name: "Fitness Band", price: "$59" },
  { name: "VR Headset", price: "$299" }
];
const slides = document.querySelectorAll(".slide");
const heroText = document.querySelector(".hero-text");
const title = document.getElementById("hero-title");
const description = document.getElementById("hero-description");

let currentSlide = 0;

function changeSlide(index) {
  // Hide text first
  heroText.classList.remove("show");

  setTimeout(() => {
    // Change slide
    slides.forEach(slide => slide.classList.remove("active"));
    const activeSlide = slides[index];
    activeSlide.classList.add("active");

    // Update text
    title.innerHTML = activeSlide.dataset.title;
    description.textContent = activeSlide.dataset.text;

    // Show text again
    heroText.classList.add("show");
  }, 300);
}

// Initial animation
heroText.classList.add("show");

// Auto slide every 4 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  changeSlide(currentSlide);
}, 5000);



renderProducts(products, grid);
renderProducts(products.slice(0,3), bestGrid);

// SEARCH FILTER
const search = document.querySelector("#searchInput");
if (search) {
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(value)
    );
    renderProducts(filtered, grid);
  });
}

// FORM VALIDATION
const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;
    const error = document.querySelector("#formError");

    if (!name) return error.textContent = "Name required";
    if (!email.includes("@")) return error.textContent = "Invalid email";
    if (message.length < 10) return error.textContent = "Message too short";

    error.textContent = "Form submitted successfully!";
    error.style.color = "green";
    form.reset();
  });
}

// HAMBURGER
document.querySelector(".hamburger")?.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});
