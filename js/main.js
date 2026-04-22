gsap.registerPlugin(ScrollTrigger);

import { loginVueApp, requireAuth, logout } from "./modules/auth.js";
import { header } from "./modules/header.js";
import { selectDate } from "./modules/battle-of-britain.js";
import { timeline } from "./modules/timeline.js";
import { carousel } from "./modules/about.js";
import { timelineCarousel } from "./modules/history.js";
import { selectLocation } from "./modules/warime.js";
import { moveMap } from "./modules/warime.js";
import { form } from "./modules/contact.js";
import { aboutAnimation, ArtifactsAnimation } from "./modules/gsap.js";
import { sectionTitle } from "./modules/gsap.js";
import { bofbAnimation } from "./modules/gsap.js";
import { educationAnimation } from "./modules/gsap.js";
import { faqAnimation } from "./modules/gsap.js";
import { homeAnimation } from "./modules/gsap.js";
import { londonPilotsAnimation } from "./modules/gsap.js";
import { contactAnimation } from "./modules/gsap.js";
import { artifactCarousel } from "./modules/artifact.js";
import { remPilotAnimation } from "./modules/gsap.js";
import { postAnimation } from "./modules/gsap.js";
import { artifactVueApp } from "./modules/vue_app.js";
import { artifactVueDetailApp } from "./modules/vue_app.js";
import { eventsBlogVueApp } from "./modules/vue_app.js";
import { eventsBlogVueDetailApp } from "./modules/vue_app.js";
import { modelCarousel } from "./modules/battle-of-britain.js";
import { centralSlideshow } from "./modules/warime.js";
import { borVueApp } from "./modules/vue_app.js";
import { remembrancesVueDetailApp } from "./modules/vue_app.js";
import { footerAnimation } from "./modules/gsap.js";
import { privacyAnimations } from "./modules/gsap.js";
import { adminMenu } from "./modules/dashbord.js";
import { postListVueApp } from "./modules/vue_app.js";
import { artifactsPostListVueApp } from "./modules/vue_app.js";
// import { addPost } from "./modules/dashbord.js";
// import { deletePost } from "./modules/dashbord.js";
// import { editPost } from "./modules/dashbord.js";


if(document.body.dataset.page === "home") {
  header();
  sectionTitle();
  homeAnimation();
  footerAnimation();
} else if (document.body.dataset.page === "about") {
    header();
    carousel();
    aboutAnimation();
    sectionTitle();
    footerAnimation();
} else if (document.body.dataset.page === "artifact-detail") {
    header();
    artifactVueDetailApp();
    footerAnimation();
} else if (document.body.dataset.page === "artifacts") {
    header();
    sectionTitle();
    artifactVueApp();
    footerAnimation();
} else if (document.body.dataset.page === "battle-of-britain") {
    header();
    selectDate();
    sectionTitle();
    bofbAnimation();
    modelCarousel();
    footerAnimation();
} else if (document.body.dataset.page === "pilot") {
    header();
    sectionTitle();
    londonPilotsAnimation();
    footerAnimation();
} else if (document.body.dataset.page === "book-of-remembrance") {
    header();
    sectionTitle();
    borVueApp();
    footerAnimation();
} else if (document.body.dataset.page === "remembrance-pilot") {
    header();
    sectionTitle();
    remembrancesVueDetailApp();
    footerAnimation();
} else if (document.body.dataset.page === "contact") {
    header();
    form();
    sectionTitle();
    contactAnimation();
    footerAnimation();
} else if (document.body.dataset.page === "education") {
    header();
    sectionTitle();
    educationAnimation();
    footerAnimation();
} else if (document.body.dataset.page === "error") {
    header();
    footerAnimation();
} else if (document.body.dataset.page === "events-blog") {
    header();
    eventsBlogVueApp();
    footerAnimation();
} else if (document.body.dataset.page === "post") {
    header();
    eventsBlogVueDetailApp();
    footerAnimation();
} else if (document.body.dataset.page === "FAQ") {
    header();
    sectionTitle();
    faqAnimation();
    footerAnimation();
} else if (document.body.dataset.page === "london-aviation") {
    header();
    timeline();
    timelineCarousel();
    sectionTitle();
    footerAnimation();
} else if (document.body.dataset.page === "privacy-policy") {
    header();
    footerAnimation();
    sectionTitle();
    privacyAnimations();
} else if (document.body.dataset.page === "wartime") {
    header();
    selectLocation();
    sectionTitle();
    centralSlideshow();
    footerAnimation();
} else if (document.body.dataset.page === "dashbord") {
    requireAuth();
    setTimeout(() => { adminMenu(); }, 100);
    postListVueApp();
    // addPost();
    // deletePost();
    // editPost();

    document.querySelector('#logout').addEventListener('click', logout);
} else if (document.body.dataset.page === "dashbord-artifacts") {
    requireAuth();
    setTimeout(() => { adminMenu(); }, 100);
    artifactsPostListVueApp();
    // addPost();
    // editPost();
    // deletePost();

    document.querySelector('#logout').addEventListener('click', logout);
} else if (document.body.dataset.page === "login") {
    loginVueApp();
}
    