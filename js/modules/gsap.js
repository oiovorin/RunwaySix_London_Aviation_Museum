export function sectionTitle() {
    const headers = document.querySelectorAll(".section-header");

    headers.forEach((header) => {
    const lines = header.querySelectorAll(".line");
    const title = header.querySelector("h2");

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: header,
        start: "top 80%",
        }
    });

   tl.from(lines[0], {
    scaleX: 0,
    transformOrigin: "right",
    duration: 0.8
    }, 0)

    .from(lines[1], {
    scaleX: 0,
    transformOrigin: "left",
    duration: 0.8
    }, 0)

    .from(title, {
    opacity: 0,
    y: 50,
    duration: 0.7
    }, 0);
});
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