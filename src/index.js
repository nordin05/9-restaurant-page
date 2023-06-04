import "./style.css";
import createHeader from "./modules/createHeader.js";
import createFooter from "./modules/createFooter.js";
import createPage from "./modules/createPage.js";
import clearPage from "./modules/clearContent.js";
import homePage from "./pages/Home/homePage.js";
import menuPage from "./pages/Menu/menuPage.js";

createHeader();
createPage();
homePage();
createFooter();

const header = document.querySelector(".header");
const homeBtn = header.querySelector("ul li:nth-child(1)");
const menuBtn = header.querySelector("ul li:nth-child(2)");
const contactBtn = header.querySelector("ul li:nth-child(3)");

homeBtn.addEventListener("click", function () {
    clearPage();
    homePage();
});

menuBtn.addEventListener("click", function () {
    clearPage();
    menuPage();
});
