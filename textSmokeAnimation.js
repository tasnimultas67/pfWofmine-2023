// "use strict";
const textAnimation = document.getElementsByClassName("textAnimate")[0];
textAnimation.innerHTML = textAnimation.textContent.replace(/\S/g, "<span>$&</span>");
const letters = document.getElementsByTagName("span");
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", () => {
        letters[i].classList.add("active");
    });
}
