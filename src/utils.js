// Your code here
// src/utils.js

export function pointsForWord(word) {
  let points = 0;

  for (const char of word) {
    // Check if the character is a vowel (case-insensitive)
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }

  return points;
}
