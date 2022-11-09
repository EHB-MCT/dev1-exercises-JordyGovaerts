"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawCircle();

function drawCircle(){
    let step = width/ 10
    for (let i = 0; i < 10; i++) {
        Utils.strokeEllipse(0,0,width / 10);
        
    }
}