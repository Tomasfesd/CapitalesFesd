const secciones = ['Helsinki', 'Moscu', 'Roma', 'Paris', 'Sofia', 'Bruselas', 'Berlin','Lisboa','Madrid','Copenhague','Bratislava','Budapest','Tirana','Zagreb','Sarajevo','Praga','Luxemburgo','Atenas','Ankara','Berna'];
let actual = 0;
let correctas = 0;
let incorrectas = 0;

window.onload = function () {     // ejecutar cuando termine de cargar
    secciones.forEach((id, index) => { //recorrer el enganche de divs
        const div = document.getElementById(id);     // busca el div del id
        if (index !== 0) {     // oculta los otros divs
            div.style.display = 'none';
        }
    });

    document.getElementById('resultado').style.display = 'none';
};

function correcta() {
    correctas++;
    pasarASiguiente();
}

function incorrecta() {
    incorrectas++;
    pasarASiguiente();
}

function pasarASiguiente() {
    document.getElementById(secciones[actual]).style.display = 'none';
    actual++;

    if (actual < secciones.length) {
        document.getElementById(secciones[actual]).style.display = 'block';
    } else {
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    const resultado = document.getElementById('resultado');
    const puntaje = document.getElementById('puntaje');
    puntaje.textContent = `Respuestas correctas: ${correctas} de ${secciones.length}`;
    resultado.style.display = 'block';
}