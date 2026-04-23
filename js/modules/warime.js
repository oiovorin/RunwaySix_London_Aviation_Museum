export function selectLocation () {

    const mapBtns = document.querySelectorAll(".map-button");
    const locationItems = document.querySelectorAll(".location-item")

    function showPopup () {

        locationItems.forEach(item => {
            item.classList.remove("active");
        });

        const targetId = this.dataset.target;
        const targetItem = document.querySelector(`#popup-${targetId}`);

        targetItem.classList.add("active");
        
    }

    function hidePopup () {
        locationItems.forEach(item => {
            item.classList.remove("active");
        });
    }

    mapBtns.forEach(button => {
        button.addEventListener("click", showPopup);
        button.addEventListener("mouseenter", showPopup);
        button.addEventListener("mouseleave", hidePopup);
    });
}

export function moveMap () {
    const container = document.querySelector("#myPanzoom");
    console.log(container);
    Panzoom(container, { 
        maxScale: 2, 
        minScale: 1,
        step: 0.2,
        contain: "inside"
    });
}

export function centralSlideshow () {
    const slides = document.querySelectorAll("#central-slide img");
    let currentIndex = 0;

    function showSlide() {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentIndex].classList.add("active");

        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
    }

    setInterval(showSlide, 3000); 
}