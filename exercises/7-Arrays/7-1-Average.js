"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let AmountNumbers = 1000
Setup();

function Setup() {
    let Numbers = [];
    for (let i = 0; i < AmountNumbers; i++) {
        Numbers[i] = Utils.randomNumber(0,100);
    }

    console.log(calculateAverage(Numbers));
}

function calculateAverage(listofnumbers) {
let sum = 0;
for (let i = 0; i < listofnumbers.length; i++) {
    sum += listofnumbers[i];  
}

return sum / listofnumbers.length;
}