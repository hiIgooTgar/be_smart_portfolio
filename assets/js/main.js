const navbarMenu = document.getElementById("nav-menu");

function showMenu() {
  navbarMenu.style.right = "0";
}

function hideMenu() {
  navbarMenu.style.right = "-240px";
}

const navLinks = document.querySelectorAll(".navbar .nav-menu .nav-list");
navLinks.forEach(function (links) {
  links.addEventListener("click", function (e) {
    navbarMenu.style.right = "-240px";
  });
});

const hamburger = document.getElementById("hamburger");
const navbarNav = document.querySelector(".navbar");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarMenu.style.right = "-240px";
  }
});
