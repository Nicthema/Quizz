
function check() {
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let correct = 0;

    if (question1 === "Izuku Midoriya") {
        correct++;
    } 
    if (question2 === "Explosion") {
        correct++;
    }
    if (question3 === "Clase 1-A") {
        correct++;
    }

    let message = ["Muy bien!", "Casi, casi perfecto, pero bien!", "Ninguna correcta!!! Viste el anime siquiera?"];
    let pictures = ["imagenes/muybien.gif", "imagenes/coulddobetter.gif", "imagenes/youaretheworst.gif"]

    let range;

    if (correct < 1) {
        range = 2;
        picture = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
        picture = 1;
    }

    if (correct > 2) {
        range = 0;
        picture = 0;
    }
    // Estamos cambiando la propiedad
    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = message[range];
    document.getElementById("number_correct").innerHTML = `Tuviste ${correct} puntos`;
    document.getElementById("pictures").src = pictures[range];
}