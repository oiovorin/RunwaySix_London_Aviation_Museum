export function header () {
const hamburger = document.querySelector("#mob-menu");
const aboutMenu = document.querySelector("#about-nav");
const historyMenu = document.querySelector("#header-nav");

function mobMenuOpen () {
    if(hamburger.classList.contains("active") && historyMenu.classList.contains && aboutMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        historyMenu.classList.remove("active");
        aboutMenu.classList.remove("active")
    } else {
        hamburger.classList.add("active");
        historyMenu.classList.add("active");
        aboutMenu.classList.add("active")
    }
}

hamburger.addEventListener("click", mobMenuOpen);

const aboutNav = document.querySelector("#about-nav");
const aboutSubMenu = document.querySelector('#about-sub');
const historyNav = document.querySelector("#history-nav");
const historySubMenu = document.querySelector('#history-sub');

function aboutSubMenuOpen () {
    if (aboutSubMenu.classList.contains("hidden")) {
    aboutSubMenu.classList.remove("hidden");
    } else {
    aboutSubMenu.classList.add("hidden");
    }
}

function histrySubMenuOpen () {
    if (historySubMenu.classList.contains("hidden")) {
    historySubMenu.classList.remove("hidden");
    } else {
    historySubMenu.classList.add("hidden");
    }
}

aboutNav.addEventListener("click", aboutSubMenuOpen);
historyNav.addEventListener("click", histrySubMenuOpen);
   
}


