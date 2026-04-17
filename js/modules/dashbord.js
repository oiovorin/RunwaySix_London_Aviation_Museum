export function adminMenu () {
    const dashbordMenuOpen = document.querySelector("#dashbord-menu-open");
    const dashbordMenu = document.querySelector("#dashbord-menu");

    function adminMenuOpen () {
        if(dashbordMenuOpen.classList.contains("active") && dashbordMenu.classList.contains) {
            dashbordMenuOpen.classList.remove("active");
            dashbordMenu.classList.remove("active");
        } else {
            dashbordMenuOpen.classList.add("active");
            dashbordMenu.classList.add("active");
        }
    }

    dashbordMenuOpen.addEventListener("click", adminMenuOpen);
}

export function addPost () {
    const addContentBtn = document.querySelector(".add-content");
    const lightbox = document.querySelector("#add-content-lightbox");
    const lightboxClose = document.querySelector(".lightbox-close");

    function openLightbox () {
        lightbox.classList.add("active");
    }

    function closeLightbox () {
        lightbox.classList.remove("active");
    }

    addContentBtn.addEventListener("click", openLightbox);
    lightboxClose.addEventListener("click", closeLightbox);
}

export function deletePost () {
    const warningLightbox = document.querySelector("#delete-lightbox");
    const cancelDelete = document.querySelector("#cancel");
    const postListApp = document.querySelector("#post-list-app");

    function openWarning() {
        warningLightbox.classList.add("active");
    }

    function closeWarning() {
        warningLightbox.classList.remove("active");
    }

    function handlePostListClick(e) {
        if (e.target.closest(".delete-post")) {
            openWarning();
        }
        if (e.target.closest(".edit-post")) {
        }
    }

    postListApp.addEventListener("click", handlePostListClick);
    cancelDelete.addEventListener("click", closeWarning);
}