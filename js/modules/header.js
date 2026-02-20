export function header () {
const hamburger = document.querySelector("#mob-menu");
const menu = document.querySelector("#header-nav");

function mobMenuOpen () {
    if(hamburger.classList.contains("active") && menu.classList.contains("active")) {
        hamburger.classList.remove("active");
        menu.classList.remove("active");
    } else {
        hamburger.classList.add("active");
        menu.classList.add("active");
    }
}

hamburger.addEventListener("click", mobMenuOpen)

const historyNav = document.querySelector("#history-nav");
const historySubMenu = document.querySelector('#history-sub');

function subMenuOpen () {
    if (historySubMenu.classList.contains("hidden")) {
    historySubMenu.classList.remove("hidden");
    } else {
    historySubMenu.classList.add("hidden");
    }
}

historyNav.addEventListener("click", subMenuOpen);
   
}

