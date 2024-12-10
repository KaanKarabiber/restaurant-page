import backgroundImgPath from "./assets/BackgroundImage.jpg";

export function showHome(){
    const content = document.querySelector("#content");
    content.innerText = "";
    const backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundImgPath;
    const headline = document.createElement("h2");
    headline.textContent = "Pizza Boys";
    const belowHeadlineText = document.createElement("p");
    belowHeadlineText.textContent = "Enjoy the finest dining experience with us.";
    
    content.append(headline, belowHeadlineText, backgroundImage);
}