var str = "abcdbbaaabc"
var obj = {};
var reg = /[a-z]/gi;
str.replace(reg,function(){
  var cur = arguments[0];
    if(obj[cur]>=1){
      obj[cur]+=1;
    }else{
      obj[cur]=1;
    }
})
var ary = [];
var maxNum = 0;
for(var key in obj){
  if(obj[key]>=maxNum){
    maxNum=obj[key];
    ary.push(key);
  }
}
// console.log(ary,maxNum);
var ary = ["zhiyuxia", "18", "china", "javascript"];
var str = "my name is {0}，my age is {1}，i com from {2}，i can do {3}~~";
var reg = /{(\d)}/g;
var str2;
str2 = str.replace(reg,function(){
  var val = arguments[1];
  return ary[val];
})
// console.log(str);
// console.log(str2);
var str = "http://kbs.sports.qq.com/kbsweb/game.htm?mid=100&cid=23432&app=1.2";
var reg = /([^?=&]+)=([^?=&]+)/g;
var obj ={};
var val = reg.exec(str);
while(val){
  obj[val[1]]=val[2];
  val = reg.exec(str);
}
console.log(obj);
