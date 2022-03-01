const headerMenu = document.querySelector(".headerMenu");
const headerMenuHamburger = document.querySelector(".headerMenuHamburger");

let menuOpen = false;
function toggleMenu() {
  menuOpen
    ? headerMenuHamburger.classList.remove("open")
    : headerMenuHamburger.classList.add("open");
  menuOpen = !menuOpen;
}
headerMenu.addEventListener("click", toggleMenu);
