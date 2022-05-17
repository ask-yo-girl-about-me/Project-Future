let h1 = document.getElementsByTagName('h1')[0];
let sec = 0;
let min = 0;
let hrs = 0;
let t;

// Im dieser Funktion wird das heraufzählen der Sekunden definiert
function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}

// Hier wird fügen wir die Zeit dem HTML File zu
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) +
        ":" + (min > 9 ? min : "0" + min) +
        ":" + (sec > 9 ? sec : "0" + sec);
    start();
}

// Hier starten wir den Timer mit einem Intervall von 1000
function start() {
    t = setTimeout(add, 1000);
}

// Hier Stopen wir die Zeit bei der Sekunde wo Sie ist
function stop() {
    clearTimeout(t);
}

// Hier setzten wir die Zeit Variablen auf 0 um die Zeit zu Reseten
function reset() {
    h1.textContent = "00:00:00";
    sec = 0;
    min = 0;
    hrs = 0;
}