var Hs = ["h1", "h3"];
for (let i = 0; i < Hs.length; i++) {
    var hs = Hs[i];
    var h = document.querySelectorAll(hs);

    function colorRed(element) {
        element.classList.toggle("oswald-font");
        element.classList.toggle("green");
    }
    h.forEach(colorRed);
}
