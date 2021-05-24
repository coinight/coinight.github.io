var sleep = function (time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {}
};
img1 = document.getElementById("load");
img2 = document.getElementById("bg_img");
img3 = document.getElementById("rick_img");
// var visiable_size = [
//   document.body.clientWidth,
//   document.body.clientHeight,
// ];
// img1.style.left = String(visiable_size[0] / 2) + "px";
// img1.style.top = String(visiable_size[1] / 2) + "px";
var angle = 0;
var t = 0;
function changeTo(page){
    window.location="page"+page+".html";
}
function hide() {
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "";
}
left = function () {
    angle = (angle + 1) % 360;
    // var scale_plus = Math.round(Math.random()) / 10 + 1;
    scale_plus = yq4p8xmxf1(t);
    img1.style.transform =
        "rotate(" + angle + "deg) " + "scale(" + scale_plus + ")";
    t = (t + 0.001) % 1;
};
yq4p8xmxf1 = function (x) {
    return -0.8 * x * x + 0.8 * x + 1;
    // y = -0.8*x*x +0.8*x +1
};
//self.setInterval("left()", 5);