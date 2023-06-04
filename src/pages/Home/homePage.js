import catIMG from "./images/cat-pic.jpg";
import { createAndAppend, createList } from "../../modules/functions.js";

const createPageContent = function () {
    const page_content = document.querySelector(".page-content");

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

const createHomepage = function () {
    createPageContent();
};

export default createHomepage;
