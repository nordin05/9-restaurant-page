import "./menuStyle.css";
import dryFoodImg from "./images/dry-chicken-turkey.png";
import wetFoodImg from "./images/tuna-filet.webp";
import { createAndAppend, createList } from "../../modules/functions.js";

const createMenuItem = function (index, item) {
    const items = document.querySelector(".items");

    const menuItem = createAndAppend(items, "div");
    menuItem.className = `item ${index}`;

    const h2 = createAndAppend(menuItem, "h2");
    h2.innerHTML = item.title;

    const imageDiv = createAndAppend(menuItem, "div");
    imageDiv.className = "itemIMG";

    const img = new Image();
    img.src = item.img_src;
    imageDiv.appendChild(img);

    const p1 = createAndAppend(menuItem, "p");
    p1.innerHTML = item.description;

    const p2 = createAndAppend(menuItem, "p");
    p2.innerHTML = item.price;
};

function menuItemObj(title, img_src, description, price) {
    this.title = title;
    this.img_src = img_src;
    this.description = description;
    this.price = price;
}

const Item1 = new menuItemObj(
    "Dry chicken and Turkey",
    dryFoodImg,
    "Whiskers' speciality dry food, a customer favorite!",
    "$6 -"
);

const Item2 = new menuItemObj(
    "Tuna filet",
    wetFoodImg,
    "A delicious meal for when you want something a little more appetising!",
    "$13 -"
);

const menu_items = [Item1, Item2];

const createMenu = function () {
    const page_content = document.querySelector(".page-content");

    const items = createAndAppend(page_content, "div");
    items.className = "items";

    for (let i = 0; i < menu_items.length; i++) {
        createMenuItem(i + 1, menu_items[i]);
    }
};

export default createMenu;
