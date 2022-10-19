"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}



function drawLines() {
    let i = 0;
    let x1 = 75
    let x2 = 325
    let y1 = 75
    let y2 = 75
    let space = 24
    while (i <= 10) {
        //This drawLine function does not exist yet!
        //Add it to the utils script:
        //The function draws a line between 2 points
        //And has the following parameters: x1, y1, x2, y2
        Utils.drawLine(x1, y1+ ( i * space)  , x2, y2+ ( i * space) );
        i = i+1;
    }
}