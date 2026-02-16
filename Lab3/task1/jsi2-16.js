"use strict";

let n = prompt ("Enter the n");

for (let i = 2; i < n; i++) {
    let root = Math.trunc(Math.sqrt(i));
    let prime = true;
    if (root >= 2) {
        for (let j = 2; j <= root; j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime) alert(i);
}