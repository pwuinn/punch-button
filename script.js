let count = 0;

const button = document.getElementById("clickBtn");
const countDisplay = document.getElementById("count");

button.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

const clickSound = document.getElementById('click-sound');
const buttons = document.querySelectorAll('button'); // all buttons

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clickSound.currentTime = 0; // restart sound if still playing
        clickSound.play();           // play sound
    });
});
