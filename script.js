//galeria

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  // Seleciona todas as imagens da galeria
  document.querySelectorAll(".gallery__img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Fechar modal ao clicar no "X"
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Fechar modal ao clicar fora da imagem
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

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
