"use strict";

import context from "./context.js";

export function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

export function strokeEllipse(x1,y1,radius) {
    context.beginPath();
    context.ellipse(x1,y1,radius,radius,0,0, 180);
    context.stroke();
}

