export function header () {
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