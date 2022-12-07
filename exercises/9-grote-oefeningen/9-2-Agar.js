"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;
let Balls = [];

/**
* @param {MouseEvent} eventData
*/

Setup();
Update();

function Setup() {
   for (let i = 0; i < 20; i++) {
    let ball = {
        x: Utils.randomNumber(0,width),
        y: Utils.randomNumber(0,height),
        size: Utils.randomNumber(20,50),
        color: Utils.hsl(Utils.randomNumber(0,360),100,50),
        speedx: Utils.randomNumber( -4,4),
        speedy: Utils.randomNumber( -4,4),
    };
    Balls.push(ball);
}
console.log(Balls);
}

function Update() {

    context.fillStyle ="white";
    context.fillRect(0,0,width,height);
    for (let i = 0; i < Balls.length; i++) {
        let ball = Balls[i];
        
        Utils.drawBall(ball.x,ball.y,ball.size,ball.color);
        if (ball.x > width - ball.size || ball.x < ball.size) {
            ball.speedx *= -1;

        } else if ( ball.x <ball.size) {
            ball.speedx *= 1;
        }

        if (ball.y > height - ball.size || ball.y < ball.size) {
            ball.speedy *= -1;

        } else if ( ball.x <ball.size) {
            ball.speedy *= 1;
        }

        ball.x += ball.speedx;
        ball.y += ball.speedy;


        
        move(eventData);
    }
    requestAnimationFrame(Update);
    }

    function move(eventData){
        let e = eventData;
      let mouseX = e.pageX;
      let mouseY = e.pageY; 
       console.log('moved')
       context.fillStyle = "red";
       Utils.drawBall(mouseX.x,mouseY.y,5);
    }