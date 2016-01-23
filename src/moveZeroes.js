/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var length = nums.length;
  for (var index = 0; index < length; ) {
    var num = nums[index];
    if (num === 0 && index !== length - 1) {
      for (var i = index + 1; i < length; i++) {
        nums[i - 1] = nums[i];
        nums[i] = 0;
      }
      length--;
    } else {
      index++;
    }
  }
};

module.exports = moveZeroes;