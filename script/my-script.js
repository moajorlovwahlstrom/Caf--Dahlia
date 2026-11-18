/*Formulär*/
const formular = document.getElementById("kontaktformular");
/*om (formular) finns gäller nedan annars inte*/
if (formular) {
    formular.addEventListener("submit", async function (event) {
        event.preventDefault();

        const namn = document.getElementById("namn").value;
        const bekraftelse = document.getElementById("bekraftelse");

        /*skapa en ny formdata*/
        const formulardata = new FormData(formular);

        /*gör detta när post används*/
        try {
            const svar = await fetch(formular.action, {
                method: "post",
                body: formulardata,
                headers: {
                    "Accept": "application/json"
                }
            });
            /*vad den ska göra om den får ok från formspree*/
            if (svar.ok) {
                bekraftelse.textContent = "Tusen tack " + namn + "! Du har nu skickat en förfrågan och vi återkommer så snart vi kan, varma kramar från Siv & Maya";
                bekraftelse.style.color = "#fff2f2";
                bekraftelse.style.backgroundColor = "#0d0d0d";
                bekraftelse.style.padding = "1rem";
                bekraftelse.style.borderRadius = "8px";
                formular.reset();
                /*vad den ska göra om den får error*/
            } else {
                throw new Error("Meddelandet kunde inte skickas");
            }
            /*vid error, gör en ruta med detta meddelande och utseende*/
        } catch (error) {
            bekraftelse.textContent = "Något gick fel. Försök igen!";
            bekraftelse.style.color = "#fff2f2";
            bekraftelse.style.backgroundColor = "#0d0d0d";
            bekraftelse.style.padding = "1rem";
            bekraftelse.style.borderRadius = "8px";
        }
    });
}

/*Bilderfokusläge-lightbox*/
/*detta gäller för alla bilder som ligger under hem-bilder*/
const bilder = document.querySelectorAll(".hem-bilder img");
/*hämta element från deras id*/
const lightbox = document.getElementById("lightbox");
const storbild = document.getElementById("stor-bild");
const stangbild = document.getElementById("stang-bild");
const bildtext = document.getElementById("bildtext");
/*vad som ska händer vid klick på bilden*/
bilder.forEach(function (bild) {
    bild.addEventListener("click", function () {
        storbild.src = bild.src;
        storbild.alt = bild.alt;
        bildtext.textContent = bild.dataset.caption;
        lightbox.style.display = "flex";
    });
});
/*om funktionen stangbild finns gäller nedan annars inte*/
if (stangbild)
    /*vad som händer vid klick på krysset*/ {
    stangbild.addEventListener("click", function () {
        lightbox.style.display = "none";
    });
}
/*om funktionen lightbox finns gäller nedan annars inte*/
if (lightbox)
    /*vad som händer när du trycker bredvid bilden, på lightboxen*/ {
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}