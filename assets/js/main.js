/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");
const linkActions = () => {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav__link , we remove the show menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkActions));
/*=============== CHANGE BACKGROUND HEADER ===============*/
let scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/

let scrollup = () => {
  const scroll = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scroll.classList.add("show-scroll")
    : scroll.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PARALLAX ===============*/
let rellax = new Rellax(".rellax");

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__village", 1.2, { opacity: 0, y: 100, delay: 0.1 });
gsap.from(".home__pine", 1.2, { opacity: 0, y: 150, delay: 0.3 });
gsap.from(".home__mountain-2", 1.2, { opacity: 0, y: 100, delay: 0.5 });
gsap.from(".home__mountain-3", 1.2, { opacity: 0, y: -150, delay: 0.6 });
gsap.from(".home__mountain-1", 1.2, { opacity: 0, y: 250, delay: 0.7 });
gsap.from(".home__moon", 1.2, { opacity: 0, y: 200, delay: 0.8 });
gsap.from(".home__trineo", 1.2, { opacity: 0, x: -200, delay: 0.8 });
gsap.from(".home__title", 1.2, { opacity: 0, y: -60, delay: 1 });

/*=============== SCROLL REVEAL ANIMATION ===============*/
let sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.about__data ,.celebrate__img `, { origin: "right" });
sr.reveal(`.about__img,.celebrate__data`, { origin: "left" });
sr.reveal(`.send__card`, { setInterval: 100 });

sr.reveal(`.footer`);
