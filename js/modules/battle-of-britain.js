export function selectDate () {

    const selectBtn = document.querySelectorAll(".select-button");
    const dateContent = document.querySelectorAll(".selected-date")

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

    selectBtn.forEach(button => {
    button.addEventListener("click", buttonSelect);
    });
}