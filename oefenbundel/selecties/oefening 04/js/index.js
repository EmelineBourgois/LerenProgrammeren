let leeftijd = prompt("wat is je geboortejaar?");
let huidigJaar = prompt("wat is het huidige jaar?");

if (huidigJaar - leeftijd >= 18) {
    document.write("Vanaf nu mag, kan, en beslis ik alles, binnen de wettelijke grenzen");
} else if (huidigJaar - leeftijd < 0) {
    document.write("dit is niet mogelijk");
} else {
    document.write("Gelukkig heb ik mijn ouders die alles regelen");
}