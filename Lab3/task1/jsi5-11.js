"use strict";

function sumInput() {
    let nums = [];
    while (true) {
      let val = prompt("A number please?", 0);
      if (val === "" || val === null || !isFinite(val)) break;
      nums.push(+val);
    }
    let sum = 0;
    for (let number of nums) {
      sum += number;
    }
    return sum;
}