function canvasWH(canvas) { //自动扩展至全屏，需要css支持
    var deviceWidth = document.body.clientWidth;
    var deviceHeight = document.body.clientHeight;
    canvas.style.width = deviceWidth + 'px';
    canvas.style.height = deviceHeight + 'px';
}

var canvas = document.getElementById('canvas')
var stage = new createjs.Stage(canvas);
canvasWH(canvas);
var img = new Image();
var first = new Image();
img.crossOrigin = "Anonymous";
first.crossOrigin = "Anonymous";
first.onload = function(){
    var bg = new createjs.Bitmap(first);
     stage.addChild(bg);
     
}
img.onload = function() {
    var bitmap = new createjs.Bitmap(img);
    bitmap.x = bitmap.y = 10;
    stage.addChild(bitmap);
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick(event) {
        bitmap.y += 1;
        bitmap
        stage.update();
    }
}

img.src = 'http://s17.mogucdn.com/p2/160808/upload_46je60hej4750821ck592gb2a70ic_127x127.png';
first.src = 'http://s18.mogucdn.com/p2/160808/upload_2bci49f8a15jk26f5b19i9k55c8hk_750x1217.jpg';