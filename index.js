'use strict';

const darkModeBtn = document.querySelector(".dark_mode");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark_theme");

    if (document.body.classList.contains("dark_theme")) {
        darkModeBtn.textContent = "🌙";
        darkModeBtn.style.backgroundColor = "#252525";
        darkModeBtn.style.border = "solid 2px #f9f9f9"
    } else {
        darkModeBtn.textContent = "☀️";
        darkModeBtn.style.backgroundColor = "#e9e9e9"
        darkModeBtn.style.border = "solid 2px #101010"
    }
});