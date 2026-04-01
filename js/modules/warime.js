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

