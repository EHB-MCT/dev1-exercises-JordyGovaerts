"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawSunBeams();
}

function drawSunBeams() {
    let i = 0;
    let step = 10;
    while (i <= 30 ) {
        Utils.drawLine(50, 50, 350,50 + (step * i) );
        Utils.drawLine(50, 50, 50 + (step * i),350 );
        i = i + 1;
    }
}