// var a ="aaaabcccc"
// var obj ={};
// function most(str){
//   for(var i=0;i<str.length;i++){
//     var cur = str[i];
//     if(obj[cur]===undefined){
//       obj[cur]=1
//     }else{
//       obj[cur]++;
//     }
//   }
//   var arry=[];
//   var max =0;
//   var val;
//   for(var key in obj){
//     var curelem = obj[key];
//     if(curelem>=max){
//       max = curelem;
//     }
//   }
//   for(var key in obj){
//     if(obj[key] === max){
//       arry.push(key);
//     }
//   }
//   console.log(arry);
//   return   arry + ":" +max;
// }
// var b = most(a);
// console.log(b)

// 方法2  代替了for循环;
var str = "abcdbbaaabc"
var obj = {};
str.replace(/[a-z]/gi,function(){
  var cur = arguments[0];
  if(!obj[cur]){
    obj[cur] = 1;
  }else{
    obj[cur]++;
  }
})
console.log(obj);
