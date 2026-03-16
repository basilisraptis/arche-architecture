document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // MENU OVERLAY
  // ===============================

  const menuButton = document.querySelector(".nav-left");
  const menu = document.getElementById("menu");
  const closeButton = document.getElementById("closeMenu");

  if (menuButton && menu && closeButton) {

    menuButton.addEventListener("click", () => {
      menu.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
      menu.classList.remove("active");
    });

  }


  // ===============================
  // PROJECT CAROUSELS
  // ===============================

  document.querySelectorAll(".project-carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    const next = carousel.querySelector(".right");
    const prev = carousel.querySelector(".left");

    const scrollAmount = 450;

    next.addEventListener("click", () => {

      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });

    });

    prev.addEventListener("click", () => {

      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });

    });

  });


  // ===============================
  // IMAGE LIGHTBOX
  // ===============================

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeLightbox = document.getElementById("lightboxClose");

  document.querySelectorAll(".carousel-track img").forEach(img => {

    img.addEventListener("click", () => {

      lightbox.style.display = "flex";
      lightboxImg.src = img.src;

    });

  });

  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

});

const track = document.getElementById("carouselTrack");
const slides = track.querySelectorAll(".carousel-box");

const nextBtn = document.getElementById("nextSlide");
const prevBtn = document.getElementById("prevSlide");

let index = 0;

function moveCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width + 24;
  track.style.transform = `translateX(-${slideWidth * index}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
  } else {
    index = 0;
  }
  moveCarousel();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = slides.length - 1;
  }
  moveCarousel();
});

window.addEventListener("resize", moveCarousel);