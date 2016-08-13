var cxt = document.getElementById('canvas').getContext('2d');
createImgae();

function createImgae() {
    img = new Image();
    img.src = 'http://s17.mogucdn.com/p2/160803/upload_897e4ka1hcd6dh2id6976b3hl40a9_640x1100.jpg';
    img.onload = function() {
        createRect()
        /*createRect(10,100,100);*/
    }
};


//动画一： 物体旋转掉落
//动画二 ：裁剪 并且使用裁剪的图片进行动画
/*function createRect(anger,rectW,rectH) {
    cxt.beginPath();
    保存状态
    cxt.save();
    cxt.strokeStyle = 'black';
    cxt.strokeRect(100, posy, rectW, rectH);
    cxt.strokeStyle = 'green';
                            cxt.translate(100, posy+rectH/2);
    cxt.strokeRect(100, 0, rectW, rectH);
    cxt.strokeStyle = 'blue';
                    cxt.rotate(anger * Math.PI / 180);
    cxt.strokeRect(100, 0, rectW, rectH);
    cxt.strokeStyle = 'red';
                            cxt.translate(-100, -posy-rectH/2);
    cxt.strokeRect(100, posy, rectW, rectH);
    cxt.restore();

}*/
var aaa;
function createRect() {
    var anger = 0,
        rectW = 200,
        rectH = 200,
        posx = 200,
        posy = 0;
    cxt.strokeStyle = 'black';
    cxt.strokeRect(posx, posy, rectW, rectH);
   aaa =  setInterval(function() {
        cxt.beginPath();
        cxt.strokeStyle = 'red';
        cxt.save();
        cxt.translate(posx + rectW / 2, posy + rectH / 2);
        cxt.rotate(anger * Math.PI / 180);
        cxt.translate(-posx - rectW / 2, -posy - rectH / 2);
        cxt.strokeRect(posx, posy, rectW, rectH);
        /*还原画布*/
        cxt.restore();
        anger = anger + 1;
        posy = posy+2;
    }, 16);
}
function ccc(){
    clearInterval(aaa)
}



function two() {
    cxt.beginPath();
    cxt.strokeStyle = "red";
    cxt.strokeRect(100, 100, 100, 100);
    cxt.closePath();
}



function renderImage() {
    var img = new Image();
    img.src = "3.jpg";
    img.onload = function() {
        cxt.drawImage(img, 0, 0);
    }
}


function line() {
    cxt.beginPath();
    cxt.strokeStyle = 'black';
    cxt.moveTo(100, 100);
    cxt.lineTo(300, 300);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(300, 100);
    cxt.lineTo(100, 300);
    cxt.stroke();
}

setInterval(function(){

},1)