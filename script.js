//scroll-anima

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const elements = document.querySelectorAll(".hidden");
elements.forEach((element) => {
  myObserver.observe(element);
});

//menu-mobile

const { download } = require("express/lib/response");

const menuMobile = document.querySelector(".container-menu-hamburguer");
const btnMobile = document.querySelector("[data-menu='button']");

function openMenu(event) {
  menuMobile.classList.toggle("active");
  btnMobile.classList.toggle("active");
}

btnMobile.addEventListener("click", openMenu);
