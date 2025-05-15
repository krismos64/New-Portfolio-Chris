/**
 * Portfolio Christophe Mostefaoui
 * Un portfolio moderne mettant en avant les compétences de développement web
 * @version 1.0.0
 * @author Christophe Mostefaoui
 * @license MIT
 */

// Auto-exécution pour éviter les variables globales
(function () {
  "use strict";

  // Fonction d'initialisation principale
  function init() {
    setupNav();
    createStars();
    setupScrollBehavior();
    setupDiplomaFullscreen();
    setupDropdowns();
    setupAudioPlayers();
    setupVideoPlayer();
    initAOS();
    setupSkillsAnimation();
  }

  // Configuration et amélioration de la navigation
  function setupNav() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLeft = document.querySelector(".nav-left");

    // Création du HTML pour le nom avec effet futuriste
    const nameHTML = `
      <span class="glow-letter">C</span>
      <span class="glow-letter">h</span>
      <span class="glow-letter">r</span>
      <span class="glow-letter">i</span>
      <span class="glow-letter">s</span>
      <span class="glow-letter">t</span>
      <span class="glow-letter">o</span>
      <span class="glow-letter">p</span>
      <span class="glow-letter">h</span>
      <span class="glow-letter">e</span>
      <span class="spacer"></span>
      <span class="glow-letter">M</span>
      <span class="glow-letter">o</span>
      <span class="glow-letter">s</span>
      <span class="glow-letter">t</span>
      <span class="glow-letter">e</span>
      <span class="glow-letter">f</span>
      <span class="glow-letter">a</span>
      <span class="glow-letter">o</span>
      <span class="glow-letter">u</span>
      <span class="glow-letter">i</span>
    `;

    // Supprimer tous les futuristic-name existants de la navbar pour éviter les doublons
    document
      .querySelectorAll(".futuristic-name")
      .forEach((elem) => elem.remove());

    // Ajouter uniquement le nom dans le menu mobile
    if (navMenu) {
      // Supprimer toute instance précédente dans le menu mobile
      const existingMobileName = navMenu.querySelector(
        ".futuristic-name-mobile"
      );
      if (existingMobileName) {
        existingMobileName.remove();
      }

      const mobileNameElement = document.createElement("div");
      mobileNameElement.className = "futuristic-name-mobile";
      mobileNameElement.innerHTML = nameHTML;

      // Insérer avant le titre mobile
      const navTitleMobile = navMenu.querySelector(".nav-title-mobile");
      if (navTitleMobile) {
        navTitleMobile.before(mobileNameElement);

        // Animation des lettres
        const mobileLetters =
          mobileNameElement.querySelectorAll(".glow-letter");
        mobileLetters.forEach((letter, index) => {
          letter.style.animationDelay = `${index * 0.1}s`;
        });
      }
    }

    // Gestion du menu burger
    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.innerHTML = navMenu.classList.contains("active")
          ? '<i class="fas fa-times" aria-label="Fermer le menu"></i>'
          : '<i class="fas fa-bars" aria-label="Ouvrir le menu"></i>';
      });
    }
  }

  // Animation des étoiles en arrière-plan
  function createStars() {
    const container = document.getElementById("stars");
    if (!container) return;

    // Nettoyer toutes les étoiles existantes
    container.innerHTML = "";

    // Fonction pour créer des étoiles par lot pour optimiser les performances
    function createStarBatch(count, className) {
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.className = className;
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDuration = Math.random() * 30 + 30 + "s";
        star.style.animationDelay = Math.random() * 15 + "s";
        fragment.appendChild(star);
      }

      return fragment;
    }

    // Créer les différents types d'étoiles de manière optimisée
    container.appendChild(createStarBatch(50, "star"));
    container.appendChild(createStarBatch(50, "star bright"));
    container.appendChild(createStarBatch(50, "star purple"));
  }

  // Configuration du défilement fluide
  function setupScrollBehavior() {
    const navLinks = document.querySelectorAll(".nav-link");
    const navMenu = document.querySelector(".nav-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    navLinks.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (!target) return;

        // Fermer le menu burger si actif
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          if (menuToggle)
            menuToggle.innerHTML =
              '<i class="fas fa-bars" aria-label="Ouvrir le menu"></i>';
        }

        // Animation de défilement
        if (window.gsap) {
          gsap.to(window, {
            duration: 0.2,
            scrollTo: {
              y: target,
              offsetY: 80,
            },
            ease: "power3.inOut",
          });
        } else {
          // Fallback si GSAP n'est pas disponible
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // Configuration de l'affichage plein écran du diplôme
  function setupDiplomaFullscreen() {
    const showDiplomaBtn = document.getElementById("showDiploma");

    if (showDiplomaBtn) {
      showDiplomaBtn.onclick = function (e) {
        e.preventDefault();

        // Créer le conteneur plein écran s'il n'existe pas
        let fullscreenContainer = document.getElementById("diplomaFullscreen");

        if (!fullscreenContainer) {
          fullscreenContainer = document.createElement("div");
          fullscreenContainer.id = "diplomaFullscreen";
          fullscreenContainer.className = "fullscreen-image";

          // Ajouter l'image
          const img = document.createElement("img");
          img.src = "assets/docs/diplome.png";
          img.alt = "Diplôme de Christophe Mostefaoui";
          img.className = "fullscreen-content";

          // Ajouter le bouton de fermeture
          const closeBtn = document.createElement("span");
          closeBtn.className = "close-fullscreen";
          closeBtn.innerHTML = "&times;";
          closeBtn.setAttribute("aria-label", "Fermer");

          // Assembler le conteneur
          fullscreenContainer.appendChild(img);
          fullscreenContainer.appendChild(closeBtn);
          document.body.appendChild(fullscreenContainer);

          // Gestionnaire de fermeture par clic sur la croix
          closeBtn.addEventListener("click", function () {
            fullscreenContainer.classList.remove("active");
            setTimeout(() => {
              fullscreenContainer.remove();
            }, 300);
          });

          // Gestionnaire de fermeture par clic en dehors de l'image
          fullscreenContainer.addEventListener("click", function (e) {
            if (e.target === fullscreenContainer) {
              fullscreenContainer.classList.remove("active");
              setTimeout(() => {
                fullscreenContainer.remove();
              }, 300);
            }
          });

          // Gestionnaire de fermeture avec la touche ESC
          document.addEventListener("keydown", function (e) {
            if (
              e.key === "Escape" &&
              fullscreenContainer.classList.contains("active")
            ) {
              fullscreenContainer.classList.remove("active");
              setTimeout(() => {
                fullscreenContainer.remove();
              }, 300);
            }
          });
        }

        // Afficher l'image en plein écran
        setTimeout(() => {
          fullscreenContainer.classList.add("active");
        }, 10);
      };
    }
  }

  // Configuration des menus déroulants
  function setupDropdowns() {
    document.querySelectorAll(".dropdown-toggle").forEach((button) => {
      button.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        if (!dropdown) return;

        this.classList.toggle("active");
        dropdown.classList.toggle("active");

        const icon = this.querySelector("i");
        if (icon) {
          icon.style.transform = dropdown.classList.contains("active")
            ? "rotate(180deg)"
            : "rotate(0deg)";
        }
      });
    });
  }

  // Configuration des lecteurs audio
  function setupAudioPlayers() {
    document.querySelectorAll(".audio-toggle").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const player = this.nextElementSibling;
        if (!player) return;

        player.classList.toggle("active");

        const audio = player.querySelector("audio");
        const playPauseBtn = player.querySelector(".play-pause");
        const seekSlider = player.querySelector(".seek-slider");
        const volumeSlider = player.querySelector(".volume-slider");
        const timeDisplay = player.querySelector(".time-display");

        if (
          !audio ||
          !playPauseBtn ||
          !seekSlider ||
          !volumeSlider ||
          !timeDisplay
        )
          return;

        // Mise à jour du temps total
        audio.addEventListener("loadedmetadata", () => {
          const totalMinutes = Math.floor(audio.duration / 60);
          const totalSeconds = Math.floor(audio.duration % 60);
          const totalTimeElement = player.querySelector(".total-time");
          if (totalTimeElement) {
            totalTimeElement.textContent = `${String(totalMinutes).padStart(
              2,
              "0"
            )}:${String(totalSeconds).padStart(2, "0")}`;
          }
        });

        // Contrôle play/pause
        playPauseBtn.addEventListener("click", () => {
          if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML =
              '<i class="fas fa-pause" aria-label="Pause"></i>';
          } else {
            audio.pause();
            playPauseBtn.innerHTML =
              '<i class="fas fa-play" aria-label="Lecture"></i>';
          }
        });

        // Barre de progression
        audio.addEventListener("timeupdate", () => {
          const progress = (audio.currentTime / audio.duration) * 100;
          seekSlider.value = progress;

          const currentMinutes = Math.floor(audio.currentTime / 60);
          const currentSeconds = Math.floor(audio.currentTime % 60);
          const currentTimeElement = timeDisplay.querySelector(".current-time");
          if (currentTimeElement) {
            currentTimeElement.textContent = `${String(currentMinutes).padStart(
              2,
              "0"
            )}:${String(currentSeconds).padStart(2, "0")}`;
          }
        });

        // Déplacement dans la piste
        seekSlider.addEventListener("input", () => {
          const seekTime = (seekSlider.value / 100) * audio.duration;
          audio.currentTime = seekTime;
        });

        // Contrôle du volume
        volumeSlider.addEventListener("input", () => {
          audio.volume = volumeSlider.value;
        });
      });
    });
  }

  // Configuration du lecteur vidéo
  function setupVideoPlayer() {
    // Fonction de fermeture de la modale vidéo
    function closeVideoModal() {
      const videoModal = document.getElementById("videoModal");
      const videoWrapper = document.getElementById("videoWrapper");

      if (videoModal) videoModal.style.display = "none";

      if (videoWrapper) {
        const iframe = videoWrapper.querySelector("iframe");
        if (iframe) {
          iframe.src = "";
          iframe.remove();
        }

        const placeholder = videoWrapper.querySelector(".video-placeholder");
        if (placeholder) placeholder.style.display = "flex";
      }
    }

    // Ouverture de la vidéo
    const videoFrame = document.querySelector(".video-frame");
    if (videoFrame) {
      videoFrame.addEventListener("click", function () {
        const videoId = "oxEya9SYYpQ";
        const videoModal = document.getElementById("videoModal");
        const videoWrapper = document.getElementById("videoWrapper");

        if (!videoModal || !videoWrapper) return;

        // Afficher la modale
        videoModal.style.display = "flex";

        // Charger la vidéo YouTube avec paramètres optimisés pour le SEO et la vie privée
        setTimeout(function () {
          const videoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

          const iframe = document.createElement("iframe");
          iframe.width = "100%";
          iframe.height = "100%";
          iframe.style.position = "absolute";
          iframe.style.top = "0";
          iframe.style.left = "0";
          iframe.frameBorder = "0";
          iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
          iframe.allowFullscreen = true;
          iframe.loading = "lazy";
          iframe.title = "Vidéo de présentation de Christophe Mostefaoui";
          iframe.src = videoUrl;

          iframe.onload = function () {
            iframe.classList.add("loaded");
            const placeholder =
              videoWrapper.querySelector(".video-placeholder");
            if (placeholder) placeholder.style.display = "none";
          };

          videoWrapper.appendChild(iframe);
        }, 100);
      });
    }

    // Gestionnaire pour le bouton de fermeture
    const closeBtn = document.getElementById("closeVideoModal");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeVideoModal);
    }

    // Gestionnaire pour cliquer en dehors de la vidéo
    const videoModal = document.getElementById("videoModal");
    if (videoModal) {
      videoModal.addEventListener("click", function (e) {
        if (e.target === videoModal) {
          closeVideoModal();
        }
      });
    }
  }

  // Initialisation des animations AOS
  function initAOS() {
    if (window.AOS) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 120,
        disable: ".radial-section", // Désactive les animations dans la section radiale
      });
    }
  }

  // Animation des compétences
  function setupSkillsAnimation() {
    if (window.gsap) {
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
    }
  }

  // Exécution au chargement du DOM
  document.addEventListener("DOMContentLoaded", init);
})();
