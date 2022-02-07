function rot13(str) {
    const before = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const after = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return str.replace(/[a-z]/ig, letter => after[before.indexOf(letter)]);
}

function printAnswer(yourStr, answer) {
    let result = document.getElementById("result");
    result.innerHTML = `With ROT13, <span style="color:green;">${yourStr}</span> becomes <span style="color:red;">${answer}</span>`
}

document.addEventListener('DOMContentLoaded', (event) => {
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");
    submit.addEventListener("click", (event) => {
        event.preventDefault();
        if (input.value === "") {
            alert("You did not enter any text. Please try again.");
        } else {
            printAnswer(input.value, rot13(input.value));
            input.value = "";
        }
    })
})