export function selectDate () {

    const selectBtn = document.querySelectorAll(".select-button");
    const dateContent = document.querySelectorAll(".selected-date");
    const mobButtons = document.querySelectorAll("#mobile-button-list button")
    const prevBtn = document.querySelector("#mobile-arrow #previous");
    const nextBtn = document.querySelector("#mobile-arrow #next");

    let currentIndex = 0;

    function buttonSelect () {
        selectBtn.forEach(button => {
        button.classList.remove("active");
        });

        dateContent.forEach(content => {
            content.classList.remove("selected");
        });

        const targetId = this.dataset.target;
        const targetContent = document.querySelector(`#${targetId}`);

        targetContent.classList.add("selected");
        this.classList.add("active");
        
    }

    function mobBtnSlelect () {
        mobButtons.forEach(button => {
            button.classList.remove("active");
        });

        dateContent.forEach(content => {
            content.classList.remove("selected");
        });

        const mobTargetId = mobButtons[currentIndex].dataset.target;
        const mobTargetContent = document.querySelector(`#${mobTargetId}`);

        mobTargetContent.classList.add("selected");

        mobButtons[currentIndex].classList.add("active");
    }

    function nextDate () {
        currentIndex++;
        if(currentIndex >= mobButtons.length) {
            currentIndex = 0;
        } else if(currentIndex >= mobButtons.length) {
            currentIndex = 0;
        }

        mobBtnSlelect(currentIndex);
    }

    function prevDate () {
        currentIndex--;
        if(currentIndex < 0) {
            currentIndex = mobButtons.length - 1;
        } else if(currentIndex < 0) {
            currentIndex = mobButtons.length - 1;
        }

        mobBtnSlelect(currentIndex);
    }

    selectBtn.forEach(button => {
    button.addEventListener("click", buttonSelect);
    });

    prevBtn.addEventListener("click", prevDate);
    nextBtn.addEventListener("click", nextDate);
}