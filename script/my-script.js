const formular = document.getElementById("kontaktformular");

formular.addEventListener("submit", function (event) {
    event.preventDefault();
    const namn = document.getElementById("namn").value;

    const bekraftelse = document.getElementById("bekraftelse");
    bekraftelse.textContent = "Tusen tack " + namn + "! Du har nu skickat en förfrågan och vi återkommer så snart vi kan, varma kramar Siv och Maya";
    bekraftelse.style.color = "#fff2f2";
    bekraftelse.style.backgroundColor = "#F25244";
    bekraftelse.style.padding= "1rem";

    formular.reset();
});