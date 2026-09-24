const input = document.getElementById("input");
const output = document.getElementById("output");
const tokenButton = document.getElementById("token");
const stopwordButton = document.getElementById("removestw");
const posButton = document.getElementById("POS");
const stemmingButton = document.getElementById("stemming");
const lemmatizeButton = document.getElementById("lemmatize");
const nerButton = document.getElementById("ner");
tokenButton.addEventListener("click", function () {
    let text = input.value;
    if (text.trim() === "") {
        output.value = "Please enter some text.";
        return;
    }
    let tokens = text.split(/\s+/);
    output.value = tokens.join("\n");
});
stopwordButton.addEventListener("click", function () {
    let text = input.value;
    if (text.trim() === "") {
        output.value = "Please enter some text.";
        return;
    }
    let words = text.split(/\s+/);
    let stopWords = [
        "a", "an", "the",
        "is", "am", "are",
        "was", "were",
        "in", "on", "at",
        "to", "for",
        "of", "and",
        "or", "but",
        "with", "this",
        "that", "it"
    ];
    let result = [];
    for (let word of words) {
        if (!stopWords.includes(word.toLowerCase())) {
            result.push(word);
        }
    }
    output.value = result.join(" ");
});
posButton.addEventListener("click", function () {
    let text = input.value;
    if (text.trim() === "") {
        output.value = "Please enter some text.";
        return;
    }
    let words = text.split(/\s+/);
    let result = [];
    for (let word of words) {
        let tag = "WORD";
        if (word.toLowerCase() === "is" ||
            word.toLowerCase() === "am" ||
            word.toLowerCase() === "are") {

            tag = "VERB";
        }
        else if (word.toLowerCase() === "the" ||
                 word.toLowerCase() === "a" ||
                 word.toLowerCase() === "an") {

            tag = "DETERMINER";
        }
        else if (word.toLowerCase() === "and" ||
                 word.toLowerCase() === "or" ||
                 word.toLowerCase() === "but") {
            tag = "CONJUNCTION";
        }
        result.push(word + " : " + tag);
    }
    output.value = result.join("\n");
});
stemmingButton.addEventListener("click", function () {
    let text = input.value;
    if (text.trim() === "") {
        output.value = "Please enter some text.";
        return;
    }
    let words = text.split(/\s+/);
    let result = [];
    for (let word of words) {
        let stem = word;
        if (word.endsWith("ing")) {
            stem = word.slice(0, -3);
        }
        else if (word.endsWith("ed")) {
            stem = word.slice(0, -2);
        }
        else if (word.endsWith("ly")) {
            stem = word.slice(0, -2);
        }
        else if (word.endsWith("s")) {
            stem = word.slice(0, -1);
        }
        result.push(word + " : " + stem);
    }
    output.value = result.join("\n");
});
lemmatizeButton.addEventListener("click", function () {
    let text = input.value;
    if (text.trim() === "") {
        output.value = "Please enter some text.";
        return;
    }
    let words = text.split(/\s+/);
    let result = [];
    for (let word of words) {
        let lemma = word;
        if (word.toLowerCase() === "is") {
            lemma = "be";
        }
        else if (word.toLowerCase() === "are") {
            lemma = "be";
        }
        else if (word.toLowerCase() === "was") {
            lemma = "be";
        }
        else if (word.toLowerCase() === "were") {
            lemma = "be";
        }
        else if (word.toLowerCase() === "studying") {
            lemma = "study";
        }
        else if (word.toLowerCase() === "running") {
            lemma = "run";
        }
        result.push(word + " : " + lemma);
    }
    output.value = result.join("\n");
});
nerButton.addEventListener("click", function () {
    let text = input.value;
    if (text.trim() === "") {
        output.value = "Please enter some text.";
        return;
    }
    let words = text.split(/\s+/);
    let result = [];
    for (let word of words) {
        if (/^[A-Z][a-z]+$/.test(word)) {
            result.push(word + " : ENTITY");
        }
    }
    if (result.length === 0) {
        output.value = "No named entities found.";
    }
    else {
        output.value = result.join("\n");
    }
});