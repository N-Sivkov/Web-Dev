"use strict";

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] == "number") obj[key] *= 2;
    }
}