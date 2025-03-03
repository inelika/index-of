const paragraph = "the quiek brown fox jumps over the lazy dog. If the dog barked, was a really lazy?";
const searchTerm = "dog";
function findOccurrences(text, word, startIndex = 0) {
  let index = text.indexOf(word, startIndex);
  if (index !== -1) {
      console.log(`Find: "${word}" at index ${index}`);
      findOccurrences(text, word, index + word.length); 
  }
}
findOccurrences(paragraph, searchTerm);
