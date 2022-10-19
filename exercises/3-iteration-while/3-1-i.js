"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawMultipleConcentricCircles();
}

function drawMultipleConcentricCircles() {
    context.lineWidth = 2;
    let i = 0;
    while (i <= 10) {
        let size = i * 15;
        Utils.strokeEllipse(200, 200, size);
        Utils.strokeEllipse(50,50 , size);
        Utils.strokeEllipse(350,50 , size);
        Utils.strokeEllipse(50,350 , size);
        Utils.strokeEllipse(350,350 , size);
        i++;
    }
}