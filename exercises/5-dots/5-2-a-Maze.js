"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


drawMaze();


function drawMaze(){
    context.lineWidth = 5;
    for (let j = 0; j < 200; j++) {
    for (let i = 0; i < 200; i++) {
        if ( Math.round(Math.random()) == 1) {
            Utils.drawLine(0 + (10 * i),0+(j*10),10 + ( 10 * i),10+(j*10) );
        } else {
            Utils.drawLine(10 + ( 10 * i),0+(j*10) ,0+ (10 * i),10+(j*10));
        }
      
        
    }
}
}