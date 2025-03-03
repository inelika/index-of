const paragraph = "the quiek brown fox jumps over the lazy dog. If the dog barked, was a really lazy?";
const searchTerm = "dog";
function findOccurrences(text, word, startIndex = 0, indices = []) {
  const lowerText = text.toLowerCase();
  const lowerWord = word.toLowerCase();

  let index = lowerText.indexOf(lowerWord, startIndex);
  if (index !== -1) {
      indices.push(index);
      return findOccurrences(text, word, index + word.length, indices);
  }
  return indices;
}
const occurrences = findOccurrences(paragraph, searchTerm);
console.log(occurrences); 
