const nav = document.querySelector("nav");
const btnAbrir = document.querySelector(".abrir");
const btnCerrar = document.querySelector(".cerrar");

btnAbrir.addEventListener("click", () => {
nav.classList.add("abrir");
});

btnCerrar.addEventListener("click", () => {
nav.classList.remove("abrir");
});

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(function(link){
link.addEventListener("click", () => {
nav.classList.remove("abrir");
});
});