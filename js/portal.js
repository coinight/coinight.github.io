

var angle = 0;
var t = 0;

left = function () {
    angle = (angle + 1) % 360;
    scale_plus = yq4p8xmxf1(t);
    img1.style.transform =
    "rotate(" + angle + "deg) " + "scale(" + scale_plus + ")";
    t = (t + 0.001) % 1;
};
  yq4p8xmxf1 = function (x) {
    return -0.8 * x * x + 0.8 * x + 1;
    // y = -0.8*x*x +0.8*x +1
  };
  