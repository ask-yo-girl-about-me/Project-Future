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

function filloption() {
    let select = document.getElementById("dropdown");
    for (let i = 0; i < countrys.length; i++) {
        let opt = countrys[i];
        let el = document.createElement("option");
        el.textContent = opt.name;
        select.appendChild(el);
    }
}

function getOption() {
    let selectElement;
    selectElement = document.querySelector("#dropdown");
    let opt;
    opt = selectElement.value;
    document.querySelector('.output').textContent = opt;
    //setInterval(timecalculator(opt), 500);
    timecalculator(opt);
}

function timecalculator(opt) {
    let i;

    if (opt == "Swiss") {
        i = countrys[0];
    }
    if (opt == "New York") {
        countrys[1];
        i = countrys[1];
    }
    if (opt == "Hong Kong") {
        countrys[2];
        i = countrys[2];
    }
    if (opt == "Berlin") {
        countrys[3];
        i = countrys[3];
    }
    if (opt == "Tokyo") {
        countrys[4];
        i = countrys[4];
    }
    if (opt == "Moscow") {
        countrys[5];
        i = countrys[5];
    }
    if (opt == "Sidney") {
        countrys[6];
        i = countrys[6];
    }

    let td = i.timedifference;

    let currenttime = new Date();
    // Falls man Testen will, ob das if hour < 0 funktioniert, tauscht man das "formatTime(currenttime.getHours()" mit einer Zahl kleiner als 6 ein.
    let hour = formatTime(currenttime.getHours() + td);
    let minute = formatTime(currenttime.getMinutes());
    let seconds = formatTime(currenttime.getSeconds());
    let daymonth = formatTime(currenttime.getDate());
    let Month = formatTime(currenttime.getMonth() + 1);
    let Year = formatTime(currenttime.getFullYear());

    if (hour > 24) {;
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

function formatTime(result) {
    if (result < 10) {
        return '0' + result;
    }
    return result;
}

//