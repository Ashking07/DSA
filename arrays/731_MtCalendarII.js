// Title: 731_MyCalendarII
// LeetCode ID: 731
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

var MyCalendarTwo = function () {
  this.singleBooked = [];
  this.doubleBooked = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (startTime, endTime) {
  for (let i = 0; i < this.doubleBooked.length; i++) {
    let [ds, de] = this.doubleBooked[i];
    if (startTime < de && endTime > ds) {
      return false; // triple booking
    }
  }

  for (let i = 0; i < this.singleBooked.length; i++) {
    let [ss, se] = this.singleBooked[i];
    if (startTime < se && endTime > ss) {
      this.doubleBooked.push([Math.max(startTime, ss), Math.min(endTime, se)]);
    }
  }

  this.singleBooked.push([startTime, endTime]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
