// Title: 811_SubDomainVisitCount
// LeetCode ID:
// Difficulty: Med
// Tags:
// Date: 2025-08-22
// Link: https://leetcode.com/problems//

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let myMap = new Map();

  for (let domain of cpdomains) {
    let [count, subDomain] = domain.split(" ");
    let parts = subDomain.split(".");
    let subs = [];
    for (let i = parts.length - 1; i >= 0; i--) {
      subs.push(parts.slice(i).join("."));
    }
    for (let i = 0; i < subs.length; i++) {
      if (myMap.has(subs[i])) {
        let value = myMap.get(subs[i]);
        myMap.set(subs[i], value + parseInt(count));
      } else {
        myMap.set(subs[i], parseInt(count));
      }
    }
  }

  let result = [];

  for (let key of myMap.keys()) {
    let count = myMap.get(key);
    result.push(`${count} ${key}`);
  }

  return result;
};
