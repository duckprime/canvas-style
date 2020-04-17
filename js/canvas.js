var cas = document.getElementById("cas");
var ctx = cas.getContext("2d");
var img = new Image();
img.src = "img/00MM.PNG";


var i = 0; //切换图片的标志
var flag = 0; //方向的标志
img.onload = function() {
    var w = img.width / 4,
        h = img.height / 4;
    setInterval(function() {
        //清除
        ctx.clearRect(0, 0, cas.width, cas.height);
        //将图片画入canvas中
        /*
         * 第一个参数是图片的对象
         * 第二个和第三个参数是 图片左上角的x,y坐标点
         * 第四个和第五个参数是 图片的宽 高
         * 第六个和第七个参数是 显示在画布上的x,y坐标点
         * 第八和第九个参数 显示在画布上的宽高
         * */
        ctx.drawImage(img, w * i, h * flag, w, h, 615, 310, w, h);
        i++;
        i = i % 4; //循环，这样才是一个循环走动的过程
    }, 150);
}


//*************按方向键，让人物转变方向 左-37 上-38 右-39 下-40 *******************
document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            flag = 1;
            break;
        case 38:
            flag = 3;
            break;
        case 39:
            flag = 2;
            break;
        case 40:
            flag = 0;
            break;
    }
}