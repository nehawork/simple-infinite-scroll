import { getComments } from "./services/posts-service.js";

let PAGE_NUMBER = 1;
const TOTAL_PAGES = 10;

document.addEventListener("DOMContentLoaded", () => {
  getComments(PAGE_NUMBER);
  document.getElementById("totalPage").innerHTML = TOTAL_PAGES;
});

const container = document.getElementById("mainPage");
const loadingDiv = document.getElementById("loadingDiv");

container.addEventListener("scroll", () => {
  if (
    PAGE_NUMBER < TOTAL_PAGES &&
    loadingDiv.style.visibility === "hidden" &&
    container.scrollTop + container.clientHeight >= container.scrollHeight - 50
  ) {
    PAGE_NUMBER++;
    getComments(PAGE_NUMBER);
  }
});
