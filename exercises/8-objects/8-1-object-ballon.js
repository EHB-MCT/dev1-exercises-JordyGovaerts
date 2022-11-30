"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let Balloons = [];

Setup();
Update();

function Setup() {
    for (let i = 0; i < 50; i++) {
        let Balloon = {
            x: Math.random() * width,
            y: height + Utils.randomNumber(50,200) ,
            speed: Math.random()*5,
            radiusx: 40,
            radiusy: 50,
            color: Utils.hsl(Utils.randomNumber(0,65),100,50)
        };
        Balloons.push(Balloon);
    }
    console.log(Balloons);
}

function Update() {
context.fillStyle = "white";
context.rect(0,0,width,height);
context.fillRect(0,0,width,height);
for (let i = 0; i < Balloons.length; i++) {
    let Balloon = Balloons[i];
    Balloon.x += Utils.randomNumber (-2,2);
    Balloon.y -= Balloon.speed;
    
    drawBallon(Balloon);
}
requestAnimationFrame(Update);
}

function drawBallon(Balloon){
    Utils.drawBallon(Balloon.x,Balloon.y,Balloon.radiusx,Balloon.radiusy,Balloon.color);

    
}
