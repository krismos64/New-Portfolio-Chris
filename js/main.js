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
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    // Fermer le menu burger si actif
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

    // Animation de défilement
    gsap.to(window, {
      duration: 0.2,
      scrollTo: {
        y: target,
        offsetY: 80, // Compensation pour la hauteur de la navbar
      },
      ease: "power3.inOut",
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

const modal = document.getElementById("diplomaModal");
const img = document.getElementById("diplomaImage");
const span = document.querySelector(".close-modal");

document.getElementById("showDiploma").onclick = function (e) {
  e.preventDefault();
  modal.style.display = "block";
  img.src = "images/diplome.png";
};

// Fermeture au clic n'importe où
modal.addEventListener("click", function (e) {
  if (e.target === modal || e.target === span || e.target === img) {
    modal.style.display = "none";
  }
});

// Fermeture avec la touche ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});
