export function timelineCarousel () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const timelineImages = carousel.querySelectorAll(".card-img");
        const preBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");
    

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
    });
    
}