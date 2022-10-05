"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawrectangles();

function drawrectangles() {
    
    context.beginPath();
    context.strokeStyle = "red";
    context.rect(50,50,150,150);
    context.rect(200,200,150,150);
    context.rect(275,70,55,55);
    context.rect(70,275,55,55);
    context.stroke();

    context.beginPath();
    context.fillStyle = "black";
    context.strokeStyle = "red";
    context.rect(125,125 ,150,150);
    context.fill();
    context.stroke();
    
    context.beginPath();
    context.fillStyle = "black";
    context.rect(330,50,20,20);
    context.rect(50,330,20,20);
    context.fill();
    
}