var div1 = document.getElementById("div1");
function children (parent,tag){
  var childNodes = div1.childNodes;
  var arry = [];
  for(var i = 0;i<childNodes.length;i++){
    var childNode = childNodes[i];
    if(childNode.nodeType===1){
      console.log(childNode);
      
      arry.push(childNode);
    }
  }
  // 注意加一个判断
  console.log(arry);
  if(typeof tag === "string"){
      for(var k = 0;k<arry.length;k++){
        var cur = arry[k];
        // console.log(cur.nodeName);
        if(cur.nodeName.toLowerCase()!==tag.toLowerCase()){
          arry.splice(k,1);
          k--;
        }
      }
    }
  return arry;
}
var a = children(div1,"p")
var b = children(div1)
console.log("aaa")
console.log(a);
console.log(b);
