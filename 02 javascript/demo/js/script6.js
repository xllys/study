//main节点
var main=document.getElementById('main');
//小盒子
var sImg=document.getElementById('sImg');
//阴影
var lens=document.getElementById('lens');
//大盒子
var pImg=document.getElementById('pImg');
//大图片
var picImg=document.getElementById('picImg');


//给小盒子加入鼠标移入事件，让阴影和大盒子显示
sImg.onmouseover=function(){
    lens.style.display='block';
    pImg.style.display='block';
}
sImg.onmousemove=function(e){
    //当前鼠标的位置-盒子距离浏览器左侧的偏移-阴影宽度的一半
    var x=e.clientX-main.offsetLeft-lens.offsetWidth/2;
    var y=e.clientY-main.offsetTop-lens.offsetHeight/2;

    //位置限定
    if(x<0){
        x=0;
    }else if(x>sImg.offsetWidth-lens.offsetWidth){
        x=sImg.offsetWidth-lens.offsetWidth;  
    }

    //位置限定
    if(y<0){
        y=0;
    }else if(y>sImg.offsetHeight-lens.offsetHeight){
        y=sImg.offsetHeight-lens.offsetHeight;  
    }
    
    //阴影位置
    lens.style.left= x+'px';
    lens.style.top =y+'px';

    //大图片位置
    picImg.style.left= -x * 2 + 'px';
    picImg.style.top= -y * 2 + 'px';
}
sImg.onmouseout=function(){
    lens.style.display='none';
    pImg.style.display='none';
}