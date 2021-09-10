var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;

const nav = document.querySelector(".nav-card");
const heroes = document.querySelectorAll(".hero-card");

const heroOptions = {
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.5,
};

if (w <= 768) {
  const heroObserver = new IntersectionObserver(function (
    entries,
    heroObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.remove("nav-scrolled");
      } else {
        nav.classList.add("nav-scrolled");
      }
    });
  },
  heroOptions);

  heroes.forEach((hero) => {
    heroObserver.observe(hero);
  });
}
