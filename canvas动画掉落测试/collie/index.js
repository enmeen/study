var deviceHeight = document.body.clientHeight;
var deviceWidth = document.body.clientWidth;
var contain = document.getElementById("container");



collie.ImageManager.add({
    'frist': 'http://s18.mogucdn.com/p2/160808/upload_2bci49f8a15jk26f5b19i9k55c8hk_750x1217.jpg',
    'arrow': 'http://s18.mogucdn.com/p2/160808/upload_1l8flhfi2b1lbk73al5kd8i5kc37e_64x57.png',
    'p2_bg': 'http://s18.mogucdn.com/p2/160808/upload_274e47d93k3afg0ajf41kjcll1l0d_750x1217.jpg',
    'p2_cloth': 'http://s16.mogucdn.com/p2/160808/upload_84d17bb7977458bc0j1lh925ca2bf_750x866.png',
    'p2_camera': 'http://s17.mogucdn.com/p2/160808/upload_48j9jc5h3ad8if2hlecd36k93dd14_390x390.png',
    'p2_btn_camera': 'http://s18.mogucdn.com/p2/160808/upload_5j777c99l0djb69dk5gbb9aa957ag_200x200.png',
    'p2_float_pic': 'http://s18.mogucdn.com/p2/160808/upload_1j389d23213li4la7hkfk6b6hcbb8_750x1217.png',
    'p3_btn': 'http://s17.mogucdn.com/p2/160810/upload_2efk8k01hgfblgk040ahkjafb0gk1_750x97.png',
    'p3_logo': 'http://s16.mogucdn.com/p2/160811/upload_82i62j93369jl4d6j9icg4d724la9_315x124.png',
    'cat': 'http://s16.mogucdn.com/p2/160811/upload_1dej2fhfe0b608cf40jdfd7ih68gk_750x35.png',
    'women': 'http://s17.mogucdn.com/p2/160808/upload_6aka5jd5d1ef481k6cckibfejagb0_127x127.png',
    'brain': 'http://s17.mogucdn.com/p2/160808/upload_6bk1i70glgj72k4kl3577ba5lh1dk_127x127.png',
    'mice': 'http://s18.mogucdn.com/p2/160808/upload_73264a24igei1fgh35bi6h598g9fl_127x127.png'
}, function() {
    copyCoth();
    fallDown();
});

function createImage() {
    var a = new Image();
    a.crossOrigin = "anonymous";
    a.onload = function() {}
    a.src = 'http://s16.mogucdn.com/p2/160808/upload_84d17bb7977458bc0j1lh925ca2bf_750x866.png';
}

/*创建canvas*/
var layer = new collie.Layer({
    width: 750,
    height: 1217
});

// Create an object that will be displayed on the screen
// 
// 
// 
var imageArr = ['women', 'brain', 'mice'];
var cat, women, brain, mice;
var vArr = [cat, women, brain, mice];



function fallDown() {
    for (var i = 0; i < 20; i++) {
        new collie.DisplayObject({
            x: random([170, 495]),
            y: random([-200, -3000]),
            velocityRotate: random([-380, 380]), //旋转速度
            velocityY: random([200, 300]), //下落速度
            backgroundImage: 'women'
        }).addTo(layer);
    }
}



var action = {
    photograph: function() { //执行截图的功能集成函数
        cloneCan = action.cloneCanvas(0, 0, 750, 866);
        cloneCtx = cloneCan.getContext('2d');
        contain.appendChild(cloneCan);
        setTimeout(function() {
            $(canvas).one('touchend', function(e) {
                e.preventDefault();
                photoing = true; //启用拍照时刻
            })
        }, 500)
    },
    copy: function(newCtx, x, y, w, h) { //w,h为canvas画布中实际截取的宽高 x,y为画布中的坐标
        var imgData = ctx.getImageData(x, y, w, h);
        newCtx.putImageData(imgData, x, y);
    },
    cloneCanvas: function(x, y, w, h) { //w,h为canvas画布中实际截取的宽高x,y为画布中的坐标
        var newCanvas = document.createElement('canvas');
        var w = w;
        var h = h;
        newCanvas.className = 'camera';
        newCanvas.style.left = x * (deviceWidth / this.canvasW) + 'px';
        newCanvas.style.top = y * deviceHeight / this.canvasH + 'px';
        var context = newCanvas.getContext('2d');
        newCanvas.width = w;
        newCanvas.height = h;
        newCanvas.style.width = w * deviceWidth / this.canvasW + 'px';
        newCanvas.style.height = h * deviceHeight / this.canvasH + 'px';
        return newCanvas;
    },
    whiteScreen: function(func) { //拍照闪光灯
        var newDiv = document.createElement('div');
        newDiv.className = 'layout';
        contain.appendChild(newDiv);
        setTimeout(function() {
            newDiv.className = 'layout vhide';
            func();
        }, 50);
    },
    convertCanvasToImage: function(canvas) {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        return image;
    },
    avoidFloatPoint: function(num) {
        var rounded;
        rounded = (0.5 + num) | 0;
        rounded = ~~(0.5 + num);
        rounded = (0.5 + num) << 0;
        return rounded;
    }
}

console.log($('._collie_layer'))
var cloneCan;


function copyCoth() {
    new collie.DisplayObject({
        x: 0,
        y: 0,
        backgroundImage: 'frist'
    }).attach({
        "click": function() {
            new collie.DisplayObject({
                x: 0,
                y: 0,
                backgroundImage: 'p2_cloth'
            }).addTo(layer);
            layer.clone();
        }
    }).addTo(layer);
}



// Add a layer to renderer
collie.Renderer.addLayer(layer);

// Retrieve renderer from the container ID element
collie.Renderer.load(contain);

collie.Renderer.start();
var aa = document.getElementById("container").childNodes[0].childNodes[0];
aa.style.height = deviceHeight + 'px';
aa.style.width = deviceWidth + 'px';

// Start rendering
function random(range) {
    var max = Math.max(range[0], range[1]);
    var min = Math.min(range[0], range[1]);
    var diff = Math.random();
    var val = Math.floor(diff * (max - min + 1) + min);
    return val;
}



var lay = document.querySelector('._collie_layer');
var ctx = lay.getContext('2d');