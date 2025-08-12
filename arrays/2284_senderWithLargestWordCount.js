// Title: 2284_senderWithLargestWordCount
// LeetCode ID: 2284
// Difficulty: Med
// Tags:Array
// Hash Table
// String
// Counting
// Biweekly Contest 79
// Date: 2025-08-12
// Link: https://leetcode.com/problems/sender-with-largest-word-count/description/

var largestWordCount = function (messages, senders) {
  const wordCounts = new Map();

  for (let i = 0; i < messages.length; i++) {
    const sender = senders[i];
    const wordCount = messages[i].split(" ").length;

    wordCounts.set(sender, (wordCounts.get(sender) || 0) + wordCount);
  }

  let maxCount = 0;
  let resultSender = "";

  for (let [sender, count] of wordCounts.entries()) {
    if (
      count > maxCount ||
      (count === maxCount && sender > resultSender) // lexicographically larger name
    ) {
      maxCount = count;
      resultSender = sender;
    }
  }

  return resultSender;
};
