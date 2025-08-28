// Title: -
// LeetCode ID: 2512
// Difficulty:
// Tags:
// Date: 2025-08-28
// Link: https://leetcode.com/problems//

var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  let PSF = new Set(positive_feedback);
  let NF = new Set(negative_feedback);

  let scores = [];

  for (let i = 0; i < report.length; i++) {
    let words = report[i].toLowerCase().split(" ");
    let score = 0;

    for (let word of words) {
      if (PSF.has(word)) score += 3;
      else if (NF.has(word)) score -= 1;
    }

    scores.push([student_id[i], score]);
  }

  // Sort by score DESC, then ID ASC
  //This is a nice trick to have instead of building a maxHeap here!
  scores.sort((a, b) => {
    if (b[1] === a[1]) return a[0] - b[0];
    return b[1] - a[1];
  });

  return scores.slice(0, k).map((x) => x[0]);
};
