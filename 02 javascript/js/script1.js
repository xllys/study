(function(){
//1》获取到要操作的元素

var lis=document.getElementsByTagName('li');
//记录当前图片位置
var index=0;
//2》定时器函数
function fun(){
	//3》先把所有的li都隐藏了
	for(var i=0;i<lis.length;i++){
		lis[i].style.display='none';
	}
	index++;
	if(index>3){
		index=0;
	}
	lis[index].style.display='block';
	

}
//每隔一秒执行fun函数
setInterval(fun,1000);
})();