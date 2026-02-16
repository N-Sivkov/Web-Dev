"use strict";

let calculator = {
    read() {
        this.a = +prompt("Enter the first number", 0);
        this.b = +prompt("Enter the second number", 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );