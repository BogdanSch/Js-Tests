"use strict";
const sentence = "JavaScript is a powerful and versatile programming language.";

const wordsWithSameLetter = sentence
  .toLowerCase()
  .replace(/[^\w\s]/g, "")
  .split(/\s+/)
  .filter((word) => word.length > 0)
  .reduce((result, word) => {
    const firstLetter = word[0];
    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }
    result[firstLetter].push(word);
    return result;
  }, {});

// Output words starting with the same letter in lowercase
for (const letter in wordsWithSameLetter) {
  const words = wordsWithSameLetter[letter].join(", ");
  console.log(`${letter}: ${words}`);
}
