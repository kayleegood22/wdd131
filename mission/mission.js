const themeSelector = document.getElementById("theme");
const body = document.getElementById("body");
const logo = document.querySelector('.logo');

themeSelector.addEventListener("change", () => {
    console.log("Theme selected:", themeSelector.value);

    if (themeSelector.value === "dark") {
        body.classList.add("dark");
        logo.src = "byui-logo_white.png"
        console.log("Dark mode applied.")
    } else {
        body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp"
        console.log("light mode applied.")
    }
    console.log("Content classList:", content.classList);
});
