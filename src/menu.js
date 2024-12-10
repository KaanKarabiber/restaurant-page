import menuItem1Img from "./assets/detroit.jpg"
import menuItem2Img from "./assets/Pepperoni.jpg"
import menuItem3Img from "./assets/Neopolitan.jpg"
import menuItem4Img from "./assets/NewYork.jpg"
import menuItem5Img from "./assets/Chicago.jpg"
import menuItem6Img from "./assets/margherita.jpg"


function MenuCard(name, price, explanation, image) {
    this.name = name;
    this.price = price;
    this.explanation = explanation;
    this.image = image;
}
  
const menuCard1 = new MenuCard("Detroit", "5$", "Detroit time", menuItem1Img); 
const menuCard2 = new MenuCard("Pepperoni", "12$", "Pepperoni time", menuItem2Img); 
const menuCard3 = new MenuCard("Neopolitan", "13$", "Neopolitan time", menuItem3Img); 
const menuCard4 = new MenuCard("New York", "9$", "New York time", menuItem4Img); 
const menuCard5 = new MenuCard("Chicago", "15$", "Chicago time", menuItem5Img); 
const menuCard6 = new MenuCard("Margherita", "10$", "Margherita time", menuItem6Img); 
export const menu = [menuCard1, menuCard2, menuCard3, menuCard4, menuCard5, menuCard6];

export function showMenu(menu) {
    const content = document.querySelector("#content");
    content.innerText = "";
    menu.forEach((menuItem) => {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        const title = document.createElement("p");
        title.textContent = menuItem.name;
        title.classList.add("menu-title");

        const price = document.createElement("p");
        price.textContent = menuItem.price;
        price.classList.add("price");

        const explanation = document.createElement("p");
        explanation.textContent = menuItem.explanation;
        explanation.classList.add("explanation");

        const image = document.createElement("img");
        image.src = menuItem.image;
        image.classList.add("menu-image")

        menuCard.append(title, price, explanation, image);
        content.append(menuCard);
    });
}
