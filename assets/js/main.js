function initHamburger() {
  const button = document.querySelector(".hamburger");
  const nav = document.getElementById("nav-menu");

  if (!button || !nav) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    if (!isOpen) {
      const firstLink = nav.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      closeMenu();
      button.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || button.contains(event.target)) return;
    closeMenu();
  });
}

function initCarousels() {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const prevBtn = carousel.querySelector(".carousel-btn--prev");
    const nextBtn = carousel.querySelector(".carousel-btn--next");
    if (!track || !prevBtn || !nextBtn) return;

    const scrollByCard = (direction) => {
      const card = track.querySelector(".carousel-card");
      const style = card ? getComputedStyle(track) : null;
      const gap = style ? parseFloat(style.columnGap || style.gap || "16") : 16;
      const cardWidth = card ? card.getBoundingClientRect().width : track.clientWidth;
      track.scrollBy({ left: direction * (cardWidth + gap), behavior: "smooth" });
    };

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.disabled = track.scrollLeft <= 1;
      nextBtn.disabled = maxScroll <= 1 || track.scrollLeft >= maxScroll - 1;
    };

    prevBtn.addEventListener("click", () => scrollByCard(-1));
    nextBtn.addEventListener("click", () => scrollByCard(1));
    track.addEventListener("scroll", () => window.requestAnimationFrame(updateButtons));
    window.addEventListener("resize", updateButtons);
    updateButtons();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initCarousels();
});
