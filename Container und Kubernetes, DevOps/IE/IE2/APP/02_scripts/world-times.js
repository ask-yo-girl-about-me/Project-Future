// Array mit Optionen für DropDown Menü
countrys = [
    { name: "Swiss", timedifference: 0 },
    { name: "New York", timedifference: -6 },
    { name: "Hong Kong", timedifference: +6 },
    { name: "Berlin", timedifference: 0 },
    { name: "Tokyo", timedifference: +8 },
    { name: "Moscow", timedifference: +2 },
    { name: "Sidney", timedifference: +10 },
];

filloption();

// Hier wird das Dropdwon Menü im "Worl_Times.html" File abgefüllt
function filloption() {
    let select = document.getElementById("dropdown");
    for (let i = 0; i < countrys.length; i++) {
        let opt = countrys[i];
        let el = document.createElement("option");
        el.textContent = opt.name;
        select.appendChild(el);
    }
}

// In dieser Funktion wird abgefangen, wass der User auswählt vom DropDown Menü
function getOption() {
    let selectElement;
    selectElement = document.querySelector("#dropdown");
    let opt;
    opt = selectElement.value;
    document.querySelector('.output').textContent = opt;
    let arrayposition = getarraynumber(opt);
    timecalculator(arrayposition);
}

// Hier wird die oben definierte Option ausgelesen und kontrolliert, in welcher Array Position diese ist
function getarraynumber(opt) {
    for (let i of countrys) {
        if (i.name == opt) {
            index = countrys.indexOf(i);
            return index;
        }
    }
}

// Hier wird die Zeit aus dem aktuellen Browser ausgelesen und mit diesem weitergearbeitet. Zusätzlich wird die Zeit mit der Funktion formatTime formatiert und mit der Variabel td die Zeitzone bsw. Zeitdifferez ausgerechnet. Am Ende wird dies noch ins HTML File übergeben.
function timecalculator(arrayposition) {

    let td = countrys[arrayposition].timedifference;

    let currenttime = new Date();
    // Falls man Testen will, ob das if hour < 0 funktioniert, tauscht man das "formatTime(currenttime.getHours()" mit einer Zahl kleiner als 6 ein.
    let hour = formatTime(currenttime.getHours() + td);
    let minute = formatTime(currenttime.getMinutes());
    let seconds = formatTime(currenttime.getSeconds());
    let daymonth = formatTime(currenttime.getDate());
    let Month = formatTime(currenttime.getMonth() + 1);
    let Year = formatTime(currenttime.getFullYear());

    if (hour >= 24) {
        difference = hour - 24;
        hour = formatTime(difference);
        daymonth = formatTime(currenttime.getDate() + 1);
    }

    if (hour < 0) {
        difference = hour + 0;
        hour = 24 + difference;
        daymonth = currenttime.getDate() - 1;
    }

    let result = "Time: " + hour + ":" + minute + ":" + seconds + " Date: " + daymonth + ":" + Month + ":" + Year;

    document.getElementById("time").innerHTML = result;
    return result;
}

// Hier ist die Funktion welche die Zeit Formatiert, dies bedeutet, wenn die Zahl unter 10 ist, setzt er ein 0 davor.
function formatTime(result) {
    if (result < 10) {
        return '0' + result;
    }
    return result;
}