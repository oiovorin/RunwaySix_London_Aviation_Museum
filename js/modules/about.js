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

export function aboutAnimation () {
    const missionValue = document.querySelector("#mission-value");

    gsap.from(missionValue, {
      opacity: 0,
      y: 100,
      ease: "power1.out",
      duration: 0.5,
      stagger: 1,
        scrollTrigger: {
            trigger: missionValue,
            start: "top 80%"
        }
    })

    const museumTimelineItmes = document.querySelectorAll("#museum-timeline .item");

    gsap.from(museumTimelineItmes, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#museum-timeline",
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });

    const legacy = document.querySelector("#legacy");

    gsap.from(legacy, {
        opacity: 0,
        y:100,
        ease: "power1.out",
      duration: 0.5,
      stagger: 1,
      scrollTrigger: {
            trigger: legacy,
            start: "top 85%",
            end: "top 80%"
        }
    })
}