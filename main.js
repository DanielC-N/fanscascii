const asciiLetters = require("./letters.js");

function toFancyAscii(word) {
    word = word.toUpperCase();
    const terminalWidth = process.stdout.columns || 80;

    const letterWidth = asciiLetters["A"][0].length + 2;
    let maxLettersPerRow = Math.floor(terminalWidth / letterWidth);

    let result = ["", "", "", "", "", ""];
    let currentRowLetters = 0;

    for (const letter of word) {
        if (!asciiLetters[letter]) continue;

        if (currentRowLetters >= maxLettersPerRow) {
            console.log(result.join("\n"));
            result = ["", "", "", "", "", ""];
            currentRowLetters = 0;
        }

        result = result.map((line, index) => line + asciiLetters[letter][index] + "");
        currentRowLetters++;
    }

    console.log(result.join("\n"));
}

module.exports = { toFancyAscii };

if (require.main === module) {
    console.log(toFancyAscii(process.argv.slice(2).join(" ")));
}
