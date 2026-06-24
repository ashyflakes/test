'use strict';

const darkModeBtn = document.querySelector(".dark_mode");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark_theme");
}

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark_theme");

    if (document.body.classList.contains("dark_theme")) {
        localStorage.setItem("theme", "dark");
        darkModeBtn.textContent = "🌙";
    }
    else {
        localStorage.setItem("theme", "light");
        darkModeBtn.textContent = "☀️";
    };
});
