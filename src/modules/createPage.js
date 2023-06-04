import { createAndAppend } from "./functions.js";

const content = document.querySelector("#content");

const createPage = function () {
    const page_content = createAndAppend(content, "div");
    page_content.className = "page-content";
};

export default createPage;
