export function showHome(){
    const content = document.querySelector("#content");
    content.innerText = "";
    
    const headline = document.createElement("h2");
    headline.textContent = "Experience the perfect slice in a warm, welcoming atmosphere designed for pizza lovers.";
    
    const belowHeadlineText = document.createElement("p");
    belowHeadlineText.textContent = "Savor every bite of our handcrafted pizzas, made with love and the freshest ingredients.";

    const reservationBttn = document.createElement("button");
    reservationBttn.textContent = "Reservations";

    const onlineBttn = document.createElement("button");
    onlineBttn.textContent = "Order Online";
    
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.append(reservationBttn, onlineBttn);

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("home-container");
    containerDiv.append(headline, belowHeadlineText, buttonContainer);
    
    content.append(containerDiv);
}