import { getToken } from "./auth.js";

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

export function eventsBlogVueApp() {
    const app = Vue.createApp({
        data() {
            return {
                eventsBlogData: [],
                loadingEventsBlog: true,
                eventsBlogError: null
            };
        },
        created() {
            this.getEventsBlog();
        },
        methods: {
            getEventsBlog() {
                this.eventsBlogError = null;
                fetch("http://127.0.0.1:8000/api/events-blogs")
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch the artifacts.");
                        }
                        return res.json();
                    })
                    .then(eventsBlog => {
                        this.eventsBlogData = eventsBlog;
                    })
                    .catch(err => {
                        this.eventsBlogError = err.message;
                    })
                    .finally(() => {
                        this.loadingEventsBlog = false;

                        this.$nextTick(() => {
                            gsap.from(".post-card", {
                                opacity: 0,
                                y: 24,
                                duration: 0.7,
                                stagger: 0.3,
                                ease: "power2.out"
                            });
                        });
                    });
            },
            formatDate(dateStr) {
                const date = new Date(dateStr);
                return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
            }
        
        }
    });
    app.mount("#events-blog-app");
}

export function eventsBlogVueDetailApp() {
    const app = Vue.createApp({
        data() {
            return {
                selectedEventsBlog: null,
                loadingEventsBlogDetails: true,
                eventsBlogDetailsError: null,
                relatedEventsBlog: [],  
            };
        },
        created() {
            this.getEventsBlogById();
            this.getRelatedEventsBlog(); 
        },
        methods: {
            getEventsBlogById() {
                // take id from URL
                const params = new URLSearchParams(window.location.search);
                const id = params.get("id");

                if (!id) {
                    this.eventsBlogDetailsError = "Failed to fetch the selected post.";
                    this.loadingEventsBlogDetails = false;
                    return;
                }

                fetch(`http://127.0.0.1:8000/api/events-blogs/${id}`)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch post details.");
                        }
                        return res.json();
                    })
                    .then(eventsBlog => {

                        this.selectedEventsBlog = {
                            title: eventsBlog.title || "NOT available",
                            postType: eventsBlog.post_type || "NOT available",
                            eventDate: eventsBlog.event_date || "NOT available",
                            eventTime: eventsBlog.event_time || "NOT available",
                            location: eventsBlog.location || "NOT available",
                            description: eventsBlog.description || "NOT available",
                            content: eventsBlog.content || "NOT available",
                            imagePath: eventsBlog.image_path || "",
                            publishedDate: eventsBlog.created_at || ""
                        };
                    })
                    .catch(err => {
                        this.eventsBlogDetailsError = err.message;
                    })
                    .finally(() => {
                        this.loadingEventsBlogDetails = false;
                    });
            },

            formatDate(dateStr) {
                const date = new Date(dateStr);
                return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
            },

            // get other posts
            getRelatedEventsBlog() {        
                const params = new URLSearchParams(window.location.search);
                const currentId = Number(params.get("id"));

                fetch("http://127.0.0.1:8000/api/events-blogs")
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch post.");
                        }
                        return res.json();
                    })
                    .then(eventsBlog => {
                        this.relatedEventsBlog = eventsBlog.filter(eventsBlog => eventsBlog.id !== currentId);
                    })
                    .catch(err => {
                        console.error(err.message);
                    })
                    .finally(() => {
                        this.$nextTick(() => {
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

                        });
                    });
            },
        }
    });  
    app.mount("#post-detail-app");
}

export function borVueApp() {
    const app = Vue.createApp({
        data() {
            return {
                remembrancesData: [],
                loadingRemembrances: true,
                remembrancesError: null
            };
        },
        created() {
            this.getRemembrances();
        },
        methods: {
            getRemembrances() {
                this.remembrancesError = null;
                fetch("http://127.0.0.1:8000/api/remembrances")
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch the pilots of remembrance.");
                        }
                        return res.json();
                    })
                    .then(remembrances => {
                        this.remembrancesData = remembrances;
                    })
                    .catch(err => {
                        this.remembrancesError = err.message;
                    })
                    .finally(() => {
                        this.loadingRemembrances = false;

                        this.$nextTick(() => {
                            gsap.fromTo(".bor-title-text",
                                { opacity: 0, y: 16 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.4,
                                    stagger: 0.08,
                                    ease: "power3.out"
                                }
                            );
                        });
                    });
            }
        
        }
    });
    app.mount("#bor-app");
}

export function remembrancesVueDetailApp() {
    const app = Vue.createApp({
        data() {
            return {
                selectedRemembrances: null,
                loadingRemembrancesDetails: true,
                remembrancesDetailsError: null,
                relatedRemembrances: [],  
            };
        },
        created() {
            this.getRemembrancesById();
        },
        methods: {
            getRemembrancesById() {
                // take id from URL
                const params = new URLSearchParams(window.location.search);
                const id = params.get("id");

                if (!id) {
                    this.remembrancesDetailsError = "Failed to fetch the selected post.";
                    this.loadingRemembrancesDetails = false;
                    return;
                }

                fetch(`http://127.0.0.1:8000/api/remembrances/${id}`)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch remembrances details.");
                        }
                        return res.json();
                    })
                    .then(remembrances => {

                        this.selectedRemembrances = {
                            fullName: remembrances.full_name || "NOT available",
                            rankTitle: remembrances.rank_title || "Unknown",
                            branch: remembrances.branch || "Unknown",
                            squadron: remembrances.squadron || "Unknown",
                            imagePath: remembrances.page?.image_path || ""
                        };
                    })
                    .catch(err => {
                        this.remembrancesDetailsError = err.message;
                    })
                    .finally(() => {
                        this.loadingRemembrancesDetails = false;

                        this.$nextTick(() => {
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
                        });
                    });     
            },
        }
    });  
    app.mount("#bor-detail-app");
}


