"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizontallines = 60;
let verticallines = 30;

let Width = 600;
let height = 300;

drawBox();
drawLineh();
drawLinev();

function drawBox() {
    Utils.drawBox(0,0,600,300);
}

function drawLineh() {
    let step = Width / horizontallines;
    for( let i = 0 ; i  <=   horizontallines; i++ ) {
        Utils.drawLine( 0 + (step * i ) , 0, Width - ( step * i ) , height);
    }
}

function drawLinev() {
    let step = height / verticallines;
    for( let i = 0; i <= verticallines; i++) {
        Utils.drawLine(0 , 0 + ( step * i), Width, height - ( step * i))
    }
}
