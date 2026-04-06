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
        }
    })
}

export function bofbAnimation () {
    const battleIntro = document.querySelector("#battle-intro");

    gsap.from(battleIntro,  {
        opacity: 0,
        y:100,
        ease: "power1.out",
      duration: 0.8,
      stagger: 1,
      scrollTrigger: {
            trigger: battleIntro,
            start: "top 80%"
        }
    })

    const battlePhaseItems = document.querySelectorAll("#battle-phases .phase-card");

    gsap.from(battlePhaseItems, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#battle-phases",
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });

        const dateSelection = document.querySelector("#date-selection");

        gsap.from(dateSelection,  {
            opacity: 0,
            y:100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: dateSelection,
                start: "top 80%"
            }
    })

    const defaultContent = document.querySelector(".selected-date.selected");

    gsap.from(defaultContent.children, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: defaultContent,
        start: "top 80%",
    }
    });

    const loss = document.querySelector("#loss");
    const lossNumber = document.querySelectorAll("#loss .number");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#loss",
            start: "top 80%",
            once: true
        }
        });

        tl.from(loss, {
        opacity: 0,
        y: 30,
        duration: 0.6
        });

        lossNumber.forEach(lossNumber => {

        tl.from(lossNumber, {
             innerText: 0, 
             duration: 1, 
             snap: "innerText"
            }, 0
        );
        });

     
    const honorPilots = document.querySelectorAll("#honor-slide .pilot-card");

    gsap.from(honorPilots, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#honor-slide",
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });
}

export function educationAnimation () {
    const educationIntro = document.querySelector("#education-intro");

        gsap.from(educationIntro,  {
            opacity: 0,
            y:100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: educationIntro,
                start: "top 80%"
            }
    })

    const IntroText = document.querySelector("#intro-text");

        gsap.from(IntroText,  {
            opacity: 0,
            y:100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: IntroText,
                start: "top 85%"
            }
    })

    const educationDownload = document.querySelector("#education-download");

        gsap.from(educationDownload,  {
            opacity: 0,
            x: -100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: educationDownload,
                start: "top 85%"
            }
    })

    const virtualMuseum = document.querySelector("#virtual-museum");

        gsap.from(virtualMuseum,  {
            opacity: 0,
            x: 100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: virtualMuseum,
                start: "top 85%"
            }
    })

    const tresureHant = document.querySelector("#tresure-hant");

        gsap.from(tresureHant,  {
            opacity: 0,
            x: -100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: tresureHant,
                start: "top 85%"
            }
    })

    const classroomSession = document.querySelector("#classroom-session");

        gsap.from(classroomSession,  {
            opacity: 0,
            x: 100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: classroomSession,
                start: "top 85%"
            }
    })
}

export function faqAnimation () {
    const faq = document.querySelector("#faq-bg");

        gsap.from(faq,  {
            opacity: 0,
            y: 100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: faq,
                start: "top 85%"
            }
    })
}

export function homeAnimation () {
    const aboutMuseum = document.querySelector("#about-museum");

        gsap.from(aboutMuseum,  {
            opacity: 0,
            y: 100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: aboutMuseum,
                start: "top 85%"
            }
    })

    const playerContainer = document.querySelector("#player-container");

        gsap.from(playerContainer,  {
            opacity: 0,
            y: 100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: playerContainer,
                start: "top 85%"
            }
    })

    const sliderContainer = document.querySelector("#slider-container");

        gsap.from(sliderContainer,  {
            opacity: 0,
            y: 100,
            ease: "power1.out",
            duration: 0.8,
            stagger: 1,
            scrollTrigger: {
                trigger: sliderContainer,
                start: "top 85%"
            }
    })

    const allRows = document.querySelectorAll(".event-row, .event-row-reverse");

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: allRows[0],
        start: "top 80%",
        toggleActions: "play none none none"
    }
    });

    allRows.forEach(function (row) {

    let direction = 100;

    if (row.classList.contains("event-row-reverse")) {
        direction = -100;
    }

    tl.from(row, {
        opacity: 0,
        x: direction,
        duration: 0.5,
        ease: "power2.out"
    });

    });
}

