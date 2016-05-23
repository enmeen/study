    var i = 0;
    var end = [new Date('2016/5/22,21:30:00'), new Date('2016/5/22,21:31:00'), new Date('2016/5/22,21:32:00')];

    function showTime() {
        var now = new Date();
        var left = parseInt((end[i].getTime() - now.getTime()) / 1000);
        var h = parseInt((left / 3600) % 24);
        if (h.toString().length < 2) { h = 0 + h; } //当数字小于10位数时，自动填充0
        var m = parseInt((left / 60) % 60);
        if (m.toString().length < 2) { m = '0' + m };
        var s = parseInt(left % 60);
        if (s.toString().length < 2) { s = '0' + s };
        document.getElementById('showTime').innerHTML = h + ":" + m + ":" + s;
        if (h == 0 && m == 0 && s == 0) {
            if (i < 2) {
                i = i + 1;
            } else {
                i = 0;
            }
        }
        setTimeout(showTime, 200)
    }
    showTime();
