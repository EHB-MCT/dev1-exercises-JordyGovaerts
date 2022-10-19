"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i<= 6) {
        let x = 75;
        let y = x;
        let step = 50
        Utils.drawLine(75, y+ ( i * step), 325, y+ (i * step));
        Utils.drawLine(x+ ( i * step), 75, x+ (i * step), 325);
        i = i + 1 ;
    }
}