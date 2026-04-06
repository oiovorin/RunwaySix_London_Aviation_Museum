export function artifactVueApp() {
    const app = Vue.createApp({
        data() {
            return {
                artifactsData: [],
                loadingArtifacts: true,
                artifactsError: null
            };
        },
        created() {
            this.getArtifacts();
        },
        methods: {
            getArtifacts() {
                this.artifactsError = null;
                fetch("http://127.0.0.1:8000/api/artifacts")
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch the artifacts.");
                        }
                        return res.json();
                    })
                    .then(artifacts => {
                        this.artifactsData = artifacts;
                    })
                    .catch(err => {
                        this.artifactsError = err.message;
                    })
                    .finally(() => {
                        this.loadingArtifacts = false;

                        this.$nextTick(() => {
                            gsap.from(".artifact-card", {
                                opacity: 0,
                                y: 24,
                                duration: 0.7,
                                stagger: 0.3,
                                ease: "power2.out"
                            });
                        });
                    });
            }
        
        }
    });
    app.mount("#artifact-app");
}

export function artifactVueDetailApp() {
    const app = Vue.createApp({
        data() {
            return {
                selectedArtifact: null,
                loadingArtifactsDetails: true,
                artifactDetailsError: null,
                relatedArtifacts: [],  
            };
        },
        created() {
            this.getArtifactById();
            this.getRelatedArtifacts(); 
        },
        methods: {
            getArtifactById() {
                // take id from URL
                const params = new URLSearchParams(window.location.search);
                const id = params.get("id");

                if (!id) {
                    this.artifactDetailsError = "Failed to fetch the selected artifacts.";
                    this.loadingArtifactsDetails = false;
                    return;
                }

                fetch(`http://127.0.0.1:8000/api/artifacts/${id}`)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch artifact details.");
                        }
                        return res.json();
                    })
                    .then(artifact => {

                        this.selectedArtifact = {
                            name: artifact.name || "NOT available",
                            objectType: artifact.object_type || "NOT available",
                            period: artifact.period || "NOT available",
                            origin: artifact.origin || "NOT available",
                            material: artifact.material || "NOT available",
                            description: artifact.description || "NOT available",
                            imagePath: artifact.image_path || ""
                        };
                    })
                    .catch(err => {
                        this.artifactDetailsError = err.message;
                    })
                    .finally(() => {
                        this.loadingArtifactsDetails = false;
                    });
            },

            // get other artifacts
            getRelatedArtifacts() {        
                const params = new URLSearchParams(window.location.search);
                const currentId = Number(params.get("id"));

                fetch("http://127.0.0.1:8000/api/artifacts")
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch artifacts.");
                        }
                        return res.json();
                    })
                    .then(artifacts => {
                        this.relatedArtifacts = artifacts.filter(artifact => artifact.id !== currentId);
                    })
                    .catch(err => {
                        console.error(err.message);
                    })
                    .finally(() => {
                        this.$nextTick(() => {
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

   const artifactImage = document.querySelector(".artifact-image");

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
                        });
                    });       
                }
            }
        });
    app.mount("#artifact-detail-app");
}