function reloj() {
    let horaElemento = document.querySelector("#hora");
    let horaActual = new Date();
    let horas = horaActual.getHours();
    let minutos = horaActual.getMinutes();
    let segundos = horaActual.getSeconds();

    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    let horaString = horas + ":" + minutos + ":" + segundos;
    horaElemento.textContent = horaString;
}

setInterval(reloj, 1000);