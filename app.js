const headerMenu = document.querySelector(".headerMenu");
const headerMenuHamburger = document.querySelector(".headerMenuHamburger");
const primaryNav = document.querySelector(".primaryNav");

let menuOpen = false;
function toggleMenu() {
  headerMenuHamburger.classList.toggle("open");
  primaryNav.classList.toggle("open");
  menuOpen = !menuOpen;
}
function checkResize() {
  if (menuOpen && window.innerWidth >= "1024") toggleMenu();
}
window.addEventListener("resize", checkResize);
headerMenu.addEventListener("click", toggleMenu);
