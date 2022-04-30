$(function(){
    var len=50;
    for(var i=0;i<len;i++){
        var x=Math.floor(Math.random()*$("#box").innerWidth())+"px";
        var y=Math.floor(Math.random()*$("#box").innerHeight())+"px";
        $("#box").append("<span style='left:"+x+";top:"+y+"'></span>");
        hide();
    }
    function hide(){
        $("#box span").animate({opacity:0},50,function(){
            show();
        })
    }
    function show(){
        $("#box span").animate({opacity:1},10,function(){
            hide();
        })
    }
})