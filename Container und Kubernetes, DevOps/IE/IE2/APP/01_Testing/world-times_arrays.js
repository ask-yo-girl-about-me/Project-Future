function getOption() {
    let selectElement;
    selectElement = document.querySelector('#dropdown');
    let output; 
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
    console.log(output);
    timecalculator(output);
    return output;
}

function timecalculator(output) {
    
    let countrys = ["swiss", "newyork", "hongkong", "berlin", "tokyo", "moscow", "sidney"];
    let time = ["hour", "minute", "seconds", "dayname", "daymonth", "month", "year"];
    let timedifference = [+0, +2, +7, +8, +10, +-10];
    let weekdays = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

    let swisstime = new Date();
    let hour = swisstime.getHours();
    let minute = swisstime.getMinutes();
    let seconds = swisstime.getSeconds();
    let dayname     = swisstime.getDay();
    let daymonth = swisstime.getDate();
    let Month   = swisstime.getMonth();
    let Year    = swisstime.getFullYear();

    if ( output == "swiss") {
        
    }

    if (output == "newyork") {

    }


}


x = "Time: " + hour + ":" + minute + ":" + seconds + " Date: " + dayname + ":" + daymonth + ":" + month + ":" + year;
document.getElementById("time").innerHTML = x;
document.body.style.backgroundColor = "white";


// Name
// Zeit
// Tag
// Unterschied


// New York zu Schweiz  -6h
// Hong Kong zu Schweiz +7h
// Berlin zu Schweiz    +0h
// Tokyo zu Schweiz     +8h
// Moscow zu Schweiz    +2h
// Sidney zu Schweiz    +10h

