const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");

if (header && menuToggle) {
  menuToggle.addEventListener("click", () => {
    header.classList.toggle("open");
  });
}