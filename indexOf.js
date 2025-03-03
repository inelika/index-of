const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
const searchTerm = "dog";

function findOccurrences(text, word, startIndex = 0) {
    let index = text.toLowerCase().indexOf(word.toLowerCase(), startIndex);
    if (index !== -1) {
        console.log(⁠ Found: "${word}" at index ${index} ⁠);
        findOccurrences(text, word, index + word.length);
    }
}

findOccurrences(paragraph, searchTerm);
