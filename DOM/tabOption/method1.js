// var tab  = document.getElementById("tab");
// var oLis = tab.getElementsByTagName("li");
// var oDivs = tab.getElementsByTagName("div");
// function changeTab(n){
//   for(var i = 0;i < oLis.length;i++){
//     oLis[i].className = null;
//     oDivs[i].className = null;
//   }
//   oLis[n].className = "select";
//   oDivs[n].className = "select";
// }
// for(var k =0;k<oLis.length;k++){
// 利用闭包
//   (function(j){
//   oLis[j].onclick = function(){ 
//     changeTab(j);
//   }
//   })(k)
// }
//
var tab  = document.getElementById("tab");
var oLis = tab.getElementsByTagName("li");
var oDivs = tab.getElementsByTagName("div");
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
