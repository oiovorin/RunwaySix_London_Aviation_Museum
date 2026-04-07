gsap.registerPlugin(ScrollTrigger);

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


if(document.body.dataset.page === "home") {
  header();
  sectionTitle();
  homeAnimation();
} else if (document.body.dataset.page === "about") {
    header();
    carousel();
    aboutAnimation();
    sectionTitle();
} else if (document.body.dataset.page === "artifact-detail") {
    header();
    artifactVueDetailApp();
} else if (document.body.dataset.page === "artifacts") {
    header();
    sectionTitle();
    artifactVueApp();
} else if (document.body.dataset.page === "battle-of-britain") {
    header();
    selectDate();
    sectionTitle();
    bofbAnimation();
    modelCarousel();
} else if (document.body.dataset.page === "pilot") {
    header();
    sectionTitle();
    londonPilotsAnimation();
} else if (document.body.dataset.page === "book-of-remembrance") {
    header();
    sectionTitle();
} else if (document.body.dataset.page === "remembrance-pilot") {
    header();
    sectionTitle();
    remPilotAnimation();
} else if (document.body.dataset.page === "contact") {
    header();
    form();
    sectionTitle();
    contactAnimation();
} else if (document.body.dataset.page === "education") {
    header();
    sectionTitle();
    educationAnimation();
} else if (document.body.dataset.page === "error") {
    header();
} else if (document.body.dataset.page === "events-blog") {
    header();
    eventsBlogVueApp();
} else if (document.body.dataset.page === "post") {
    header();
    eventsBlogVueDetailApp();
} else if (document.body.dataset.page === "FAQ") {
    header();
    sectionTitle();
    faqAnimation();
} else if (document.body.dataset.page === "london-aviation") {
    header();
    timeline();
    timelineCarousel();
    sectionTitle();
} else if (document.body.dataset.page === "privacy-policy") {
    header();
} else if (document.body.dataset.page === "wartime") {
    header();
    selectLocation();
    sectionTitle();
    centralSlideshow();
}
