/*========== MUDANÇA DO BACKGROUND DO HEADER ==========*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  /* Quando o scroll for maior que 50px no header, ele acrescenta 
  a classe scroll-header */
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);
/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".products-container", {
  spaceBetween: 32,
  grapCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      spaceBetween: 72,
    },
  },
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (!sectionClass) {
      return;
    }

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== MOSTRE O SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  /* Quando o scroll e mais alto que 350 da altura 
  do viewport, adicione a classe show-scroll para
  a tag a que contenha o scrollUp */
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home-data, .products-container, .footer-container, .footer-info`);
sr.reveal(`.home-images`, { delay: 600, origin: "bottom" });
sr.reveal(`.new-card, .brand-img`, { interval: 100 });
sr.reveal(`.collection-explore:nth-child(1)`, { origin: "right" });
sr.reveal(`.collection-explore:nth-child(2)`, { origin: "left" });
