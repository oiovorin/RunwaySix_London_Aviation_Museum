export function timeline () {

    gsap.registerPlugin(ScrollTrigger);


    const timeline = document.querySelector("#timeline-main");
    const timelineProgress = document.querySelector("#timeline-progress");
    const timelineItems = document.querySelectorAll(".timeline-item");

    gsap.to(timelineProgress, { 
        height: '100%', 
        ease: 'none', 
        scrollTrigger: { 
            trigger: timeline, 
            start: 'top center', 
            end: 'bottom bottom', 
            scrub: true 
        } 
    });

    timelineItems.forEach((item) => { 
        const dot = item.querySelector('.timeline-dot'); 
        const content = item.querySelector('.time-card'); 

        gsap.set(content, {
        opacity: 0,
        y: 50
         });

        ScrollTrigger.create({ 
            trigger: item, 
            start: 'top center', 
            onEnter: () => { 
                gsap.to(content, { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.5,
                    stagger: 1
                }); 
                
                item.classList.add('active'); 
            }, 
            
            onLeaveBack: () => { 
                gsap.to(content, { 
                    opacity: 0, 
                    y: 50, 
                    duration: 0.1,
                    stagger: 1
                }); 
                item.classList.remove('active'); 
            } 
        }); 
    }); 
}