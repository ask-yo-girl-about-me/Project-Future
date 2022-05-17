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
    let hour = 23;

    if (hour > 24) {
        console.log("Mehr als 24");
    }

    let minute = formatTime(currenttime.getMinutes());
    let seconds = formatTime(currenttime.getSeconds());
    let daymonth = formatTime(currenttime.getDate());
    let Month = formatTime(currenttime.getMonth() + 1);
    let Year = formatTime(currenttime.getFullYear());

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