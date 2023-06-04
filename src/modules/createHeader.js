import { createAndAppend, createList } from "./functions.js";

const content = document.querySelector("#content");

const createHeader = function () {
    const header = createAndAppend(content, "div");
    header.className = "header";

    const h1 = createAndAppend(header, "h1");
    h1.innerHTML = "Whiskers' Cafetaria";

    const ul = createAndAppend(header, "ul");
    ul.className = "page-links";

    const li_array = ["Home", "Menu", "Contact"];
    createList(ul, li_array);
};

export default createHeader;
