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

    let country = output;
    let swisstime;
    let hour;
    let minute;
    let seconds;
    let x;

    if (country == "swiss") {
        console.log("swiss");
        swisstime = new Date();
        hour = swisstime.getHours();
        minute = swisstime.getMinutes();
        seconds = swisstime.getSeconds();
        dayname     = swisstime.getDay();
        daymonth = swisstime.getDate();
        Month   = swisstime.getMonth();
        Year    = swisstime.getFullYear();

        x = "Time: " + hour + ":" + minute + ":" + seconds + " Date: " + dayname + ":" + daymonth + ":" + Month + ":" + Year;

        document.getElementById("time").innerHTML = x;
        document.body.style.backgroundColor = "white";

        //setInterval(timecalculator, 1000);
    }

    if (country == "newyork"){
        console.log("newyork");
        swisstime = new Date();
        hour = swisstime.getHours();
        hour = +hour + -6;
        minute = swisstime.getMinutes();
        seconds = swisstime.getSeconds();

        x = hour + ":" + minute + ":" + seconds;

        document.getElementById("time").innerHTML = x;
        document.body.style.backgroundColor = "white";

        //setInterval(timecalculator(), 1000);
    }

}