const asciiLetters = require("./letters.js");

function toFancyAscii(word) {
    word = word.toUpperCase();
    let result = ["", "", "", "", "", ""];
    for (const letter of word) {
        if (asciiLetters[letter]) {
            result = result.map((line, index) => line + asciiLetters[letter][index] + "");
        }
    }
    return result.join("\n");
}

module.exports = { toFancyAscii };

if (require.main === module) {
    console.log(toFancyAscii(process.argv.slice(2).join(" ")));
}
