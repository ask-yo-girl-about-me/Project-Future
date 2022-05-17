let display = document.getElementById('clock');

// Hier ist die Funktion welche die Zeit Formatiert, dies bedeutet, wenn die Zahl unter 10 ist, setzt er ein 0 davor.
function formatTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}

// Hier wird die Zeit aus dem aktuellen Browser ausgelesen, formatiert und ans HTML File übergeben.d
function updateTime() {
    let date = new Date();


    let hour = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    let day = formatTime(date.getDate());
    let month = formatTime(date.getMonth() + 1);
    let year = formatTime(date.getFullYear());

    display.innerText = `${hour} : ${minutes} : ${seconds} / ${day} . ${month} . ${year};`
}

setInterval(updateTime, 1000);