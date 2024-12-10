export function showAbout(){
    const content = document.querySelector("#content");
    content.innerText = "";

    const aboutContainer = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = "About Us";

    const aboutText = document.createElement("p");
    aboutText.textContent = "Welcome to Pizza Boys, where every slice tells a story of passion, tradition, and flavor! Our mission is simple: to serve the best pizza you’ve ever tasted. Our journey began with a love for authentic, hand-tossed dough, fresh ingredients, and bold flavors. Each pizza is crafted from scratch, using only the finest locally-sourced produce and premium cheeses. From classic favorites like Margherita and Pepperoni to creative specialties like Detroit Deep Dish and Neapolitan delights, we have something to satisfy every craving.At Pizza Boys, we believe that great pizza brings people together. Whether you're dining in, grabbing a slice on the go, or ordering for delivery, our friendly team is here to make your experience unforgettable. Thank you for making us part of your story. Let’s create delicious memories, one bite at a time!"
    
    aboutContainer.append(title, aboutText);
    content.append(aboutContainer);
}