"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;



drawSides();
drawBlueBalk();
drawRedBalk();

function drawSides() {
    context.beginPath();
    context.fillStyle = "#2c3e50";
    context.rect(0,0,width * 1/3,height);
    context.rect(width * 2/3,0,width * 1/3,height);
    context.stroke();
    context.fill();
}

function drawBlueBalk() {
    context.beginPath();
    context.fillStyle = "#3498db";
    context.rect(0,height* 2/3,width * 1/3,height* 1/3);
    context.rect(width * 2/3,height* 2/3,width * 1/3,height* 1/3);
    context.stroke();
    context.fill();
}

function drawRedBalk() {
    context.beginPath();
    context.fillStyle = "#e74c3c";
    context.rect(0,height* 1/6,width,height* 2/6);
    context.stroke();
    context.fill();
}
