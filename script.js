function fastLog(text) {
    console.log(text);
    return "text logged";
}

function toggleButton(event) {
    console.log(event.target);

    event.target.classList.toggle("clicked");
    const fastLogResult = fastLog("Ezt a szöveget akarom kiloggoltatni");
    console.log(fastLogResult);
}


function _load() {
    console.log("Page loaded.");

    document.getElementById("menu-btn").addEventListener("click", toggleButton);;
}



window.addEventListener("load", _load);