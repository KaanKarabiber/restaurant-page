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
  


export function showMenu() {
    const content = document.querySelector("#content");
    content.innerText = "";

    const menuCard1 = new MenuCard("Detroit", "5$", "A thick, square-shaped pizza with crispy edges and a rich, cheesy topping, perfect for a hearty appetite.", menuItem1Img); 
    const menuCard2 = new MenuCard("Pepperoni", "12$", "A classic favorite topped with zesty pepperoni slices and melted mozzarella on a flavorful tomato base.", menuItem2Img); 
    const menuCard3 = new MenuCard("Neopolitan", "13$", "A traditional Italian pizza with a thin crust, fresh mozzarella, basil, and a touch of olive oil.", menuItem3Img); 
    const menuCard4 = new MenuCard("New York", "9$", "A large, foldable slice with a thin crust, perfect for grabbing on the go and enjoying classic flavors.", menuItem4Img); 
    const menuCard5 = new MenuCard("Chicago", "15$", "A deep-dish delight loaded with layers of cheese, sauce, and toppings, baked to perfection.", menuItem5Img); 
    const menuCard6 = new MenuCard("Margherita", "10$", "A simple yet elegant pizza featuring fresh tomatoes, mozzarella, and fragrant basil leaves.", menuItem6Img); 
    const menu = [menuCard1, menuCard2, menuCard3, menuCard4, menuCard5, menuCard6];

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    menu.forEach((menuItem) => {
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");
        
        const menuCardRight = document.createElement("div");
        menuCardRight.classList.add("menu-card-right");

        const title = document.createElement("p");
        title.textContent = menuItem.name;
        title.classList.add("menu-title");

        const price = document.createElement("button");
        price.textContent = menuItem.price;
        price.classList.add("price");

        const explanation = document.createElement("p");
        explanation.textContent = menuItem.explanation;
        explanation.classList.add("explanation");

        const image = document.createElement("img");
        image.src = menuItem.image;
        image.classList.add("menu-image")

        menuCardRight.append(title, explanation, price);
        menuCard.append(image, menuCardRight);
        menuContainer.append(menuCard);
    });
    content.append(menuContainer);
}
