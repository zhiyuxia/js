var oTab = document.getElementById("tab");
var otbody = oTab.tBodies[0];
var otHead = oTab.tHead;
var oth = otHead.rows[0].cells;
var oRows = otbody.rows;
 console.log(oRows);
var xhr = new XMLHttpRequest;
xhr.open("get","data.txt",true)
xhr.onreadystatechange = function (){
  var data;
  if(xhr.readyState === 4&& /^2\d{2}$/.test(xhr.status)){
    var val = xhr.responseText;
    data = JSON.parse(val);
    // console.log(data);
    var frg = document.createDocumentFragment();
    for(var i =0;i<data.length;i++){
      var cur = data[i];
      var otr = document.createElement("tr");
      for(var key in cur){
        var otd = document.createElement("td");
        if(key==="sex"){
          otd.innerHTML=cur[key]===0? "男":"女";
          otr.appendChild(otd);
        }else{
          otd.innerHTML=cur[key];
          otr.appendChild(otd);
        }
      }
      frg.appendChild(otr);
    }
    otbody.appendChild(frg);
  }
}
xhr.send(null);

var oTab = document.getElementById("tab");
var otbody = oTab.tBodies[0];
var otHead = oTab.tHead;
var oth = otHead.rows[0].cells;
var oRows = otbody.rows;
 console.log(oRows);



// function change(){
//   console.log("!");
//   for(var i =0;i<oRows.length;i++){
//     console.log(oRows[i]);
//     oRows[i].className=i%2===1 ? "bg":null;
//   }
// }
// change();
function changeBg() {
    for (var i = 0; i < oRows.length; i++) {
        oRows[i].className = i % 2 === 1 ? "bg" : null;
    }
}
function toAry(arry){
  var ary =[];
  try{
    ary = Array.prototype.slice.call(arry);
  }catch(e){
    for(var i =0;i<arry.length;i++){
      ary.push(arry[i]);
    }
  }
  return ary;
}

  console.log(oRows);
  var ary = toAry(oRows);
  console.log(ary);

changeBg();
// function sort(){
//   var ary = toAry(oRows);
//   console.log(ary);
//   ary.sort(function(a,b){
//     return parseFloat(a.cells[1].innerHTML)-parseFloat(b.cells[1].innerHTML);
//   })
// }
// oth[1].onclick= function(){
//   sort();
// };
 var oTab = document.getElementById("tab");
var otbody = oTab.tBodies[0];
var otHead = oTab.tHead;
var oth = otHead.rows[0].cells;
var oRows = otbody.rows;
 console.log(oRows);

