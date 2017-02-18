function toAry(likeAry){
  var ary = [];
  try{
    ary = Array.prototype.slice.call(lieAry);
  }catch(e){
    for(var i = 0;i<likeAry.length;i++){
      ary[ary.length]=likeAry[i];
    }
  }
  return ary;
}
var oUl = document.getElementById("ul1");
var lis = oUl.getElementsByTagName("li");
var lisAry = toAry(lis);
lisAry.sort(function(a,b){
  return a.innerHTML-b.innerHTML;
})

var frg = document.createDocumentFragment();
for(var i =0;i<lisAry.length;i++){
  frg.appendChild(lisAry[i]);
}
oUl.appendChild(frg);
frg = null;
