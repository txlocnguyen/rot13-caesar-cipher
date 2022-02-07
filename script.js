function rot13(str) {
    const before = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const after = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return str.replace(/[a-z]/ig, letter => after[before.indexOf(letter)]);
}