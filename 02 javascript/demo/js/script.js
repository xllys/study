//获取某个id元素
var btn=document.getElementById('btn');
//        文档 的 获取  元素  id
btn.onclick=function(){
	alert(222222);
}
var main=document.getElementById('main');
main.style.background='blue';
var lis=document.getElementsByTagName('li');
var len=lis.length;
// lis[0].style.background='red';
for (var i=0;i<=len;i++){
	lis[i].style.background='red';
}