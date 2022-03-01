const headerMenu = document.querySelector(".headerMenu");
const headerMenuHamburger = document.querySelector(".headerMenuHamburger");
const primaryNav = document.querySelector(".primaryNav");
const headerSignUp = document.querySelector(".headerSignUp");

let menuOpen = false;
function toggleMenu() {
  headerMenuHamburger.classList.toggle("open");
  primaryNav.classList.toggle("open");
  headerSignUp.classList.toggle("hidden");
  menuOpen = !menuOpen;
}
function checkResize() {
  if (menuOpen && window.innerWidth >= "1024") toggleMenu();
}
window.addEventListener("resize", checkResize);
headerMenu.addEventListener("click", toggleMenu);
