function _load() {
    console.log("Page loaded.");

    document.getElementById("menu-btn").addEventListener("click", function (event) {
        console.log(event.target);
        event.target.classList.toggle("clicked");
    });

}

window.addEventListener("load", _load);