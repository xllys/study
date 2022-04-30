;(function($){
    $.fn.page=function(options){
        var defaults={
            pageNo:1,       //当前页
            totalPage:20,   //页码
            totalSize:300,  //总记录数
        };
        var settings=$.extend({},defaults,options);
        var That=this;
        function createHTML(){    //创建内容
            var html='';
            html+='<a class="firstPage">首页</a><a class="prePage">上一页</a>';
            if(settings.totalPage >6){
                if(settings.pageNo<5){
                    for(var i=1;i<=5;i++){
                        if(i==settings.pageNo){
                            html+='<a class="active">'+i+'</a>';
                        }else{
                            html+='<a href="">'+i+'</a>';
                        }
                    }
                    html+='...';
                    html+='<a href="">'+settings.totalPage+'</a>';
                }else{
                    if(settings.pageNo<settings.totalPage-3){
                        for(var i=settings.pageNo-2;i<=settings.totalPage+2;i++){
                            if(i==settings.pageNo){
                                html+='<a class="active">'+i+'</a>';
                            }else{
                                html+='<a href="">'+i+'</a>';
                            }
                        }
                        html+='...';
                        html+='<a href="">'+settings.totalPage+'</a>';
                    }else{
                        html+='<a href="">1</a>';
                        html+='...';
                        for(var i=settings.pageNo-4;i<=settings.totalPage;i++){
                            if(i==settings.pageNo){
                                html+='<a class="active">'+i+'</a>';
                            }else{
                                html+='<a href="">'+i+'</a>';
                            }
                        }
                    }
                    
                }
                
            }else{
                for(var i=1;i<=settings.totalPage;i++){
                    if(i==settings.pageNo){
                        html+='<a class="active">'+i+'</a>';
                    }else{
                        html+='<a href="">'+i+'</a>';
                    }
                }
            }
            html+='<a class="nextPage">下一页</a><a class="lastPage">尾页</a>';
            html+='<span>共<span>'+settings.totalPage+'</span>页</span>';
            html+='<span>共<span>'+settings.totalSize+'</span>条记录</span>';
            That.html(html);
        }
        function bindMouse(){
            That.on("click","a",function(){
                var attr=$(this).attr("class");
                var txt=$(this).text();
                if(attr=="nextPage"){
                    settings.pageNo+=1;
                    if(settings.pageNo>settings.totalPage){
                        settings.pageNo=settings.totalPage;
                    }
                }else if(attr=="prePage"){
                    settings.pageNo-=1;
                    if(settings.pageNo<1){
                        settings.pageNo=1;
                    }
                }else if(attr=="firstPage"){
                    settings.pageNo=1;
                }else if(attr="lastPage"){
                    settings.pageNo=settings.totalPage;
                }else{
                    settings.pageNo=parseInt(txt);
                }
                createHTML();
            })
        }
        createHTML();
        bindMouse();
        //return this;
    }
    
    
})(jQuery);