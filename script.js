const html = document.querySelector("html");
const textArea = document.querySelector(".js-areadotexto");
const display = document.querySelector(".display-text-js");
const image = document.querySelector(".aside_imagem").cloneNode(true);
const message = document.querySelector(".aside_mensagem").cloneNode(true);
const checkbox = document.querySelector(".js-checkbox");

textArea.focus();

function displayText(text) {
    display.classList.add("is-show-text");
    display.textContent = text;
}

/*função okay*/
function checkLowerCase() {
    const regex = /^([a-z\s])+$/;
    const lowerCase = regex.test(textArea.value);
    if(lowerCase) {
        encryptText();
    } else {
        alert("Por favor, digite apenas letras minúsculas e sem acento.");
    }
}

function scrollPage(ycoord) {
    window.scroll({top: ycoord, behavior: "smooth"});
}

/*função okay*/
function encrypt(match) {
    const keysOfEncrypt = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat",
    }
    return keysOfEncrypt[match];
}

/*função okay*/
function encryptText() {
    const text = textArea.value;
    if(text != "") {
        const encrypted = text.replace(/[aeiou]/g, encrypt);
        displayText(encrypted);
        scrollPage(html.scrollHeight);
    }
}

/*função okay*/
function descrypt(match) {
    const keysOfDescrypt = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
    }
    return keysOfDescrypt[match];
}

/*função okay*/
function descryptText() {
    const text = textArea.value;
    if(text != "") {
        const descrypted = text.replace(/ai|enter|imes|ober|ufat/g, descrypt); 
        displayText(descrypted);
        scrollPage(html.scrollHeight);
    }
}


function copyText() {
    const image = document.querySelector(".aside_imagem");
    if(!display.contains(image)) {
        navigator.clipboard.writeText(display.textContent).then(() => {
            alert("Texto cópiado para a área de transferência");
            pasteElement();
            pasteText();
            scrollPage(html.scrollHeight - html.scrollHeight);
        })
    }
}