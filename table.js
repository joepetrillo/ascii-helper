const table = document.querySelector('table');

const desc = {  0: "NULL",
                1: "START OF HEADING",
                2: "START OF TEXT",
                3: "END OF TEXT",
                4: "END OF TRANSMISSION",
                5: "ENQUIRY",
                6: "ACKNOWLEDGE",
                7: "BELL",
                8: "BACKSPACE",
                9: "HORIZONTAL TAB",
                10: "LINE FEED",
                11: "VERTICAL TAB",
                12: "FORM FEED",
                13: "CARRIAGE RETURN",
                14: "SHIFT OUT",
                15: "SHIFT IN",
                16: "DATA LINK ESCAPE",
                17: "DEVICE CONTROL 1",
                18: "DEVICE CONTROL 2",
                19: "DEVICE CONTROL 3",
                20: "DEVICE CONTROL 4",
                21: "NEGATIVE ACKNOWLEDGE",
                22: "SYNCHRONUS IDLE",
                23: "END OF TRANS BLOCK",
                24: "CANCEL",
                25: "END OF MEDIUM",
                26: "SUBSTITUTE",
                27: "ESCAPE",
                28: "FILE SEPARATOR",
                29: "GROUP SEPARATOR",
                30: "RECORD SEPARATOR",
                31: "UNIT SEPERATOR",
                32: "SPACE",
                127: "DEL"
             };

for (let i = 0; i < 128; i++) {
    let row = document.createElement('tr');

    let entry1 = document.createElement('td');
    let entry2 = document.createElement('td');
    let entry3 = document.createElement('td');

    entry1.innerHTML = i;
    entry2.innerHTML = i.toString(16);

    if (desc[i]) {
        entry3.innerHTML = `[${desc[i]}]`
    }
    else {
        entry3.innerHTML = String.fromCharCode(i);
    }

    row.appendChild(entry1);
    row.appendChild(entry2);
    row.appendChild(entry3);

    table.appendChild(row);
}