//获取到页面中的check的class,所有复选框
var check=document.querySelectorAll('.check');
var checkLen=check.length;
// alert(check.length);----5
//获取到商品前面的复选框
var single=document.querySelectorAll('.single');
var singleLen=single.length;
//alert(single.length);----4

//获取到每一行商品
var itemBox=document.querySelectorAll('.item-box');
var itemBoxLen=itemBox.length;

 //给所有复选框添加事件
for(var i=0;i<checkLen;i++){
    check[i].onclick=function(e){
        //选择的记录数
        var count=0;
        //判断得到全选
        if(e.target.getAttribute('id')=='all'){
            //把全选的状态赋值给下面每一个checkbox
            for(var j=0;j<singleLen;j++){
                single[j].checked=this.checked;
            }
        }
        for(var k=0;k<singleLen;k++){
            if(single[k].checked){
                count++;
            }
            if(count==singleLen){
                check[0].checked=true;
            }else{
                check[0].checked=false;
            }
        }
        fTotal();
    }
}
//给商品每一行添加事件
for(var i=0;i<itemBoxLen;i++){
    itemBox[i].onclick=function(e){
        var input=this.getElementsByTagName('input')[1];
        switch(e.target.className){
            case 'add':
                input.value=parseInt(input.value)+1;
                fTotalSum(this);
            break;
            case 'reduce':
                input.value=parseInt(input.value)-1 <=1?1:parseInt(input.value)-1;
                fTotalSum(this);
            break;
            case 'col col-action u-r':
                var con=confirm('确定删除吗');
                if(con){
                    this.parentNode.removeChild(this);
                }

            break;
        }
        //调用：计算总数量和总价
        fTotal();
    }
    //键盘事件
    itemBox[i].onkeyup=function(){
        fTotalSum(this);
        fTotal();
    }
}
//计算小计  That====>this 就是商品的每一行
function fTotalSum(That){
    //获取到当前行的数量
    var num=That.getElementsByTagName('input')[1].value;
    //获取到当前行的单价
    var price=parseInt(That.querySelector('.col-price').innerHTML);
    //最终小计值
    That.querySelector('.col-sum').innerHTML=num*price+'元';
}
//总数量 和 合计
function fTotal(){
    //获取到总价节点
    var totalPrice=document.getElementById('totalPrice');
    //获取到总件节点
    var totalNum=document.getElementById('totalNum');
    //数量和
    var num=0;
    //总价
    var price=0;
    //获取到每一行商品
    var itemBox=document.querySelectorAll('.item-box');
    var itemBoxLen=itemBox.length;
    for(var i=0;i<itemBoxLen;i++){
        if(itemBox[i].getElementsByTagName('input')[0].checked){
            num += parseInt( itemBox[i].getElementsByTagName('input')[1].value);
            price += parseInt( itemBox[i].querySelector('.col-sum').innerHTML);
        }     
    }
    totalNum.innerHTML=num;
    totalPrice.innerHTML=price;


}