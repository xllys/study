var Open=document.getElementById('Open');
var OpenLi=document.getElementsByTagName('li');
var OpenLiLen=OpenLi.length;

var menu=document.querySelectorAll('.menu');
// var menuLen=menu.length;
for(var i=0;i<OpenLiLen;i++){

    OpenLi[i].index=i;
    OpenLi[i].onmouseover=function(){
        for(var j=0;j<OpenLiLen;j++){
            OpenLi[j].className='';
            menu[this.index].style.display='none';
        }
        this.className='on';
        menu[this.index].style.display='block';
    }
    OpenLi[i].onmouseout=function(){
        for(var k=0;k<OpenLiLen;k++){
            OpenLi[k].className='';
            menu[this.index].style.display='none';
        }
    }
}