var oTab = document.getElementById("tab");
var tHead = oTab.tHead;
var oThs = tHead.rows[0].cells;//只有具体的某一行才有cells,cells是这一行的列的集合
var tBody = oTab.tBodies[0];
var oRows = tBody.rows;
var data = null;
var xhr = new XMLHttpRequest;
xhr.open("get","data.txt",false);
xhr.onreadystatechange = function(){
  if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
    var val = xhr.responseText;
    data = JSON.parse(val);
    console.log(val);
    console.log(data);
  }
}
xhr.send(null);
function bind(){
  var frg = document.createDocumentFragment();
  for(var i =0;i<data.length;i++){
    var cur = data[i];
    var otr = document.createElement("tr")
    for(var key in cur ){
      var otd = document.createElement("td");
      if(key==="sex"){
        otd.innerHTML = cur[key]>0? "女":"男";
      }else{
        otd.innerHTML = cur[key];
      }
      otr.appendChild(otd);
    }
    frg.appendChild(otr);
  }
  tBody.appendChild(frg);
}
bind();
function change(){
  for(var i =0;i<oRows.length;i++){
    oRows[i].className=i%2===1? "bg":null;
  }
}
change();
function listToArray(arry){
  var ary = [];
  try{
    ary = Array.prototype.slice.call(arry)
  }catch(e){
    for(var i =0;i<arry.length;i++){
      ary[ary.length]= arry[i];
    }
  }
  return ary;
}
function sort(n){
  this.flag*=-1;
  var _this = this;
  var ary = listToArray(oRows);

  for(var k =0;k<oThs.length;k++){
    if(this!==oThs[i]){
      oThs[k].flag=-1;
    }
  }

  ary.sort(function(a,b){
    var curInn = a.cells[n].innerHTML,nextInn = b.cells[n].innerHTML;
    var curInnNum = parseFloat(a.cells[n].innerHTML), nextInnNum = parseFloat(b.cells[n].innerHTML);
    if(isNaN(curInnNum)||isNaN(nextInnNum)){
      return (curInn.localeCompare(nextInn))*_this.flag;
    }
    return (curInnNum-nextInnNum)*_this.flag;//只有具体的某一行才有cells

  })
  var frg = document.createDocumentFragment();
  for(var i =0;i<ary.length;i++){
    frg.appendChild(ary[i]);
  }
  tBody.appendChild(frg);
  frg = null;
  change();
}

for(var i =0;i<oThs.length;i++){
  var curTh = oThs[i];
  if(curTh.className==="cursor"){
    curTh.index=i;
    curTh.flag = -1;
    curTh.onclick = function(){
    sort.call(this,this.index);
    }
  }
}

