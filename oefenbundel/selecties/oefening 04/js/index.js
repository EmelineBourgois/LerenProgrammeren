document.getElementById("bereken").onclick = function () {

    var leeftijd = document.getElementById("geboorteJaar").value;
    var huidigJaar = document.getElementById("momenteel").value;

    if (huidigJaar - leeftijd < 0) {
        document.write("dit is niet mogelijk");
    } else if (huidigJaar - leeftijd >= 18) {
        document.write("Vanaf nu mag, kan, en beslis ik alles, binnen de wettelijke grenzen");
    } else {
        document.write("Gelukkig heb ik mijn ouders die alles regelen");
    }
}