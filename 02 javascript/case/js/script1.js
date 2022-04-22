var drag=document.getElementById('drag');
drag.onmousedown=function(e){
    var x=e.clientX-drag.offsetLeft;
    var y=e.clientY-drag.offsetTop;
    drag.onmousemove=function(e){
        var l=e.clientX-x;
        var t=e.clientY-y;
        if(l<0){
            l=0;
        }else if(l>document.documentElement.clientWidth-drag.offsetWidth){
            l=document.documentElement.clientWidth-drag.offsetWidth;
        }
        if(t<0){
            t=0;
        }else if(t>document.documentElement.clientHeight-drag.offsetHeight){
            t=document.documentElement.clientHeight-drag.offsetHeight;
        }
        drag.style.left=l+'px';
        drag.style.top=t+'px';
    }
}
drag.onmouseup=function(){
    drag.onmousemove=null;
}