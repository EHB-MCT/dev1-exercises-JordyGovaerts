"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = 75;
let height = 40;

drawBox();

function drawBox(){
    let step = 80;
    let start = 20;
    for (let i = 0; i < 6 ; i++) {
        Utils.drawBox(50 + (step * i), start,width,height); 
    }
    for (let i = 0; i < 6 ; i++) {
        Utils.drawBox(100 + (step * i), start * 3.25,width,height); 
    }
    for (let i = 0; i < 6 ; i++) {
        Utils.drawBox(50 + (step * i), start * 5.5,width,height); 
    }
    for (let i = 0; i < 6 ; i++) {
        Utils.drawBox(100 + (step * i), start * 7.75,width,height); 
    }
    for (let i = 0; i < 6 ; i++) {
        Utils.drawBox(50 + (step * i), start * 10,width,height); 
    }
    for (let i = 0; i < 6 ; i++) {
        Utils.drawBox(100 + (step * i), start * 12.25,width,height); 
    }
}