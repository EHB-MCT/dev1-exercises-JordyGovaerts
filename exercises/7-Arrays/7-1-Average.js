"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let Numbers = [];
let AmountNumbers = 1000
Setup();

function Setup() {
    for (let i = 0; i < AmountNumbers; i++) {
        Numbers[i] = Utils.randomNumber(0,100);
    }
    console.log(Numbers);
    calculateAverage();
}

function calculateAverage(List) {
let som = 0
for (let i = 0; i < List.length; i++) {
    let som = List.length(i);
    
    
}
}