export function showHome(){
    const content = document.querySelector("#content");
    content.innerText = "";
    
    const headline = document.createElement("h2");
    headline.textContent = "Pizza showtime";
    
    const belowHeadlineText = document.createElement("p");
    belowHeadlineText.textContent = "Enjoy the finest dining experience with us.";

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