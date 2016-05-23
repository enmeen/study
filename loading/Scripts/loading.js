var xyf_loadimgImg = new Image();
xyf_loadimgImg.src= '../Content/images/loading.gif';
var layout = "<div id='loadingBar'><img src='../Content/images/loading.gif' id='loadingImg'></div>";
document.write(layout);
var loadingBar = document.getElementById('loadingBar');
var loadingImg = document.getElementById('loadingImg');
var intWidth = document.body.scrollWidth;
var intHeight = document.body.scrollHeight;
loadingBar.style.cssText = "position: fixed;background-color:#fff;opacity: .6;z-index:99999999;" + 'width:' + intWidth + 'px;' + 'height:' + intHeight + 'px';
loadingImg.style.cssText = "position: absolute;top: 50%;left: 50%;margin-top: -0.515625rem;margin-left:-0.515625rem;width:66px;height:66px;";
function outLoading() {
    if (loadingBar) {
        loadingBar.style.display = 'none';
    }
}
document.onreadystatechange = function(){
    if (document.readyState == "complete") {
        outLoading()
    }
}