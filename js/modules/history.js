export function timelineCarousel () {
    const timelineImages = document.querySelectorAll(".timeline-carousel .card-img");
    const preBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function showItem () {
        timelineImages.forEach(image => {
            image.classList.remove("active");
            });
            timelineImages[currentIndex].classList.add("active");
    }

    function nextImg () {
        currentIndex++;
        if(currentIndex >= timelineImages.length) {
            currentIndex = 0;
        }

        showItem(currentIndex);
    }

    function prevImg () {
        currentIndex--;
        if(currentIndex < 0) {
        currentIndex = timelineImages.length - 1;
        }

        showItem(currentIndex);
    }

    nextBtn.addEventListener("click", nextImg);
    preBtn.addEventListener("click", prevImg);
}