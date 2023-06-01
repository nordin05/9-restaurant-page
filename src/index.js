import "./style.css";
import catIMG from "./images/cat-pic.jpg";

const Whiskers = new Image();
Whiskers.src = catIMG;

document.querySelector(".image").appendChild(Whiskers);
