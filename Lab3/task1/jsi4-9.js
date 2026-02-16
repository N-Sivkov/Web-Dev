"use strict";

function Accumulator(value) {
    this.value = value;

    this.read = function() {
        this.value += +prompt("Enter the value to be added", 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);