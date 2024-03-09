var Hs = ["h1", "h3"];

for (let elem of Hs) {
    var h = document.querySelectorAll(elem);
    for (let e of h) {
        // h.classList.add("oswald-font");
        h.classList.add("red");
    }
}
