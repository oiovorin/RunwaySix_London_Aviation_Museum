export function postFilter () {
    const allBtn = document.querySelector("#all");
    const eventBtn = document.querySelector('#event');
    const blogBtn = document.querySelector('#blog');
    const educationBtn = document.querySelector('#education');
    const communityBtn = document.querySelector('#community');
    const buttons = document.querySelectorAll("#category-btn button");
    const postCons = document.querySelectorAll(".post-card");
    
    function removeActive () {
        buttons.forEach(button => {
        button.classList.remove("active");
        });
    }

    function allBtnSelected () {
        removeActive();

        postCons.forEach(postCon => {
        postCon.classList.remove("hidden");
    });

        allBtn.classList.add("active");
    }

    function eventBtnSelected () {
        removeActive();

        postCons.forEach(postCon => {
            postCon.classList.remove("hidden");
        if (!postCon.classList.contains("event")) {
            postCon.classList.add("hidden");
        }
    });

    eventBtn.classList.add("active")
    }

    function blogBtnSelected () {
        removeActive();

        postCons.forEach(postCon => {
            postCon.classList.remove("hidden");
        if (!postCon.classList.contains("blog")) {
            postCon.classList.add("hidden");
        }
    });
    blogBtn.classList.add("active");
    }

    function educationBtnSelected () {
        removeActive();

        postCons.forEach(postCon => {
            postCon.classList.remove("hidden");
        if (!postCon.classList.contains("education")) {
            postCon.classList.add("hidden");
        }
    });
    educationBtn.classList.add("active");
    }

    function communityBtnSelected () {
        removeActive();

        postCons.forEach(postCon => {
            postCon.classList.remove("hidden");
        if (!postCon.classList.contains("community")) {
            postCon.classList.add("hidden");
        }
    });
    communityBtn.classList.add("active");
    }

    allBtn.addEventListener("click", allBtnSelected);
    eventBtn.addEventListener("click", eventBtnSelected);
    blogBtn.addEventListener("click", blogBtnSelected);
    educationBtn.addEventListener("click", educationBtnSelected);
    communityBtn.addEventListener("click", communityBtnSelected);
}