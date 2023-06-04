import "./contactStyle.css";
import { createAndAppend, createList } from "../../modules/functions.js";

const createContactInfo = function () {
    const page_content = document.querySelector(".page-content");

    const contact = createAndAppend(page_content, "div");
    contact.className = "contact";

    const h2 = createAndAppend(contact, "h2");
    h2.innerHTML = "Contact info";

    const location = createAndAppend(contact, "p");
    location.innerHTML = "Address: 897 Galvin St.Chandler, AZ 85224";

    const number = createAndAppend(contact, "p");
    number.innerHTML = "Number: +1 202-918-2132";

    const email = createAndAppend(contact, "p");
    email.innerHTML = "E-mail: WhiskersCafetaria@gmail.com";
};

const createContactpage = function () {
    createContactInfo();
};

export default createContactpage;
