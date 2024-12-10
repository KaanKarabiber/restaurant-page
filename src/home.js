import backgroundImgPath from "./assets/BackgroundImage.jpg";

export function showHome(){
    const backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundImgPath;
    const headline = document.createElement("h2");
    headline.textContent = "Pizza Boys";
    const belowHeadlineText = document.createElement("p");
    belowHeadlineText.textContent = "Enjoy the finest dining experience with us.";
    
    const content = document.querySelector("#content");
    content.append(headline, belowHeadlineText, backgroundImage);
}