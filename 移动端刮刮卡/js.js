 /**判断浏览器是否支持canvas 其实不用这样 不支持的话 会直接显示canvas标签的文字，但是由于是动态创建的，所以需要这样**/
    try {
        document.createElement('canvas').getContext('2d');
    } catch (e) {
        alert('您的手机不支持刮刮卡效果哦~!');
    }
    /*判断手机类型*/
    var u = navigator.userAgent,
        mobile = '';
    if (u.indexOf('iPhone') > -1) mobile = 'iphone';
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) mobile = 'Android';
    /*创建canvas元素*/
    function createCanvas(parent, width, height) { //简化canvas创建函数，默认宽高100px
        var canvas = {}; //定义一个空对象，
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    }
    /*初始化函数
        container 父元素
        width、height 图层宽高
        fillColor 填充颜色
        type 手机类型
    */
    function init(container, width, height, fillColor, type) {
        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;
        ctx.fillCircle = function(x, y, radius, fillColor) { //定义函数
            this.fillStyle = fillColor;
            this.beginPath();
            this.moveTo(x, y); //移动绘图游标到（X，Y） 不划线；
            this.arc(x, y, radius, 0, Math.PI * 2, false); //绘制圆
            this.fill(); //开始填充
        };
        ctx.clearTo = function(fillColor) { //定义函数，清除函数
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, width, height);
        };
        ctx.clearTo(fillColor || "#ddd");
        canvas.node.addEventListener("touchstart", function(e) { //canvas监听开始触摸事件
            canvas.isDrawing = true;
        }, false);
        canvas.node.addEventListener("touchend", function(e) { //canvas监听结束触摸事件
            canvas.isDrawing = false;
        }, false);
        canvas.node.addEventListener("touchmove", function(e) {
            if (!canvas.isDrawing) {
                return;
            }
            if (type == "Android") {
                var x = e.changedTouches[0].pageX - this.offsetLeft;
                var y = e.changedTouches[0].pageY - this.offsetTop;
            } else {
                var x = e.changedTouches[0].pageX - this.offsetLeft;
                var y = e.changedTouches[0].pageY - this.offsetTop;
                console.log(e);
            }
            var radius = 20;
            var fillColor = '#ff0000';
            ctx.globalCompositeOperation = 'destination-out'; //在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
            ctx.fillCircle(x, y, radius, fillColor);
        }, false);
    }
    var container = document.getElementById('box');
    init(container, 200, 200, '#CBCBCB', mobile);