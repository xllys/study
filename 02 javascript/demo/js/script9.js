//盒子合理摆放：函数需要调用两次
//1.页面加载完毕的时候
//2.滚动条滚动的时候

//当文档加载完毕会执行以下代码
window.onload=function(){
    fWaterFall();
    window.onscroll=function(){
        if(fScrollTop()){
             //获取container
        var container=document.getElementById('container');
        //创建item
        var oItem=document.createElement('div');
        oItem.className='item';
        //创建pic
        var oPic=document.createElement('div');
        oPic.className='pic';
        //创建img
        var oImg=document.createElement('img');
        oImg.src='images/4.jpg';
        //添加操作
        container.appendChild(oItem);
        oItem.appendChild(oPic);
        oPic.appendChild(oImg);
        
        } 
        fWaterFall();     
    }
}
//盒子合理摆放的函数
function fWaterFall(){
    var container=document.getElementById('container');
    //可视区域的宽
    var clientWidth=document.documentElement.clientWidth;
    //console.log(clientWidth);--1263
    //获取到页面所有class为item的元素
    var oItem=document.getElementsByClassName('item');
    //获取其中一个item的宽度
    var itemWidth=oItem[0].offsetWidth;
    //console.log(itemWidth); --267
    //一行有多少个
    var num=Math.floor(clientWidth/itemWidth);
    //console.log(num);
    //设置container的宽度
    container.style.width=num*itemWidth+'px';

    //承载盒子高度的数组
    var hrr=[];
    for(var i=0;i<oItem.length;i++){
        if(i<num){
            //第一排
            hrr.push(oItem[i].offsetHeight);
            //console.log(...hrr);  //...展开
        }else{
            //得到高度最小值
            var minHeight=Math.min(...hrr);
            //console.log(minHeight);
            //得到最小值索引
            var index=fInArray(minHeight,hrr);
            console.log(index);
            //第一排之后
            //设置样式
            oItem[i].style.position='absolute';
            oItem[i].style.left= index*itemWidth+'px';
            oItem[i].style.top= minHeight+'px';
            //改变数组最小值，让它+=
            hrr[index]+=oItem[i].offsetHeight;
        }
    }
    

}
//计算数组最小值的位置
function fInArray(min,hrr){
    for(var i=0;i<hrr.length;i++){
        if(hrr[i]==min){
            return i;
        }
    }
}

//判断什么条件加载图片
function fScrollTop(){
    //所有的item
    var item=document.getElementsByClassName('item');
    //最后一个item
    var lastItem=item[item.length-1];
    //可视区域高度
    var clientHeight=document.documentElement.clientHeight;
    //滚动距离
    var scrollTop=document.documentElement.scrollTop;
    if(  lastItem.offsetTop < (clientHeight + scrollTop) ){
        //开始加载
        return true;
    }else{
        //不加载
        return false;
    }
}