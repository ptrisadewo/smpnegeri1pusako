// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// === NAVBAR SHRINK ON SCROLL ===
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(30, 60, 114, 0.98)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  } else {
    header.style.background = "rgba(30, 60, 114, 0.95)";
    header.style.boxShadow = "none";
  }
});

// === REVEAL ANIMATION ON SCROLL ===
const reveals = document.querySelectorAll(".container, .card, #prestasi li");

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 80) {
      el.classList.add("active");
    }
  });
});