function toggleButton(event) {
    document.getElementById("bodyID").classList.toggle("clicked");
}

function _load() {
    console.log("Page loaded.");

    document.getElementById("menu-btn").addEventListener("click", toggleButton);
}

window.addEventListener("load", _load);
