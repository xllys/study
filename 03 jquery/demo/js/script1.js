window.onload=function(){
    waterfall();
    var obj={
        arr:[
            'img/a.jpg',
            'img/b.jpg',
            'img/c.jpg',
            'img/d.jpg',
            'img/h.jpg',
            'img/q.jpg',
            'img/1.jpg',
            'img/3.jpg',
        ]
    }
    $(window).scroll(function(){
        if(ScrollTop()){
            $.each(obj.arr,function(idx,val){
                var item=$("<div class='item'></div>");
                var pic=$("<div class='pic'></div>");
                var img=$("<img src='"+obj.arr[idx]+"'>");
                $(".main").append(item);
                item.append(pic);
                pic.append(img);
            })
            waterfall();
        }
    })
}
function ScrollTop(){
    var last=$(".item").last();
    var height=last.outerHeight()/2;
    var offsetTop=last.offset().top;
    var winH=$(window).height();
    var sTop=$(document).scrollTop();
    if((height+offsetTop)<(winH+sTop)){
        return true;
    }else{
        return false;
    }
}
function waterfall(){
    //可视区域的宽度
    var width=$(window).width();
    //获取到所有的item盒子
    var oBox=$(".item");
    //获取其中一个图片(盒子)宽度
    var boxWidth=oBox.first().outerWidth(true);
    //一行能放入的个数
    var num=Math.floor(width/boxWidth);
    //console.log(num);
    //设置main盒子宽度=居中
    $(".main").width(num*boxWidth);

    //第一排图片不用动,动第二,三..排定位
    var hrr=[];    //放图片的高度值
    for(var i=0;i<oBox.length;i++){
        if(i<num){
            //第一排
            hrr.push(oBox.eq(i).outerHeight());
        }else{
            //console.log(hrr);
            //在数组中，求出最小值
            var min=Math.min.apply(null,hrr);
            //min最小值在hrr数组中的位置
            var idx=$.inArray(min,hrr);
            oBox.eq(i).css({
                "position":"absolute",
                "left":idx*boxWidth,
                "top":min,
            })
            //hrr[idx]=hrr[idx]+oBox.eq(i).outerHeight();
            hrr[idx]+=oBox.eq(i).outerHeight();
        }
    }
}