export function londonPilotsAnimation () {

     const backToBofb = document.querySelector("#back-to-bofb");

        gsap.from(backToBofb,  {
            opacity: 0,
            x: -30,
            ease: "power1.out",
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: backToBofb,
                start: "top 85%"
            }
    })

    const pilotName = document.querySelector("#pilot-name");

        gsap.from(pilotName,  {
            opacity: 0,
            x: -30,
            ease: "power1.out",
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: pilotName,
                start: "top 85%"
            }
    })


   const pilotImage = document.querySelector(".pilot-image");

    gsap.from(pilotImage, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: pilotImage,
            start: "top 85%"
        }
    });

    const pilotBio = document.querySelector(".pilot-bio");

    gsap.from(pilotBio, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: pilotBio,
            start: "top 80%"
        }
    });

    const pilotImgGallary = document.querySelectorAll(".pilot-img-gallary .pilot-img-item");

    gsap.from(pilotImgGallary, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".pilot-img-gallary",
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });

        const additionalHeader = document.querySelector("#additional-info h2");

        gsap.from(additionalHeader, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
            trigger: additionalHeader,
            start: "top 80%"
        }
        });
       const additionalItems = document.querySelectorAll("#additional-info .additional-item");
       

        gsap.from(additionalItems, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#additional-info",
            start: "top 30%",
            toggleActions: "play none none none"
        }
        });
}

export function contactAnimation () {
    const contactform = document.querySelector("#app");

        gsap.from(contactform, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
            trigger: contactform,
            start: "top 80%"
        }
        });

        const contactInfo = document.querySelectorAll("#museum-info .icon-text");
       

        gsap.from(contactInfo, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.25,
        ease: "power2.out"
        });
}

export function ArtifactsAnimation () {

     const backToArtifacts = document.querySelector("#back-to-artifacts");

        gsap.from(backToArtifacts,  {
            opacity: 0,
            x: -30,
            ease: "power1.out",
            duration: 1,
            stagger: 1
    })

    const artifactName = document.querySelector("#artifact-name");

        gsap.from(artifactName,  {
            opacity: 0,
            x: -30,
            ease: "power1.out",
            duration: 1,
            stagger: 1
    })


   const artifactImage = document.querySelector("#artifact-image");

    gsap.from(artifactImage, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: artifactImage,
            start: "top 85%"
        }
    });

    const aboutArtifact = document.querySelector(".about-artifact");

    gsap.from(aboutArtifact, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: aboutArtifact,
            start: "top 80%"
        }
    });

    const artifactImgGallary = document.querySelectorAll("#artifact-gallery .artifact-item");

    gsap.from(artifactImgGallary, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#artifact-gallery",
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });

}

export function postAnimation () {

     const backToEventsBlog = document.querySelector("#back-to-events_blog");

        gsap.from(backToEventsBlog,  {
            opacity: 0,
            x: -30,
            ease: "power1.out",
            duration: 1,
            stagger: 1
    })

    const postTitle = document.querySelector("#post-title");

        gsap.from(postTitle,  {
            opacity: 0,
            y: 50,
            ease: "power1.out",
            duration: 1,
            stagger: 1
    })


   const postCategory = document.querySelector("#post-category");

    gsap.from(postCategory, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: postCategory,
            start: "top 90%"
        }
    });


    const postInfo = document.querySelectorAll("#post-info .info");

    gsap.from(postInfo, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#post-info",
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });

    const eventImage = document.querySelector(".event-image");

    gsap.from(eventImage, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: eventImage,
            start: "top 80%"
        }
    });

    const aboutPost = document.querySelector("#about-post");

    gsap.from(aboutPost, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: aboutPost,
            start: "top 80%",
        }
        });

    const contactCta = document.querySelector("#contact-cta");

    gsap.from(contactCta, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.8,
        scrollTrigger: {
            trigger: contactCta,
            start: "top 80%"
        }
        });

        

        const share = document.querySelector("#share");

    gsap.from(share, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: share,
            start: "top 90%"
        }
    });

    const otherPost = document.querySelectorAll("#others .other-post");

    gsap.from(otherPost, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#others",
            start: "top 80%",
            toggleActions: "play none none none"
        }
        });

}

export function remPilotAnimation () {

     const backToRem = document.querySelector("#back-to-rem");

        gsap.from(backToRem,  {
            opacity: 0,
            x: -30,
            ease: "power1.out",
            duration: 1,
            stagger: 1
    })

    const remPilotImage = document.querySelector(".rem-pilot-image");

        gsap.from(remPilotImage,  {
            opacity: 0,
            y: 50,
            ease: "power1.out",
            duration: 1,
            stagger: 1
    })


   const remPilotName = document.querySelector("#rem-pilot-name");

    gsap.from(remPilotName, {
    opacity: 0,
    y: 50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: remPilotName,
            start: "top 90%"
        }
    });

    const pilotInfo = document.querySelector(".pilot-info");

    gsap.from(pilotInfo, {
    opacity: 0,
    x: -50,
    ease: "power1.out",
    duration: 1,
    scrollTrigger: {
            trigger: pilotInfo,
            start: "top 80%"
        }
    });

    const correctInfo = document.querySelector("#correct-info");

    gsap.from(correctInfo, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: correctInfo,
            start: "top 80%",
        }
        });

}