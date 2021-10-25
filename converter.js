let symbol_input = document.querySelector('#symbol-input');

function handleReset() {    
    document.querySelector('#sym_decimal').innerHTML = "";
    document.querySelector('#sym_octal').innerHTML = "";
    document.querySelector('#sym_hex').innerHTML = "";
    document.querySelector('#sym_HTML').innerHTML = "";
}

function handleSymbol(val) {
    document.querySelector('#sym_decimal').innerHTML = val.charCodeAt(0);
    document.querySelector('#sym_octal').innerHTML = val.charCodeAt(0).toString(8);
    document.querySelector('#sym_hex').innerHTML = `0x${val.charCodeAt(0).toString(16)}`;
    document.querySelector('#sym_HTML').innerHTML = `&#38;&#35;${val.charCodeAt(0)};`
} 

symbol_input.addEventListener('input', (e) => {
    if (e.data === null) { // empty input
        handleReset();
    }

    if (e.data !== null) { // symbol was entered
        handleSymbol(symbol_input.value);
    }
});