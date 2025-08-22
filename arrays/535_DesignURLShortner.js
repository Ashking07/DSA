// Title: _DesignURLShortner
// LeetCode ID: 535
// Difficulty: Med
// Tags:
// Date: 2025-08-22
// Link: https://leetcode.com/problems//

// global map to store hash -> url
const map = new Map();
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateHash() {
  let h = "";
  for (let i = 0; i < 6; i++) {
    h += chars[Math.floor(Math.random() * chars.length)];
  }
  return h;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  let hash = generateHash();

  while (map.has(hash)) {
    hash = generateHash();
  }

  map.set(hash, longUrl);
  return "http://tinyurl.com/" + hash;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  let hash = shortUrl.split("/").pop();
  return map.get(hash);
};
