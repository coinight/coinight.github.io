function changeTo(page){
    window.location="page"+page+".html";
  };
var sleep = function (time) {
  var startTime = new Date().getTime() + parseInt(time, 10);
  while (new Date().getTime() < startTime) {}
};