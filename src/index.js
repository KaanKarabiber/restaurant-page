import { showHome } from "./home";
import "./styles.css";
import { showMenu } from "./menu";
import { showAbout } from "./about";

//initial page
showAbout();
// showHome();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => showHome());
menuButton.addEventListener("click", () => showMenu());
aboutButton.addEventListener("click", () => showAbout());
