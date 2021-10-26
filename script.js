function toggleButton(event) {
    event.target.classList.toggle("clicked");
    document.getElementById("nav").classList.toggle("clicked");
}

function _load() {
    console.log("Page loaded.");

    document.getElementById("menu-btn").addEventListener("click", toggleButton);
}

window.addEventListener("load", _load);