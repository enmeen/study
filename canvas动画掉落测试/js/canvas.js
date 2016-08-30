/*canvas分层性能测试*/

"use strict";
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var bgcanvas = document.getElementById('bg');
var bgCtx = bgcanvas.getContext('2d');
canvas.style.width = '750px';
canvas.style.height = '1217px';
bgcanvas.style.width = '750px';
bgcanvas.style.height = '1217px';
var bg = new Image();
bg.onload = function() {
	var i = 0;

	function ani() {
		setTimeout(function() {
			ctx.clearRect(0, 0, 750, 1217);
			ctx.drawImage(bg, 0, 0);
			ctx.fillStyle = '#fff';
			ctx.fillRect(300, i, 100, 100);
			i++;
			if (i > 1217) {
				i = 0;
			}
		}, 1000 / 6);
		ani();
	}

	bgCtx.drawImage(bg, 0, 0);
	function bgInt() {

		setTimeout(function() {
			ctx.clearRect(0, 0, 750, 1217);
			ctx.fillStyle = '#fff';
			ctx.fillRect(300, i, 100, 100);
			i++;
			if (i > 1217) {
				i = 0;
			}
		}, 1000 / 6);
		bgInt()
	}

/*	ani();*/
	bgInt();



}

bg.src = 'http://s18.mogucdn.com/p2/160808/upload_2bci49f8a15jk26f5b19i9k55c8hk_750x1217.jpg';