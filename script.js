/*jslint browser: true*/
var document;
const menu = document.getElementById("main_menu");
const hamburger = document.querySelector(".hamburger");
const menu_items = document.querySelectorAll(".menu_item");
const close_menu_button = document.getElementById("close_menu");

function toggle_menu() {
    //Jeśli menu jest w momencie kliknięcia rozłożone
    if (menu.classList.contains("show_menu")) {
        menu.classList.remove("show_menu");
        setTimeout(function () {
            menu.classList.remove("position_menu");
        }, 200);
    } else { //Jeśli menu jest w momencie kliknięcia złożone
        menu.style.transition = "0.5s";
        menu.classList.add("show_menu");
        menu.classList.add("position_menu");
    }
}

function close_hamburger_menu() {
    menu.style.transition = "0.5s";
    menu.classList.remove("show_menu");
    menu.classList.remove("position_menu");
}

hamburger.addEventListener("click", toggle_menu);
close_menu_button.addEventListener("click", close_hamburger_menu);
hamburger.style.display = "inline";