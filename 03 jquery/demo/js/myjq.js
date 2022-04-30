;(function(e){
    // var a=10;
    // window.a=a;
    var jQuery=function(element){
        //return '你好';
        return new jQuery.prototype.init(element);
    }
    function markAll(dom,that){
        var that=that || [];
        for(var i=0;i<dom.length;i++){
            that[i]=dom[i];
        }
        that.length=dom.length;
        return that;
    }
    jQuery.prototype={
        init:function(element){
            //$('#box')==>选择节点的初始化方法
            // $(document)
            // $(this[0])
            var dom=null;
            if(typeof element!='string'){
                dom =[element]
            }else{
                dom = document.querySelectorAll(element);
            }
            
            return markAll(dom,this);
        },
        css:function(attr,val){
            for(var i=0;i<this.length;i++){
                this[i].style[attr]=val;
            }
            return this;
        },
        html:function(val){
            for(var i=0;i<this.length;i++){
                this[i].innerHTML=val;
            }
            return this;
        },
        hover:function(over,out){
            box.onmouseover=over;
            box.onmouseout=out;
            return this;
        },
        first:function(){
            return $(this[0]);
        },
        last:function(){
            return $(this[this.length-1]);
        }
    }
    jQuery.prototype.init.prototype=jQuery.prototype
    e.jQuery=e.$=jQuery;
})(window);
//console.log(jQuery,$);
//console.log($());


$('#box').css('background','red').html('123').hover(function(){
    alert(1);
},function(){
    alert(2);
})
$('li').last().first().css('fontSize','100px').html('我改变了')