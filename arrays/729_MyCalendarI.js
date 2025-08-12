// Title: 729_MyCalendarI
// LeetCode ID: 729
// Difficulty: Med
// Tags:
// Date: 2025-08-12
// Link: https://leetcode.com/problems//

var MyCalendar = function () {
  this.arr = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function (startTime, endTime) {
  for (let i = 0; i < this.arr.length; i++) {
    let eventStart = this.arr[i][0];
    let eventEnd = this.arr[i][1];
    if (startTime < eventEnd && endTime > eventStart) {
      return false;
    }
  }
  this.arr.push([startTime, endTime]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
