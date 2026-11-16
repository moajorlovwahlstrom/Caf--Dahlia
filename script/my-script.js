/*Formulär*/

const formular = document.getElementById("kontaktformular");

if (formular) {
    formular.addEventListener("submit", function (event) {
        event.preventDefault();
        const namn = document.getElementById("namn").value;

        const bekraftelse = document.getElementById("bekraftelse");
        bekraftelse.textContent = "Tusen tack " + namn + "! Du har nu skickat en förfrågan och vi återkommer så snart vi kan, varma kramar från Siv & Maya";
        bekraftelse.style.color = "#fff2f2";
        bekraftelse.style.backgroundColor = "#0d0d0d";
        bekraftelse.style.padding = "1rem";
        bekraftelse.style.borderRadius = "8px";

        formular.reset();
    });
}

/*Bilderfokusläge-lightbox*/
const bilder = document.querySelectorAll(".hem-bilder img");

const lightbox = document.getElementById("lightbox");
const storbild = document.getElementById("stor-bild");
const stangbild = document.getElementById("stang-bild");
const bildtext = document.getElementById("bildtext");

bilder.forEach(function (bild) {
    bild.addEventListener("click", function () {
        storbild.src = bild.src;
        storbild.alt = bild.alt;

        bildtext.textContent = bild.dataset.caption;

        lightbox.style.display = "flex";
    });
});
if (stangbild) {
    stangbild.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
}
if (lightbox) {    
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}