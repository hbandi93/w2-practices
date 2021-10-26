function _load() {
    console.log("Page loaded.");
}

function toggleButton(event) {
    document.getElementById("menu-btn");
    console.log(event.target);
    event.target.classList.toggle("clicked");
}

window.addEventListener("click", toggleButton);

window.addEventListener("load", _load);