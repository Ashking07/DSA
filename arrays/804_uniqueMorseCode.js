// Title: 804_uniqueMorseCode
// LeetCode ID: 804
// Difficulty: Easy
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morseCodeMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  let myMap = new Map();

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let concatination = "";
    for (let j = 0; j < word.length; j++) {
      concatination += morseCodeMap[word[j]];
    }
    myMap.set(word, concatination);
  }

  let mySet = new Set();

  for (const [key, value] of myMap.entries()) {
    mySet.add(value);
  }

  return mySet.size;
};
