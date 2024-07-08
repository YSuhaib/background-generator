var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");
var firstColor;
var secondColor;

function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

function ChangeColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}



color1.addEventListener("input", ChangeColor);

color2.addEventListener("input", ChangeColor);

button.addEventListener("click", function () {
    firstColor = generateRandomColor();
    secondColor = generateRandomColor();
    for (var i = 0; i < 2; i++) {
        body.style.background = "linear-gradient(to right, " + firstColor + ", " + secondColor + ")";
        button.style.background = "linear-gradient(to left, " + firstColor + ", " + secondColor + ")";
        css.textContent = body.style.background + ";";
        color1.value = firstColor;
        color2.value = secondColor;
    }

});