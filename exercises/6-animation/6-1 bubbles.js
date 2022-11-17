"use select";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;



window.onmousemove = move;

/**
* @param {MouseEvent} eventData
*/

function move(eventData){
    let e = eventData;
  let mouseX = e.pageX;
  let mouseY = e.pageY; 
   console.log('moved')

   Utils.drawRectangle(0,0,width,height);
   
   context.lineWidth = 5;
   context.strokeStyle = "red";
   Utils.drawLine(mouseX  , 0, mouseX, height);
   Utils.drawLine(0, mouseY , width, mouseY);
}
