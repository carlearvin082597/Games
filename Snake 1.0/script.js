const colors = ["#f1f5f8", "#e63946", "#2a9d8f", "#264653", "#f4a261", "#2b2d42", "#8d99ae"];
const btn = document.getElementById("btn");
const colorDisplay = document.querySelector(".color");

btn.addEventListener("click", function () {
    // Get a random number between 0 and colors.length - 1
    const randomNumber = getRandomNumber();
    // Change the background color of the body
    document.body.style.backgroundColor = colors[randomNumber];
    // Update the color display text
    colorDisplay.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
