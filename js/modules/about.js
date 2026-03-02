export function carousel () {
    const legacyImages = document.querySelectorAll("#img-con img");
    const legacyText = document.querySelectorAll(".title-text");
    const preBtn = document.querySelector("#previous");
    const nextBtn = document.querySelector("#next");

    let currentIndex = 0;

    function showItem () {
        legacyImages.forEach(image => {
            image.classList.remove("active");
            });
            legacyImages[currentIndex].classList.add("active");

        legacyText.forEach(text => {
            text.classList.remove("active");
            });
            legacyText[currentIndex].classList.add("active");
    }

    function nextImg () {
        currentIndex++;
        if(currentIndex >= legacyImages.length) {
            currentIndex = 0;
        } else if(currentIndex >= legacyText.length) {
            currentIndex = 0;
        }

        showItem(currentIndex);
    }

    function prevImg () {
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = legacyImages.length - 1;
        } else if(currentIndex < 0) {
            currentIndex = legacyText.length - 1;
        }

        showItem(currentIndex);
    }

    nextBtn.addEventListener("click", nextImg);
    preBtn.addEventListener("click", prevImg);
}