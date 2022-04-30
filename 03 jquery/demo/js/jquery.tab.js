;(function($){
    $.fn.tab=function(options){
        var defaults={
            parent:"#tab1",
            mouseEvent:"click", 
            active:"active",
        }
        var settings=$.extend({},defaults,options);
        $(this).find("li").bind(settings.mouseEvent,function(){
            $(this).addClass(settings.active).siblings().removeClass(settings.active);
            var idx=$(this).index();
            $(settings.parent).find("p").eq(idx).show().siblings().hide();
        })
        return this;
    }
    
})(jQuery);