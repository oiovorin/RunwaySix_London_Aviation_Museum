export function artifactCarousel () {
    const artifactImages = document.querySelectorAll("#artifact-image #img-con img");
    const preBtn = document.querySelector("#previous");
    const nextBtn = document.querySelector("#next");

    let currentIndex = 0;

    function showItem () {
        artifactImages.forEach(image => {
            image.classList.remove("active");
        });

        artifactImages[currentIndex].classList.add("active");
    }

    function nextImg () {
        currentIndex++;

        if (currentIndex >= artifactImages.length) {
            currentIndex = 0;
        }

        showItem();
    }

    function prevImg () {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = artifactImages.length - 1;
        }

        showItem();
    }

    nextBtn.addEventListener("click", nextImg);
    preBtn.addEventListener("click", prevImg);
}