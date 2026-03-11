import { header } from "./modules/header.js";
import { videoplayer } from "./modules/videoplayer.js";
import { selectDate } from "./modules/battle-of-britain.js";
import { timeline } from "./modules/timeline.js";
import { carousel } from "./modules/about.js";
import { timelineCarousel } from "./modules/history.js";

if(document.body.dataset.page === "home") {
  header();
  videoplayer();
} else if (document.body.dataset.page === "about") {
    header();
    carousel();
} else if (document.body.dataset.page === "artifacts") {
    header();
} else if (document.body.dataset.page === "battle-of-britain") {
    header();
    selectDate();
} else if (document.body.dataset.page === "book-of-remembrance") {
    header();
} else if (document.body.dataset.page === "contact") {
    header();
} else if (document.body.dataset.page === "education") {
    header();
} else if (document.body.dataset.page === "error") {
    header();
} else if (document.body.dataset.page === "events-blog") {
    header();
} else if (document.body.dataset.page === "FAQ") {
    header();
} else if (document.body.dataset.page === "london-aviation") {
    header();
    timeline();
    timelineCarousel();
} else if (document.body.dataset.page === "privacy-policy") {
    header();
} else if (document.body.dataset.page === "wartime") {
    header();
}
