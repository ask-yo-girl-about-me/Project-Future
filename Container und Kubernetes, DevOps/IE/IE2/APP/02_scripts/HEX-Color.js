// In dieser Funktion wird die random HEX Nummer erstellt und ins HTML File übergeben.
function changeColor() {
    let hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    let hexcode = "";

    for (let i = 0; i < 6; i++) {
        let random_index = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[random_index];
    }

    document.getElementById("hex-code").innerHTML = hexcode;
    document.body.style.backgroundColor = "#" + hexcode;
}

// In dieser Funktion setzen wir den Background auf weiss
function setbackgroundtowhite() {
    let hexcode = "00000";
    document.getElementById("hex-code").innerHTML = hexcode;
    document.body.style.backgroundColor = "white";
}