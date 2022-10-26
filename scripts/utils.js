"use strict";

import context from "./context.js";

export function drawLine(x1,y1,x2,y2) {
    context.beginPath();
    context.strokeStyle= "white";
    context.lineWidth = 2;
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

export function strokeEllipse(x1,y1,radius) {
    context.beginPath();
    context.ellipse(x1,y1,radius,radius,0,0, 180);
    context.stroke();
}

export function rgb(r,g,b) {
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

export function drawBox(x,y,width,height) {
    context.beginPath();
    context.fillStyle= "orange";
    context.rect(x,y,width,height);
    context.stroke();
    context.fill();
}

export function strokeBubbles(x1,y1,radius) {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let alpha = Math.random();
    let color = "rgba(" + red + "," + blue + "," + green + "," + alpha + ")"
    context.beginPath();
    context.ellipse(x1,y1,radius,radius,0,0, 180);
    context.fillStyle = color;
    context.fill();
    
}

export function drawBackground(x1,y1,x2,y2) {
    context.beginPath();
    context.rect(x1,y1,x2,y2);
    context.fillStyle = "black";
    context.stroke();
    context.fill();

}