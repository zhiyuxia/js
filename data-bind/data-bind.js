方法一
var oUl = document.getElementById("ul1");
var oLis = oUl.getElementsByTagName("li");
for(var i=0;i<oLis.length;i++){
  oLis[i].onmouseover = function(){
    this.style.backgroundColor="pink";
  }
  oLis[i].onmouseout = function(){
    this.style.backgroundColor="";
  }
}
for(var i=0;i<ary.length;i++){
  var cur = ary[i];
  var oLi = document.createElement("li")
  oLi.innerHTML="<span>"+(i+4)+"</span>"+cur.title;
  oUl.appendChild(oLi);
}
方法二
var oUl = document.getElementById("ul1");
var oLis = oUl.getElementsByTagName("li");
for(var i =0;i<oLis.length;i++){
  oLis[i].onmouseover = function (){
    this.style.backgroundColor = "pink"
  }
  oLis[i].onmouseout = function (){
    this.style.backgroundColor = ""
  }
}
  var str = "";
for(var i=0;i<ary.length;i++){
  var cur = ary[i];
  str+="<li>"
  str+="<span>"
  str+=(4+i);
  str+="</span>"
  str+=cur.title;
  str+="</li>"
}
oUl.innerHTML+=str;
方法三
 
var oUl = document.getElementById("ul1");
var oLis = oUl.getElementsByTagName("li");
for(var i =0;i<oLis.length;i++){
  oLis[i].onmouseover = function(){
    this.style.backgroundColor = "pink";
  }
  oLis[i].onmouseout = function(){
    this.style.backgroundColor = "";
  }
}
var frg = document.createDocumentFragment();
for(var i = 0;i<ary.length;i++){
  var cur = ary[i];
  var  oLi = document.createElement("li");
  var str = "";
  str+="<span>"+(i+4)+"</span>"+cur.title;
  oLi.innerHTML=str;
  frg.appendChild(oLi);
}
oUl.appendChild(frg);
