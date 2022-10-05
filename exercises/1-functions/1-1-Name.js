"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "red";
    context.moveTo(115, 200);
    context.lineTo(115, 275);
    context.lineTo(80, 275);
    context.lineTo(80, 250);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    context.moveTo(175, 200);
    context.lineTo(175, 275);
    context.lineTo(135, 275);
    context.lineTo(135, 200);
    context.lineTo(175, 200);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "green";
    context.moveTo(205, 275);
    context.lineTo(205, 200);
    context.lineTo(240, 220);
    context.lineTo(205, 240);
    context.lineTo(240, 275);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "yellow";
    context.moveTo(255, 200);
    context.lineTo(255, 275);
    context.lineTo(285, 265);
    context.lineTo(285, 215);
    context.lineTo(255, 200);
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "orange";
    context.moveTo(305, 200);
    context.lineTo(330, 235);
    context.lineTo(350, 200);
    context.lineTo(305, 275);
    context.stroke();
}