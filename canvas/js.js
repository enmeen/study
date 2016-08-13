var deviceHeight = document.body.clientHeight;
var deviceWidth = document.body.clientWidth;
var canvas = document.getElementById('canvas');

canvas.style.width = deviceWidth + 'px';
canvas.style.height = deviceHeight + 'px';

var ctx = canvas.getContext("2d");


loadImag();
function loadImag(){
    var beauty = new Image();
    beauty.src = 'bg.jpg';
    beauty.onload = function(){
        drawBeauty(beauty);
        drawCenter();
    }

}

function drawBeauty(image){
    ctx.drawImage(image,0,0);
}

function  drawCenter(){
    ctx.beginPath();
    var w = deviceWidth*0.8*(640/deviceWidth);
    var l = deviceWidth*0.1*(640/deviceWidth);
    ctx.rect(l,150,w,w);
    ctx.stroke();

}

function drawText(text){

}

function copy() { //需要在服务器内运行
    var w = deviceWidth * 0.8 * (640 / deviceWidth);
    var l = deviceWidth * 0.1 * (640 / deviceWidth);
    var imgData = ctx.getImageData(l, 150, w, w);
    ctx.putImageData(imgData,l, 150);
    
}