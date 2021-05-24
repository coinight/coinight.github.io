var portol = $("#portol")
function changeTo(page){
    window.location="page"+page+".html";
};
$().ready(
    function () {
        var angle = 0;
        var t = 0;
        setInterval(function () {
            angle =(angle+ 3)%360;
            t = (t + 0.001) % 1;
            portol.children(0).rotate(angle);

        },15);
        $("#portol_load").click(function () {
            changeTo(1);
        })
    }

)

