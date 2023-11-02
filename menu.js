const menu = document.querySelector("#menu");
const open_btn = document.querySelector("#menu_img");
const close_btn = document.querySelector("#cerrar_menu");

open_btn.addEventListener("click", () => {
    menu.classList.add("visible");
})

close_btn.addEventListener("click", () => {
    menu.classList.remove("visible");
})