export function postListVueApp() {
    const app = Vue.createApp({
        data() {
            return {
                eventsBlogData: [],
                loadingEventsBlog: true,
                eventsBlogError: null,
                showAddForm: false,
                newPost: {
                    title: '',
                    post_type: '',
                    event_date: '',
                    description: '',
                    content: '',
                    image_path: ''
                },
                showEditForm: false,
                editPost: {
                    id: null,
                    title: '',
                    post_type: '',
                    event_date: '',
                    description: '',
                    content: '',
                    image_path: ''
                },
                editErrors: {},
                showDeleteConfirm: false,
                deleteTarget: null,
                addErrors: {},
            };
        },
        created() {
            this.getEventsBlog();
        },
        methods: {
            getEventsBlog() {
                this.eventsBlogError = null;
                fetch("http://127.0.0.1:8000/api/events-blogs/admin", {
                headers: {
                    'Authorization': 'Bearer ' + getToken(),
                    'Accept': 'application/json'
                }
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error("Failed to fetch the events and blogs.");
                        }
                        return res.json();
                    })
                    .then(eventsBlog => {
                        this.eventsBlogData = eventsBlog;
                    })
                    .catch(err => {
                        this.eventsBlogError = err.message;
                    })
                    .finally(() => {
                        this.loadingEventsBlog = false;
                    });
            },
            formatDate(dateStr) {
                const date = new Date(dateStr);
                return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
            },
            createPost() {
                this.eventsBlogError = null;
                fetch("http://127.0.0.1:8000/api/events-blogs", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getToken(),
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(this.newPost)
                })
                    .then(res => {
                        if (!res.ok) {
                            return res.json().then(data => {
                                throw data;
                            });
                        }
                        return res.json();
                    })
                    .then(data => {
                        this.showAddForm = false;
                        this.newPost = {
                            title: '',
                            post_type: '',
                            event_date: '',
                            description: '',
                            content: '',
                            image_path: ''
                        };
                        this.addErrors = {};
                        this.getEventsBlog();
                    })
                    .catch(err => {
                        if (err.errors) {
                            this.addErrors = {};
                            if (err.errors.title) this.addErrors.title = err.errors.title[0];
                            if (err.errors.post_type) this.addErrors.post_type = err.errors.post_type[0];
                            if (err.errors.event_date) this.addErrors.event_date = err.errors.event_date[0];
                            if (err.errors.description) this.addErrors.description = err.errors.description[0];
                            if (err.errors.content) this.addErrors.content = err.errors.content[0];
                            if (err.errors.image_path) this.addErrors.image_path = err.errors.image_path[0];
                        } else {
                            this.eventsBlogError = "It seems you have lost your internet connection. Please try again later";
                        }
                    });
            },
            openEdit(eventsBlog) {
                this.editPost = {
                    id: eventsBlog.id,
                    title: eventsBlog.title || '',
                    post_type: eventsBlog.post_type || '',
                    event_date: eventsBlog.event_date || '',
                    description: eventsBlog.description || '',
                    content: eventsBlog.content || '',
                    image_path: eventsBlog.image_path || ''
                };
                this.editErrors = {};
                this.showEditForm = true;
            },

            updatePost() {
                fetch(`http://127.0.0.1:8000/api/events-blogs/${this.editPost.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getToken(),
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        title: this.editPost.title,
                        post_type: this.editPost.post_type,
                        event_date: this.editPost.event_date,
                        description: this.editPost.description,
                        content: this.editPost.content,
                        image_path: this.editPost.image_path
                    })
                })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(data => {
                            throw data;
                        });
                    }
                    return res.json();
                })
                .then(data => {
                    this.showEditForm = false;
                    this.editErrors = {};
                    this.getEventsBlog();
                })
                .catch(err => {
                    if (err.errors) {
                        this.editErrors = {};
                        if (err.errors.title) this.editErrors.title = err.errors.title[0];
                        if (err.errors.post_type) this.editErrors.post_type = err.errors.post_type[0];
                        if (err.errors.event_date) this.editErrors.event_date = err.errors.event_date[0];
                        if (err.errors.description) this.editErrors.description = err.errors.description[0];
                        if (err.errors.content) this.editErrors.content = err.errors.content[0];
                        if (err.errors.image_path) this.editErrors.image_path = err.errors.image_path[0];
                    } else {
                        this.eventsBlogError = "Failed to update post. Please try again.";
                    }
                });
            },
            
            confirmDelete(eventsBlog) {
                this.deleteTarget = eventsBlog;
                this.showDeleteConfirm = true;
            },

            deletePost() {
                fetch(`http://127.0.0.1:8000/api/events-blogs/${this.deleteTarget.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': 'Bearer ' + getToken(),
                        'Accept': 'application/json'
                    }
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to delete post.');
                    }
                    this.showDeleteConfirm = false;
                    this.deleteTarget = null;
                    this.getEventsBlog();
                })
                .catch(err => {
                    this.eventsBlogError = err.message;
                });
            },
            restorePost(eventsBlog) {
                fetch(`http://127.0.0.1:8000/api/events-blogs/${eventsBlog.id}/restore`, {
                    method: 'POST',
                    headers: {
                        'Authorization': 'Bearer ' + getToken(),
                        'Accept': 'application/json'
                    }
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to restore post.');
                    }
                    this.getEventsBlog();
                })
                .catch(err => {
                    this.eventsBlogError = err.message;
                });
            },
        }
    });
    app.mount("#post-list-app");
}

export function artifactsPostListVueApp() {
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
                    });
            }
        
        }
    });
    app.mount("#artifacts-post-list-app");
}