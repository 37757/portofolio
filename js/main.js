const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");

if (header && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Menu sluiten" : "Menu openen",
    );
  });
}
