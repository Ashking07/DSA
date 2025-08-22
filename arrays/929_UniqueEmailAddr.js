// Title: 929_UniqueEmailAddr
// LeetCode ID:
// Difficulty: Easy
// Tags:
// Date: 2025-08-22
// Link: https://leetcode.com/problems//

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const emailHash = new Map();

  for (let email of emails) {
    let [local, domain] = email.split("@");

    // normalize local part
    if (local.includes("+")) {
      local = local.substring(0, local.indexOf("+"));
    }
    local = local.replace(/\./g, "");

    // insert into map
    if (!emailHash.has(domain)) {
      emailHash.set(domain, new Set());
    }
    emailHash.get(domain).add(local);
  }

  let numberOfDiffAddr = 0;
  for (let key of emailHash.keys()) {
    numberOfDiffAddr += emailHash.get(key).size;
  }

  return numberOfDiffAddr;
};
