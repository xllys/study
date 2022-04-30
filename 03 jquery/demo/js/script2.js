$(function(){
    $(".item ul li img").click(function(){
        $(this).addClass("bg").parent().siblings().find("img").removeClass("bg");
        $(".top img").attr("src",$(this).attr("src"));
        $(".max img").attr("src",$(this).attr("src"));
        
    })
    $(".top").mousemove(function(e){
        $("b").show();
        $(".max").show();
        var x=e.pageX-$(this).offset().left-$("b").width()/2;
        var y=e.pageY-$(this).offset().top-$("b").height()/2;
        var width=$(this).width()-$("b").width();
        var height=$(this).height()-$("b").height();
        if(x<0){
            x=0;
        }else if(x>width){
            x=width;
        }
        if(y<0){
            y=0;
        }else if(y>height){
            y=height;
        }
        $("b").css({
            "left":x,
            "top":y,
        })
        $(".max img").css({
            "left":-2*x,
            "top":-2*y,
        })
    })
})