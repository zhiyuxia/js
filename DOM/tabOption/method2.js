var tab  = document.getElementById("tab");
var tabOption = document.getElementById("tabOption");
var oLis = children(tabOption);
var oDivs = children(tab,"div");
function children(elem,tag){
  var childrens = elem.childNodes;
  console.log(childrens);
  var arry = [];
  for(var i = 0;i<childrens.length;i++){
    var cur = childrens[i];
    if(cur.nodeType === 1){
      arry.push(cur);
    }
  }
  if(typeof tag ==="string"){
    for(var k =0;k<arry.length;k++){
      var curElem = arry[k];
      if(curElem.nodeName.toLowerCase()!==tag.toLowerCase()){
        arry.splice(k,1);
        k--;
      }
    }
  }
  return arry;
}
function changeTab(n){
  for(var i = 0;i < oLis.length;i++){
    oLis[i].className = null;
    oDivs[i].className = null;
  }
  oLis[n].className = "select";
  oDivs[n].className = "select";
}
for(var k =0;k<oLis.length;k++){
  // 方法二:利用自定义属性
  oLis[k].index = k;
  oLis[k].onclick = function(){
    changeTab(this.index);
  }
}
