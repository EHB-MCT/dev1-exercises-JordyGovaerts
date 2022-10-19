"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawRectangles

function drawRectangles() {
    context.beginPath();
    context.rect(150,150,250,250);
    context.stroke();
}