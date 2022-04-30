;(function($){
    $.fn.color=function(options){
        var defaults={
            bg:"red",
        }
        var settings=$.extend({},defaults,options);
        $(this).css({
            color:settings.bg
        })
    }
    //1》插件的灵活性
    //2》传递参数:默认参数  修改参数
})(jQuery);