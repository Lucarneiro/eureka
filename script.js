const menuMobile = document.querySelector(".container-menu-hamburguer");
const btnMobile = document.querySelector("[data-menu='button']");

function openMenu(event) {
  menuMobile.classList.toggle("active");
  btnMobile.classList.toggle("active");
}

btnMobile.addEventListener("click", openMenu);
