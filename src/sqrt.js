"use strict"
function mySqrt(x) {
  let mid = x / 2.0;
  let last;

  do {
    last = mid;
    mid = (mid + x / mid) / 2;
  } while (Math.abs(last - mid) > 0.1);

  return Math.floor(mid);
}

module.exports = mySqrt;