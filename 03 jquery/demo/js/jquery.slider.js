;(function($){
    $.fn.slider=function(options){
        var defaults={
            autoScroll:true,    //是否滚动
            speed:2000,         //速度值
            numControl:false,   //数字
            arrowControl:false, //箭头

        }
        var settings=$.extend({},defaults,options),
            slider=$(this),
            ul=slider.find("ul"),
            li=ul.find("li"),
            img=li.find("img"),
            width=slider.width(),
            height=slider.height(),
            len=li.length,
            timer=null,
            index=0;
        img.add(li).css({width:width,height:height});
        ul.css({
            width:width*len,
            height:height
        })
        if(settings.autoScroll){
            //开始滚动
            timer=setInterval(pic,settings.speed);
        }
        if(settings.numControl){
            //添加数字
            slider.append("<div id='num'></div>");
            for(var i=0;i<len;i++){
                slider.find("#num").append("<span>"+(i+1)+"</span>");
            }
            slider.find("#num span").eq(0).addClass("active");
            slider.find("#num span").on("mouseover",function(){
                slider.find("#num span").eq($(this).index()).addClass("active").siblings().removeClass("active");
                index=slider.find("#num span").index($(this));
                showPic(index);
            })
        }
        if(settings.arrowControl){
            slider.append("<span class='left'></span><span class='right'></span>");
            var prev=slider.find(".left");
            var next=slider.find(".right");
            prev.on("click",function(){
                index-=1
                if(index==-1)index=len-1;
                showPic(index);
            })
            next.on("click",function(){
                index+=1
                if(index==len)index=0;
                showPic(index);
            })

        }
        function pic(){
            //定义index值
            index++;
            if(index==len)index=0;
            showPic(index);
        }
        function showPic(index){
            //图片动起来
            ul.animate({
                left:-index*width,
            })
            slider.find("#num span").eq(index).addClass("active").siblings().removeClass("active");
        }
        slider.on("mouseover",function(){
            clearInterval(timer);
        })
        slider.on("mouseout",function(){
            if(settings.autoScroll){
                //开始滚动
                timer=setInterval(pic,settings.speed);
            }
        })
        return this;
    }
})(jQuery);