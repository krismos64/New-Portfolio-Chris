// Initialisation AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Menu Burger
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.innerHTML = navMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Animation des étoiles
function createStars() {
  const container = document.getElementById("stars");
  for (let i = 0; i < 500; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDuration = Math.random() * 15 + 10 + "s";
    star.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(star);
  }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: this.getAttribute("href"),
      ease: "power2.inOut",
    });
  });
});

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  createStars();
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Animation des compétences
  gsap.utils.toArray(".skill-progress").forEach((progress) => {
    gsap.from(progress, {
      width: "0%",
      scrollTrigger: {
        trigger: progress,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
  });
});
