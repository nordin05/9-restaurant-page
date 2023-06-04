import { createAndAppend, createList } from "./functions.js";

const content = document.querySelector("#content");

const createFooter = function () {
    const footer = createAndAppend(content, "div");
    footer.className = "footer";
};

export default createFooter;
