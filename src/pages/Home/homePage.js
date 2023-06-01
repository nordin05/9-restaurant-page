import catIMG from "./images/cat-pic.jpg";
import { createAndAppend, createList } from "../../modules/functions.js";

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

const createPageContent = function () {
    const page_content = createAndAppend(content, "div");
    page_content.className = "page-content";

    const imageDiv = createAndAppend(page_content, "div");
    imageDiv.className = "image";

    const Whiskers = new Image();
    Whiskers.src = catIMG;
    imageDiv.appendChild(Whiskers);

    const ul = createAndAppend(page_content, "ul");
    const p = createAndAppend(ul, "p");
    p.innerHTML = "Opening Hours";

    const li_array = ["Mon - Fri:", "3am to 6am", "Weekends:", "Closed"];
    createList(ul, li_array);

    const btn = createAndAppend(ul, "button");
    btn.innerHTML = "Reserve now!";
};

const createFooter = function () {
    const footer = createAndAppend(content, "div");
    footer.className = "footer";
};

const createHomepage = function () {
    createHeader();
    createPageContent();
    createFooter();
};

export default createHomepage;
